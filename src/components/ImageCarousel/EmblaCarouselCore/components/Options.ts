import { type AlignmentOptionType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Alignment";
import { type AxisOptionType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Axis";
import { type DirectionOptionType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Direction";
import { type DragHandlerOptionType } from "@/components/ImageCarousel/EmblaCarouselCore/components/DragHandler";
import { type ResizeHandlerOptionType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ResizeHandler";
import { type ScrollContainOptionType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollContain";
import { type SlidesHandlerOptionType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlidesHandler";
import { type SlidesInViewOptionsType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlidesInView";
import { type SlidesToScrollOptionType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlidesToScroll";

export type LooseOptionsType = {
    [key: string]: unknown;
};

export type CreateOptionsType<Type extends LooseOptionsType> = Type & {
    active: boolean;
    breakpoints: {
        [key: string]: Omit<Partial<CreateOptionsType<Type>>, "breakpoints">;
    };
};

export type OptionsType = CreateOptionsType<{
    align: AlignmentOptionType;
    axis: AxisOptionType;
    container: string | HTMLElement | null;
    slides: string | HTMLElement[] | NodeListOf<HTMLElement> | null;
    containScroll: ScrollContainOptionType;
    direction: DirectionOptionType;
    slidesToScroll: SlidesToScrollOptionType;
    dragFree: boolean;
    dragThreshold: number;
    inViewThreshold: SlidesInViewOptionsType;
    loop: boolean;
    skipSnaps: boolean;
    duration: number;
    startIndex: number;
    watchDrag: DragHandlerOptionType;
    watchResize: ResizeHandlerOptionType;
    watchSlides: SlidesHandlerOptionType;
}>;

export const defaultOptions: OptionsType = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: false,
    dragThreshold: 10,
    loop: false,
    skipSnaps: false,
    duration: 25,
    startIndex: 0,
    active: true,
    watchDrag: true,
    watchResize: true,
    watchSlides: true,
};

export type EmblaOptionsType = Partial<OptionsType>;
