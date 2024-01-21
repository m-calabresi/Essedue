import React from "react";
import ImageSlider from "./ImageSlider/Slider";

import {
    Image,
    ancientLivingAfterImage,
    ancientLivingBeforeImage,
    bathroomGreen1Image,
    bathroomGreen2Image,
    bathroomGreen3Image,
    bathroomWhiteImage,
    bedroomBlueWardrobe1Image,
    bedroomBlueWardrobe2Image,
    bedroomWhiteWardrobe1Image,
    bedroomWhiteWardrobe2Image,
    bookCaseAfterImage,
    bookCaseBeforeImage,
    carpenterWorkbenchImage,
    livingTable1Image,
    livingTable2Image,
    drawerAfterImage,
    drawerBeforeImage,
    entranceDrawerImage,
    entranceWritingDeskImage,
    hallwayAfterImage,
    hallwayBeforeImage,
    livingSetAfterImage,
    livingSetBefore1Image,
    livingSetBefore2Image,
    livingSetBefore3Image,
    multicolorDrawer1Image,
    multicolorDrawer2Image,
    nightTableAfterImage,
    nightTableBeforeImage,
    stairs1Image,
    stairs2Image,
    stairs3Image,
    vintageWritingDesk1Image,
    vintageWritingDesk2Image,
    vintageWritingDesk3Image,
    diningTable1Image,
    diningTable2Image,
    livingDrawerBeforeImage,
    livingDrawerAfterImage,
} from "../utils/image";
import { toDescription } from "../utils/utils";

export type SlideSetName = "furnishing" | "finishing" | "restore";
export type SlideSet = React.JSX.Element;

type SlideWrapperProps = {
    description: string;
    children: React.ReactNode;
    className?: string;
};

const SlideWrapper = ({ description, children, className }: SlideWrapperProps) => (
    <div className="embla__slide__img embla__parallax__img relative h-[var(--slide-height)] w-full max-w-none hover:cursor-grab active:cursor-grabbing">
        <div className={"h-full w-full pb-4 " + className}>{children}</div>
        <span className="absolute bottom-0 start-0 w-full bg-white pt-1 text-2xs leading-tight text-black">
            {description}
        </span>
    </div>
);

const furnishingSlideSet = [
    <SlideWrapper
        description={toDescription(stairs1Image, stairs2Image, stairs3Image)}
        className="grid grid-cols-3 grid-rows-5 gap-3">
        <Image
            content={stairs1Image}
            className="col-span-2 row-span-5 h-full w-full object-cover object-center"
        />
        <Image
            content={stairs2Image}
            className="row-span-2 h-full w-full object-cover object-center"
        />
        <Image
            content={stairs3Image}
            className="row-span-3 h-full w-full object-cover object-center"
        />
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(livingTable1Image, livingTable2Image)}
        className="relative">
        <Image
            content={livingTable1Image}
            className="absolute bottom-0 start-0 h-full w-3/4 min-w-[18rem] object-cover object-center pt-6"
        />
        <Image
            content={livingTable2Image}
            className="absolute end-0 top-0 h-64 w-44 bg-white object-cover object-center pb-3 ps-3"
        />
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(bedroomBlueWardrobe1Image, bedroomBlueWardrobe2Image)}
        className="relative xs:static">
        <div className="static h-full w-3/4 xs:relative">
            <Image
                content={bedroomBlueWardrobe1Image}
                className="h-full w-full min-w-[18rem] object-cover object-center"
            />
            <Image
                content={bedroomBlueWardrobe2Image}
                className="absolute bottom-0 end-0 h-44 w-24 bg-white object-cover object-center ps-3 pt-3 xs:translate-x-14"
            />
        </div>
    </SlideWrapper>,
    <SlideWrapper description={toDescription(bedroomWhiteWardrobe1Image, bedroomWhiteWardrobe2Image)}>
        <div className="relative h-full w-3/4">
            <Image
                content={bedroomWhiteWardrobe1Image}
                className="h-full w-full min-w-[18rem] object-cover object-center"
            />
            <Image
                content={bedroomWhiteWardrobe2Image}
                className="absolute end-0 top-1/3 translate-x-28 bg-white object-cover object-center py-3 ps-3"
            />
        </div>
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(bathroomGreen2Image, bathroomGreen1Image, bathroomGreen3Image)}
        className="grid grid-cols-3 grid-rows-2 gap-3">
        <Image
            content={bathroomGreen2Image}
            className="col-span-1 row-span-1 h-full w-full object-cover object-center"
        />
        <Image
            content={bathroomGreen1Image}
            className="col-span-2 row-span-2 h-full w-full object-cover object-center"
        />
        <Image
            content={bathroomGreen3Image}
            className="col-span-1 row-span-1 h-full w-full object-cover object-center"
        />
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(bathroomWhiteImage)}
        className="flex items-center justify-center">
        <Image
            content={bathroomWhiteImage}
            className="h-full object-cover object-center"
        />
    </SlideWrapper>,
];

const finishingSlideSet = [
    <SlideWrapper description={toDescription(hallwayBeforeImage, hallwayAfterImage)}>
        <ImageSlider
            beforeImage={hallwayBeforeImage}
            afterImage={hallwayAfterImage}
            handleClassName="embla__ignore"
        />
    </SlideWrapper>,
    <SlideWrapper description={toDescription(nightTableBeforeImage, nightTableAfterImage)}>
        <ImageSlider
            beforeImage={nightTableBeforeImage}
            afterImage={nightTableAfterImage}
            handleClassName="embla__ignore"
        />
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(bookCaseBeforeImage, bookCaseAfterImage)}
        className="relative">
        <Image
            content={bookCaseBeforeImage}
            className="h-3/5 w-3/5 object-cover object-center"
        />
        <Image
            content={bookCaseAfterImage}
            className="absolute bottom-0 end-0 h-3/5 w-3/5 bg-white object-cover object-center ps-3 pt-3"
        />
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(
            livingSetBefore1Image,
            livingSetBefore2Image,
            livingSetBefore3Image,
            livingSetAfterImage
        )}
        className="grid grid-cols-3 grid-rows-2 gap-3">
        <Image
            content={livingSetBefore1Image}
            className="col-span-1 row-span-1 h-full w-full object-cover object-center"
        />
        <Image
            content={livingSetBefore2Image}
            className="col-span-1 row-span-1 h-full w-full object-cover object-center"
        />
        <Image
            content={livingSetBefore3Image}
            className="col-span-1 row-span-1 h-full w-full object-cover object-center"
        />
        <Image
            content={livingSetAfterImage}
            className="col-span-3 row-span-1 h-full w-full object-cover object-center"
        />
    </SlideWrapper>,
    <SlideWrapper description={toDescription(drawerBeforeImage, drawerAfterImage)}>
        <ImageSlider
            beforeImage={drawerBeforeImage}
            afterImage={drawerAfterImage}
            handleClassName="embla__ignore"
        />
    </SlideWrapper>,
    <SlideWrapper description={toDescription(ancientLivingBeforeImage, ancientLivingAfterImage)}>
        <ImageSlider
            beforeImage={ancientLivingBeforeImage}
            afterImage={ancientLivingAfterImage}
            handleClassName="embla__ignore"
        />
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(multicolorDrawer2Image, multicolorDrawer1Image)}
        className="relative">
        <Image
            content={multicolorDrawer2Image}
            className="absolute end-0 top-0 h-3/5 w-3/5 object-cover object-center"
        />
        <Image
            content={multicolorDrawer1Image}
            className="absolute bottom-0 start-0 h-3/5 w-3/5 min-w-[18rem] bg-white object-cover object-center pe-3 pt-3"
        />
    </SlideWrapper>,
];

const restoreSlideSet = [
    <SlideWrapper
        description={toDescription(entranceDrawerImage, entranceWritingDeskImage)}
        className="flex flex-row gap-3">
        <Image
            content={entranceDrawerImage}
            className="h-5/6 w-1/2 self-start object-cover object-center"
        />
        <Image
            content={entranceWritingDeskImage}
            className="end-0 h-5/6 w-1/2 self-end object-cover object-center"
        />
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(
            vintageWritingDesk1Image,
            vintageWritingDesk2Image,
            vintageWritingDesk3Image
        )}
        className="grid grid-cols-3 grid-rows-5 gap-3">
        <Image
            content={vintageWritingDesk1Image}
            className="col-span-2 row-span-5 h-full w-full object-cover object-center"
        />
        <Image
            content={vintageWritingDesk2Image}
            className="col-span-1 row-span-2 h-full w-full object-cover object-center"
        />
        <Image
            content={vintageWritingDesk3Image}
            className="col-span-1 row-span-3 h-full w-full object-cover object-bottom"
        />
    </SlideWrapper>,
    <SlideWrapper description={toDescription(carpenterWorkbenchImage)}>
        <Image
            content={carpenterWorkbenchImage}
            className="h-full w-full object-cover object-center"
        />
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(diningTable1Image, diningTable2Image)}
        className="flex flex-row gap-3">
        <Image
            content={diningTable1Image}
            className="h-full w-1/2 object-cover object-center"
        />
        <Image
            content={diningTable2Image}
            className="h-full w-1/2 object-cover object-center"
        />
    </SlideWrapper>,
    <SlideWrapper
        description={toDescription(livingDrawerBeforeImage, livingDrawerAfterImage)}
        className="relative">
        <Image
            content={livingDrawerBeforeImage}
            className="absolute bottom-0 start-0 h-3/5 w-3/5 object-cover object-center"
        />
        <Image
            content={livingDrawerAfterImage}
            className="absolute end-0 top-0 h-3/5 w-3/5 bg-white object-cover object-center pb-3 ps-3"
        />
    </SlideWrapper>,
];

export const slideSets: { [key in SlideSetName]: SlideSet[] } = {
    furnishing: furnishingSlideSet,
    finishing: finishingSlideSet,
    restore: restoreSlideSet,
};
