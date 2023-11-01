import { type AlignmentOptionType } from "./Alignment";
import { type AxisOptionType } from "./Axis";
import { type SlidesToScrollOptionType } from "./SlidesToScroll";
import { type DirectionOptionType } from "./Direction";
import { type ScrollContainOptionType } from "./ScrollContain";
import { type DragHandlerOptionType } from "./DragHandler";
import { type ResizeHandlerOptionType } from "./ResizeHandler";
import { type SlidesHandlerOptionType } from "./SlidesHandler";
import { type SlidesInViewOptionsType } from "./SlidesInView";

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
