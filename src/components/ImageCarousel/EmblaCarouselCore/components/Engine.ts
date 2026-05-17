import { Alignment } from "@/components/ImageCarousel/EmblaCarouselCore/components/Alignment";
import { type AnimationRenderType, type AnimationType, type AnimationUpdateType, type AnimationsType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Animations";
import { Axis, type AxisType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Axis";
import { Counter, type CounterType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Counter";
import { Direction, type DirectionType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Direction";
import { DragHandler, type DragHandlerType } from "@/components/ImageCarousel/EmblaCarouselCore/components/DragHandler";
import { DragTracker } from "@/components/ImageCarousel/EmblaCarouselCore/components/DragTracker";
import { type EventHandlerType } from "@/components/ImageCarousel/EmblaCarouselCore/components/EventHandler";
import { EventStore, type EventStoreType } from "@/components/ImageCarousel/EmblaCarouselCore/components/EventStore";
import { type LimitType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Limit";
import { type OptionsType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Options";
import { PercentOfView, type PercentOfViewType } from "@/components/ImageCarousel/EmblaCarouselCore/components/PercentOfView";
import { ResizeHandler, type ResizeHandlerType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ResizeHandler";
import { ScrollBody, type ScrollBodyType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollBody";
import { ScrollBounds, type ScrollBoundsType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollBounds";
import { ScrollContain } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollContain";
import { ScrollLimit } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollLimit";
import { ScrollLooper, type ScrollLooperType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollLooper";
import { ScrollProgress, type ScrollProgressType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollProgress";
import { ScrollSnaps } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollSnaps";
import { ScrollTarget, type ScrollTargetType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollTarget";
import { ScrollTo, type ScrollToType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollTo";
import { SlideFocus, type SlideFocusType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlideFocus";
import { SlideLooper, type SlideLooperType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlideLooper";
import { SlideRegistry, type SlideRegistryType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlideRegistry";
import { SlidesHandler, type SlidesHandlerType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlidesHandler";
import { SlidesInView, type SlidesInViewType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlidesInView";
import { SlideSizes } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlideSizes";
import { SlidesToScroll, type SlidesToScrollType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlidesToScroll";
import { Translate, type TranslateType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Translate";
import { arrayKeys, arrayLast, arrayLastIndex, type WindowType } from "@/components/ImageCarousel/EmblaCarouselCore/components/utils";
import { Vector1D, type Vector1DType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Vector1d";

export type EngineType = {
    ownerDocument: Document;
    ownerWindow: WindowType;
    eventHandler: EventHandlerType;
    axis: AxisType;
    direction: DirectionType;
    animation: AnimationType;
    scrollBounds: ScrollBoundsType;
    scrollLooper: ScrollLooperType;
    scrollProgress: ScrollProgressType;
    index: CounterType;
    indexPrevious: CounterType;
    limit: LimitType;
    location: Vector1DType;
    offsetLocation: Vector1DType;
    options: OptionsType;
    percentOfView: PercentOfViewType;
    scrollBody: ScrollBodyType;
    dragHandler: DragHandlerType;
    eventStore: EventStoreType;
    slideLooper: SlideLooperType;
    slidesInView: SlidesInViewType;
    slidesToScroll: SlidesToScrollType;
    target: Vector1DType;
    translate: TranslateType;
    resizeHandler: ResizeHandlerType;
    slidesHandler: SlidesHandlerType;
    scrollTo: ScrollToType;
    scrollTarget: ScrollTargetType;
    scrollSnapList: number[];
    scrollSnaps: number[];
    slideIndexes: number[];
    slideFocus: SlideFocusType;
    slideRegistry: SlideRegistryType["slideRegistry"];
    containerRect: DOMRect;
    slideRects: DOMRect[];
};

export function Engine(
    root: HTMLElement,
    container: HTMLElement,
    slides: HTMLElement[],
    ownerDocument: Document,
    ownerWindow: WindowType,
    options: OptionsType,
    eventHandler: EventHandlerType,
    animations: AnimationsType,
): EngineType {
    // Options
    const {
        align,
        axis: scrollAxis,
        direction: contentDirection,
        startIndex,
        loop,
        duration,
        dragFree,
        dragThreshold,
        inViewThreshold,
        slidesToScroll: groupSlides,
        skipSnaps,
        containScroll,
        watchResize,
        watchSlides,
        watchDrag,
    } = options;

    // Measurements
    const containerRect = container.getBoundingClientRect();
    const slideRects = slides.map((slide) => slide.getBoundingClientRect());
    const direction = Direction(contentDirection);
    const axis = Axis(scrollAxis, contentDirection);
    const viewSize = axis.measureSize(containerRect);
    const percentOfView = PercentOfView(viewSize);
    const alignment = Alignment(align, viewSize);
    const containSnaps = !loop && !!containScroll;
    const readEdgeGap = loop || !!containScroll;
    const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
    const slidesToScroll = SlidesToScroll(axis, direction, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap);
    const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
    const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
    const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll);
    const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
    const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);

    // Indexes
    const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
    const indexPrevious = index.clone();
    const slideIndexes = arrayKeys(slides);

    // Animation
    const update: AnimationUpdateType = ({ dragHandler, scrollBody, scrollBounds, eventHandler, animation, options: { loop } }) => {
        const pointerDown = dragHandler.pointerDown();

        if (!loop) scrollBounds.constrain(pointerDown);

        const hasSettled = scrollBody.seek().settled();

        if (hasSettled && !pointerDown) {
            animation.stop();
            eventHandler.emit("settle");
        }

        if (!hasSettled) eventHandler.emit("scroll");
    };

    const render: AnimationRenderType = ({ scrollBody, translate, location, offsetLocation, scrollLooper, slideLooper, options: { loop } }, lagOffset) => {
        const velocity = scrollBody.velocity();
        offsetLocation.set(location.get() - velocity + velocity * lagOffset);

        if (loop) {
            scrollLooper.loop(scrollBody.direction());
            slideLooper.loop();
        }

        translate.to(offsetLocation.get());
    };

    const animation: AnimationType = {
        start: () => animations.start(engine),
        stop: () => animations.stop(engine),
        update: () => update(engine),
        render: (lagOffset: number) => render(engine, lagOffset),
    };

    // Shared
    const friction = 0.68;
    const startLocation = scrollSnaps[index.get()];
    const location = Vector1D(startLocation);
    const offsetLocation = Vector1D(startLocation);
    const target = Vector1D(startLocation);
    const scrollBody = ScrollBody(location, target, duration, friction);
    const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
    const scrollTo = ScrollTo(animation, index, indexPrevious, scrollTarget, scrollBody, target, eventHandler);
    const scrollProgress = ScrollProgress(limit);
    const eventStore = EventStore();
    const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
    const { slideRegistry } = SlideRegistry(viewSize, contentSize, containSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
    const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore);

    // Engine
    const engine: EngineType = {
        ownerDocument,
        ownerWindow,
        eventHandler,
        containerRect,
        slideRects,
        animation,
        axis,
        direction,
        dragHandler: DragHandler(
            axis,
            direction,
            root,
            ownerDocument,
            ownerWindow,
            target,
            DragTracker(axis, ownerWindow),
            location,
            animation,
            scrollTo,
            scrollBody,
            scrollTarget,
            index,
            eventHandler,
            percentOfView,
            dragFree,
            dragThreshold,
            skipSnaps,
            friction,
            watchDrag,
        ),
        eventStore,
        percentOfView,
        index,
        indexPrevious,
        limit,
        location,
        offsetLocation,
        options,
        resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize),
        scrollBody,
        scrollBounds: ScrollBounds(limit, location, target, scrollBody, percentOfView),
        scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [location, offsetLocation, target]),
        scrollProgress,
        scrollSnapList: scrollSnaps.map(scrollProgress.get),
        scrollSnaps,
        scrollTarget,
        scrollTo,
        slideLooper: SlideLooper(axis, direction, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
        slideFocus,
        slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
        slidesInView,
        slideIndexes,
        slideRegistry,
        slidesToScroll,
        target,
        translate: Translate(axis, direction, container),
    };

    return engine;
}
