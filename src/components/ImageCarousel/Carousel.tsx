import React, { useState, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";

import useEmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType } from "./EmblaCarouselReact";
import { type SlideSetName, type SlideSet, slideSets } from "../Slidesets";

const TWEEN_FACTOR = 1.2;

const defaultOptions: EmblaOptionsType = { loop: true };

type Props = {
    prevIcon: any;
    nextIcon: any;
    slideSetName: SlideSetName;
    options?: EmblaOptionsType;
    className?: string;
};

export default function ImageCarousel({ prevIcon, nextIcon, slideSetName, options, className }: Props) {
    const slideSet: SlideSet[] = slideSets[slideSetName];

    const [emblaRef, emblaApi] = useEmblaCarousel({ ...(options || defaultOptions) });
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [tweenValues, setTweenValues] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    const onScroll = useCallback(() => {
        if (!emblaApi) return;

        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();

        const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
            let diffToTarget = scrollSnap - scrollProgress;

            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.target();
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target);
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
                    }
                });
            }
            return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
        });
        setTweenValues(styles);
    }, [emblaApi, setTweenValues]);

    useEffect(() => {
        if (!emblaApi) return;

        onScroll();
        onSelect(emblaApi);

        emblaApi.on("scroll", (emblaApi) => {
            flushSync(() => onScroll());
        });

        emblaApi.on("reInit", (emblaApi) => {
            onScroll();
            onSelect(emblaApi);
        });
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect, onScroll]);

    return (
        <>
            <div className={["embla", className].join(" ")}>
                <div
                    className="embla__viewport overflow-hidden"
                    ref={emblaRef}>
                    <div className="embla__container ml-[calc(var(--slide-spacing)*-1)] flex touch-pan-y backface-hidden">
                        {slideSet.map((slide, i) => (
                            <div
                                key={i}
                                className="embla__parallax h-100 min-w-0 flex-[0_0_var(--slide-size)] overflow-hidden pl-(--slide-spacing)">
                                <div
                                    className="embla__parallax__layer relative h-full w-full"
                                    style={{
                                        ...(tweenValues.length && {
                                            transform: `translateX(${tweenValues[i]}%)`,
                                        }),
                                    }}>
                                    {slide}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__buttons mt-3 flex flex-row gap-1 self-end">
                    <button
                        aria-label="immagine precedente"
                        className="embla__button embla__button--prev h-fit w-fit touch-manipulation appearance-none border-2 border-black bg-black px-4.5 py-3.5 text-center text-[0.8rem] font-extrabold uppercase leading-7 tracking-wider text-white transition-all duration-300 hover:text-gray-400 focus-visible:z-20 focus-visible:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-white disabled:cursor-default disabled:opacity-10"
                        type="button"
                        onClick={scrollPrev}
                        disabled={prevBtnDisabled}>
                        {prevIcon}
                    </button>
                    <button
                        aria-label="immagine successiva"
                        className="embla__button embla__button--next h-fit w-fit touch-manipulation appearance-none border-2 border-black bg-black px-4.5 py-3.5 text-center text-[0.8rem] font-extrabold uppercase leading-7 tracking-wider text-white transition-all duration-300 hover:text-gray-400 focus-visible:z-20 focus-visible:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-white disabled:cursor-default disabled:opacity-10"
                        type="button"
                        onClick={scrollNext}
                        disabled={nextBtnDisabled}>
                        {nextIcon}
                    </button>
                </div>
            </div>
        </>
    );
}
