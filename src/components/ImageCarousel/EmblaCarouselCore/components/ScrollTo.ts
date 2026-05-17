import { type AnimationType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Animations";
import { type CounterType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Counter";
import { type EventHandlerType } from "@/components/ImageCarousel/EmblaCarouselCore/components/EventHandler";
import { type ScrollBodyType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollBody";
import { type ScrollTargetType, type TargetType } from "@/components/ImageCarousel/EmblaCarouselCore/components/ScrollTarget";
import { type Vector1DType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Vector1d";

export type ScrollToType = {
    distance: (n: number, snap: boolean) => void;
    index: (n: number, direction: number) => void;
};

export function ScrollTo(
    animation: AnimationType,
    indexCurrent: CounterType,
    indexPrevious: CounterType,
    scrollTarget: ScrollTargetType,
    scrollBody: ScrollBodyType,
    targetVector: Vector1DType,
    eventHandler: EventHandlerType,
): ScrollToType {
    function scrollTo(target: TargetType): void {
        const distanceDiff = target.distance;
        const indexDiff = target.index !== indexCurrent.get();

        targetVector.add(distanceDiff);

        if (distanceDiff) {
            if (scrollBody.duration()) {
                animation.start();
            } else {
                animation.update();
                animation.render(1);
                animation.update();
            }
        }

        if (indexDiff) {
            indexPrevious.set(indexCurrent.get());
            indexCurrent.set(target.index);
            eventHandler.emit("select");
        }
    }

    function distance(n: number, snap: boolean): void {
        const target = scrollTarget.byDistance(n, snap);
        scrollTo(target);
    }

    function index(n: number, direction: number): void {
        const targetIndex = indexCurrent.clone().set(n);
        const target = scrollTarget.byIndex(targetIndex.get(), direction);
        scrollTo(target);
    }

    const self: ScrollToType = {
        distance,
        index,
    };
    return self;
}
