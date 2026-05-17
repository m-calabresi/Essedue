import { type LimitType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Limit";
import { type SlidesToScrollType } from "@/components/ImageCarousel/EmblaCarouselCore/components/SlidesToScroll";
import { arrayFromNumber, arrayIsLastIndex, arrayLast, arrayLastIndex } from "@/components/ImageCarousel/EmblaCarouselCore/components/utils";

export type SlideRegistryType = {
    slideRegistry: number[][];
};

export function SlideRegistry(
    viewSize: number,
    contentSize: number,
    containSnaps: boolean,
    scrollContainLimit: LimitType,
    slidesToScroll: SlidesToScrollType,
    slideIndexes: number[],
): SlideRegistryType {
    const { groupSlides } = slidesToScroll;
    const { min, max } = scrollContainLimit;
    const slideRegistry = createSlideRegistry();

    function createSlideRegistry(): number[][] {
        const groupedSlideIndexes = groupSlides(slideIndexes);
        if (!containSnaps || contentSize <= viewSize) return groupedSlideIndexes;

        return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
            const isFirst = !index;
            const isLast = arrayIsLastIndex(groups, index);

            if (isFirst) {
                const range = arrayLast(groups[0]) + 1;
                return arrayFromNumber(range);
            }
            if (isLast) {
                const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
                return arrayFromNumber(range, arrayLast(groups)[0]);
            }
            return group;
        });
    }

    const self: SlideRegistryType = {
        slideRegistry,
    };
    return self;
}
