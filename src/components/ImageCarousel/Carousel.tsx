import React, { useState, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";

import useEmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType } from "./EmblaCarouselReact";
import ImageSlider, { type SliderImageType } from "../ImageSlider/Slider";

import image1 from "../../assets/coffee-table-top.jpg";
import image2 from "../../assets/home-background.jpg";
import image3 from "../../assets/wood-machine-1.jpg";
import image4 from "../../assets/wood-machine-2.jpg";
import BeforeImage from "../../assets/left.jpg";
import AfterImage from "../../assets/right.jpg";

const beforeImage: SliderImageType = {
    imageUrl: BeforeImage.src,
    alt: "this is the first image",
};
const afterImage: SliderImageType = {
    imageUrl: AfterImage.src,
    alt: "this is the second image",
};

const TWEEN_FACTOR = 1.2;

const defaultOptions: EmblaOptionsType = { loop: true };

type SlideSetName = "furnishing" | "finishing" | "restore";
type SlideType = "image" | "slider";
type ImageSlideContent = { image: ImageMetadata; alt: string };
type SliderSlideContent = React.JSX.Element;
type SlideContent = ImageSlideContent | SliderSlideContent;
type Slide = {
    type: SlideType;
    content: SlideContent;
};

type Props = {
    prevIcon: any;
    nextIcon: any;
    slideSet: SlideSetName;
    options?: EmblaOptionsType;
    className?: string;
};

const slideSets: { [key in SlideSetName]: Slide[] } = {
    furnishing: [
        { type: "image", content: { image: image1, alt: "this is a sample alt text" } },
        {
            type: "slider",
            content: (
                <ImageSlider
                    beforeImage={beforeImage}
                    afterImage={afterImage}
                    handleClassName="embla__ignore"
                />
            ),
        },
        { type: "image", content: { image: image2, alt: "this is a sample alt text" } },
        { type: "image", content: { image: image3, alt: "this is a sample alt text" } },
        { type: "image", content: { image: image4, alt: "this is a sample alt text" } },
    ],
    finishing: [
        { type: "image", content: { image: image4, alt: "this is a sample alt text" } },
        { type: "image", content: { image: image3, alt: "this is a sample alt text" } },
        { type: "image", content: { image: image2, alt: "this is a sample alt text" } },
        { type: "image", content: { image: image1, alt: "this is a sample alt text" } },
    ],
    restore: [
        { type: "image", content: { image: image2, alt: "this is a sample alt text" } },
        { type: "image", content: { image: image4, alt: "this is a sample alt text" } },
        { type: "image", content: { image: image1, alt: "this is a sample alt text" } },
        { type: "image", content: { image: image3, alt: "this is a sample alt text" } },
    ],
};

const getSlideElement = (slide: Slide, i: number): React.JSX.Element => {
    switch (slide.type) {
        case "image":
            return (
                <img
                    className="embla__slide__img embla__parallax__img block h-[var(--slide-height)] w-full max-w-none object-cover object-center hover:cursor-grab active:cursor-grabbing"
                    src={(slide.content as ImageSlideContent).image.src}
                    alt={(slide.content as ImageSlideContent).alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                />
            );
        case "slider":
            return slide.content as SliderSlideContent;
    }
};

export default function ImageCarousel({ prevIcon, nextIcon, slideSet, options, className }: Props) {
    const slides: Slide[] = slideSets[slideSet];

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
                    <div className="embla__container ml-[calc(var(--slide-spacing)_*_-1)] flex touch-pan-y backface-hidden">
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className="embla__parallax h-100 min-w-0 flex-[0_0_var(--slide-size)] overflow-hidden pl-[var(--slide-spacing)]">
                                <div
                                    className="embla__parallax__layer relative h-full w-full"
                                    style={{
                                        ...(tweenValues.length && {
                                            transform: `translateX(${tweenValues[i]}%)`,
                                        }),
                                    }}>
                                    {getSlideElement(slide, i)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__buttons mt-2 flex flex-row gap-0.5 self-end">
                    <button
                        className="embla__button embla__button--prev h-fit w-fit touch-manipulation appearance-none border-2 border-black bg-black px-[1.125rem] py-3.5 text-center text-[0.8rem] font-extrabold uppercase leading-7 tracking-wider text-white transition-all duration-300 hover:text-gray-400 focus-visible:z-20 focus-visible:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-white disabled:cursor-default disabled:opacity-10"
                        type="button"
                        onClick={scrollPrev}
                        disabled={prevBtnDisabled}>
                        {prevIcon}
                    </button>
                    <button
                        className="embla__button embla__button--next h-fit w-fit touch-manipulation appearance-none border-2 border-black bg-black px-[1.125rem] py-3.5 text-center text-[0.8rem] font-extrabold uppercase leading-7 tracking-wider text-white transition-all duration-300 hover:text-gray-400 focus-visible:z-20 focus-visible:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-white disabled:cursor-default disabled:opacity-10"
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