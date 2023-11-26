import React, { type MouseEventHandler, type TouchEventHandler, useEffect, useRef, useState } from "react";

export function isIntersectionObserverSupport() {
    if (typeof window === "undefined") return false;
    return Boolean(window.IntersectionObserver);
}

export interface SliderImageType {
    image: ImageMetadata;
    alt: string;
}

type OnSliderLoadCallback = () => void;

enum MODE {
    MOVE = "move",
    DEFAULT = "default",
}

interface Props {
    beforeImage: SliderImageType;
    afterImage: SliderImageType;
    currentPercentPosition?: number;
    className?: string;
    handleClassName?: string;
    withResizeFeel?: boolean;
    onReady?: OnSliderLoadCallback;
    onVisible?: () => void;
    onChangePercentPosition?: (newPosition: number) => void;
    /**
     * Whether only the handle is draggable, or the whole slider.
     */
    handleDraggableOnly?: boolean;
    handleIcon?: string;
    handleColor?: string;
    onChangeMode?: (newMode: MODE) => void;
}

type OnImageLoadCallback = (idx: 0 | 1) => void;

function useReadyStatus(
    imagesWidth: number | null,
    refContainer: React.RefObject<HTMLDivElement>,
    onReady?: OnSliderLoadCallback
) {
    const [isReady, setIsReady] = useState(false);

    const imagesLoadedRef = useRef<[boolean, boolean]>([false, false]);
    const onImageLoad = (idx: 0 | 1) => {
        const newImagesLoadedRef: [boolean, boolean] = [...imagesLoadedRef.current];
        newImagesLoadedRef[idx] = true;
        imagesLoadedRef.current = newImagesLoadedRef;
    };

    useEffect(() => {
        if (!isReady && imagesLoadedRef.current.every(Boolean) && imagesWidth && refContainer.current) {
            setIsReady(true);
        }
    }, [imagesLoadedRef.current, imagesWidth, isReady, refContainer.current]);

    useEffect(() => {
        if (isReady && onReady) {
            onReady();
        }
    }, [isReady]);

    return {
        onImageLoad,
        isReady,
    };
}

function useInit(
    updateContainerWidth: () => void,
    onMouseUpHandler: () => void,
    firstImageRef: React.RefObject<HTMLImageElement>,
    onImageLoad: OnImageLoadCallback
) {
    useEffect(() => {
        updateContainerWidth();
        // With ssr the first image may already be loaded. The second image only appears on the client.
        if (firstImageRef.current && firstImageRef.current.complete) {
            onImageLoad(0);
        }

        document.addEventListener("click", onMouseUpHandler);
        return () => {
            document.removeEventListener("click", onMouseUpHandler);
        };
    }, []);
}

function useResizeFeel(callback: () => void, withResizeFeel?: boolean) {
    useEffect(() => {
        if (withResizeFeel) {
            window.addEventListener("resize", callback);
        }

        return () => {
            window.removeEventListener("resize", callback);
        };
    }, []);
}

function normalizeNewPosition(newPosition: number, imagesWidth: number) {
    if (newPosition > imagesWidth) {
        return imagesWidth;
    }
    if (newPosition < 0) {
        return 0;
    }

    return newPosition;
}

const DEFAULT_START_PERCENT = 50;
const DEFAULT_BACKGROUND_COLOR = "#fff";

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    className,
    handleClassName,
    withResizeFeel = true,
    currentPercentPosition,
    onVisible,
    onReady,
    onChangePercentPosition,
    handleIcon,
    handleDraggableOnly = false,
    handleColor = DEFAULT_BACKGROUND_COLOR,
    onChangeMode,
}: Props) {
    const classNames = [];
    className && classNames.push(className);

    const refContainer = useRef<HTMLDivElement>(null);
    const firstImageRef = useRef<HTMLImageElement>(null);

    const [imagesWidth, setImagesWidth] = useState<number | null>(null);
    const [handlePercentPosition, setHandlePosition] = useState(
        currentPercentPosition || DEFAULT_START_PERCENT
    );
    const [sliderMode, setSliderMode] = useState<MODE>(MODE.DEFAULT);
    const { onImageLoad, isReady } = useReadyStatus(imagesWidth, refContainer, onReady);
    const [containerPosition, setContainerPosition] = useState({
        top: 0,
        left: 0,
    });

    const onFirstImageLoad = () => {
        updateContainerWidth();
        onImageLoad(0);
    };

    /**
     * Observer start
     */
    const observerVisiblePercent = 0.95;
    const observerOptions = {
        threshold: [0.0, observerVisiblePercent],
    };
    const observerCallback = function (entries: IntersectionObserverEntry[]) {
        if (!observer || !onVisible) return;
        entries.forEach((entry) => {
            if (entry.intersectionRatio > observerVisiblePercent) {
                observer.disconnect();
                onVisible();
            }
        });
    };
    const [observer] = useState(
        onVisible && isIntersectionObserverSupport()
            ? new IntersectionObserver(observerCallback, observerOptions)
            : null
    );
    useEffect(() => {
        if (observer) {
            if (!isReady) return;
            observer.observe(refContainer.current as HTMLDivElement);
        }
    }, [isReady]);
    /**
     * Observer end
     */

    useEffect(() => {
        if (!currentPercentPosition || !imagesWidth) {
            return;
        }
        setHandlePosition(normalizeNewPosition(currentPercentPosition, imagesWidth));
    }, [currentPercentPosition, imagesWidth]);

    const updateContainerWidth = () => {
        if (!refContainer.current) return;
        const containerWidth = refContainer.current.offsetWidth;
        setImagesWidth(containerWidth);
    };

    const onMouseUpHandler = () => {
        setSliderModeProxy(MODE.DEFAULT);
    };

    const setSliderModeProxy = (newMode: MODE) => {
        setSliderMode(newMode);
        onChangeMode && onChangeMode(newMode);
    };

    useInit(updateContainerWidth, onMouseUpHandler, firstImageRef, onImageLoad);

    const imgStyles = !imagesWidth ? undefined : { width: `${imagesWidth}px` };
    const secondImgContainerStyle = { width: `${handlePercentPosition}%` };

    const preparedHandleIconStyles = React.useMemo(
        () => ({
            backgroundColor: handleColor,
            ...(handleIcon ? { backgroundImage: `url(${handleIcon})` } : {}),
        }),
        [handleColor, handleIcon]
    );

    const handleStyle = React.useMemo(
        () => ({
            left: `${handlePercentPosition}%`,
            backgroundColor: handleColor,
        }),
        [handlePercentPosition, handleColor]
    );

    const updateContainerPosition = () => {
        if (!refContainer.current) return;
        const containerCoords = refContainer.current.getBoundingClientRect();

        setContainerPosition({
            top: containerCoords.top + pageYOffset,
            left: containerCoords.left + pageXOffset,
        });
    };

    const onMouseDownHandler = () => {
        updateContainerPosition();
        setSliderModeProxy(MODE.MOVE);
    };

    const onMouseMoveHandler: MouseEventHandler<HTMLDivElement> = (e) => onMoveHandler(e);

    const onTouchMoveHandler: TouchEventHandler<HTMLDivElement> = (e) => {
        onMoveHandler(e.touches[0]);
    };

    const onMoveHandler = (e: React.Touch | React.MouseEvent) => {
        if (sliderMode === MODE.MOVE) {
            if (!imagesWidth) return;
            const X = e.pageX - containerPosition.left;
            const newPosition = (normalizeNewPosition(X, imagesWidth) / imagesWidth) * 100;
            onChangePercentPosition ? onChangePercentPosition(newPosition) : setHandlePosition(newPosition);
        }
    };

    useResizeFeel(updateContainerWidth, withResizeFeel);

    const onClickHandlers = {
        onMouseDown: onMouseDownHandler,
        onTouchStart: onMouseDownHandler,
    };

    return (
        <div
            ref={refContainer}
            className={
                classNames.join(" ") +
                "relative h-[var(--slide-height)] w-full hover:cursor-grab active:cursor-grabbing"
            }
            onMouseMove={onMouseMoveHandler}
            onTouchMove={onTouchMoveHandler}
            onTouchEnd={onMouseUpHandler}
            onTouchCancel={onMouseUpHandler}
            {...(!handleDraggableOnly ? onClickHandlers : {})}>
            <div className="h-[var(--slide-height)] w-full overflow-hidden">
                <img
                    className="h-full w-full max-w-none select-none object-cover object-center"
                    src={afterImage.image.src}
                    width={afterImage.image.width}
                    height={afterImage.image.height}
                    onLoad={onFirstImageLoad}
                    draggable={false}
                    alt={beforeImage.alt}
                    ref={firstImageRef}
                />
            </div>
            {Boolean(imagesWidth) && (
                <>
                    <div
                        className="absolute top-0 h-[var(--slide-height)] w-full overflow-hidden"
                        style={secondImgContainerStyle}>
                        <img
                            className="h-full w-full max-w-none select-none object-cover object-center"
                            style={imgStyles}
                            src={beforeImage.image.src}
                            width={beforeImage.image.width}
                            height={beforeImage.image.height}
                            onLoad={() => onImageLoad(1)}
                            draggable={false}
                            alt={beforeImage.alt}
                        />
                    </div>
                    <div
                        className={[
                            handleClassName,
                            "absolute top-0 flex h-full w-1 cursor-default items-center justify-center hover:cursor-default active:cursor-default",
                        ].join(" ")}
                        style={handleStyle}>
                        <div
                            className={handleClassName}
                            {...(handleDraggableOnly ? onClickHandlers : {})}>
                            <div
                                className={[
                                    handleClassName,
                                    "z-50 h-10 w-10 cursor-pointer select-none rounded-full bg-cover",
                                ].join(" ")}
                                style={preparedHandleIconStyles}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
