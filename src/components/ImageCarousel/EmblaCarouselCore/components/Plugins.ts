import { type EmblaCarouselType } from "@/components/ImageCarousel/EmblaCarouselCore/components/EmblaCarousel";
import { type CreateOptionsType, type LooseOptionsType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Options";
import { type OptionsHandlerType } from "@/components/ImageCarousel/EmblaCarouselCore/components/OptionsHandler";

export type LoosePluginType = {
    [key: string]: unknown;
};

export type CreatePluginType<TypeA extends LoosePluginType, TypeB extends LooseOptionsType> = TypeA & {
    name: string;
    options: Partial<CreateOptionsType<TypeB>>;
    init: (embla: EmblaCarouselType, OptionsHandler: OptionsHandlerType) => void;
    destroy: () => void;
};

export interface EmblaPluginsType {
    [key: string]: CreatePluginType<LoosePluginType, {}>;
}

export type EmblaPluginType = EmblaPluginsType[keyof EmblaPluginsType];
