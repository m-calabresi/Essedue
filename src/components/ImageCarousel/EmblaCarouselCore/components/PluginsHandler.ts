import { type EmblaCarouselType } from "@/components/ImageCarousel/EmblaCarouselCore/components/EmblaCarousel";
import { type OptionsHandlerType } from "@/components/ImageCarousel/EmblaCarouselCore/components/OptionsHandler";
import { type EmblaPluginsType, type EmblaPluginType } from "@/components/ImageCarousel/EmblaCarouselCore/components/Plugins";

export type PluginsHandlerType = {
    init: (emblaApi: EmblaCarouselType, plugins: EmblaPluginType[]) => EmblaPluginsType;
    destroy: () => void;
};

export function PluginsHandler(optionsHandler: OptionsHandlerType): PluginsHandlerType {
    let activePlugins: EmblaPluginType[] = [];

    function init(emblaApi: EmblaCarouselType, plugins: EmblaPluginType[]): EmblaPluginsType {
        activePlugins = plugins.filter(({ options }) => optionsHandler.optionsAtMedia(options).active !== false);
        activePlugins.forEach((plugin) => plugin.init(emblaApi, optionsHandler));

        return plugins.reduce((map, plugin) => Object.assign(map, { [plugin.name]: plugin }), {});
    }

    function destroy(): void {
        activePlugins = activePlugins.filter((plugin) => plugin.destroy());
    }

    const self: PluginsHandlerType = {
        init,
        destroy,
    };
    return self;
}
