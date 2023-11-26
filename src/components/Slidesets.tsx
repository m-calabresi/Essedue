import React from "react";
import ImageSlider from "./ImageSlider/Slider";

import {
    Image,
    bathroomGreen1Image,
    bathroomGreen2Image,
    bathroomGreen3Image,
    bathroomWhiteImageImage,
    bedroomBlueWardrobe1Image,
    bedroomBlueWardrobe2Image,
    bedroomWhiteWardrobe1Image,
    bedroomWhiteWardrobe2Image,
    diningTable1Image,
    diningTable2Image,
    stairs1Image,
    stairs2Image,
    stairs3Image,
} from "../utils/image";

export type SlideSetName = "furnishing" | "finishing" | "restore";
export type SlideSet = React.JSX.Element;

type SlideWrapperProps = {
    children: React.ReactNode;
    className?: string;
};

const SlideWrapper = ({ children, className }: SlideWrapperProps) => (
    <div
        className={[
            "embla__slide__img embla__parallax__img h-[var(--slide-height)] w-full max-w-none hover:cursor-grab active:cursor-grabbing",
            className,
        ].join(" ")}>
        {children}
    </div>
);

const furnishingSlideSet = [
    <SlideWrapper className="grid grid-cols-3 grid-rows-5 gap-3">
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
    <SlideWrapper className="relative">
        <Image
            content={diningTable1Image}
            className="absolute bottom-0 start-0 h-full w-3/4 min-w-[18rem] object-cover object-center pt-6"
        />
        <Image
            content={diningTable2Image}
            className="absolute end-0 top-0 h-64 w-44 bg-white object-cover object-center pb-3 ps-3"
        />
    </SlideWrapper>,
    <SlideWrapper className="relative xs:static">
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
    <SlideWrapper>
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
    <SlideWrapper className="grid grid-cols-3 grid-rows-2 gap-3">
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
    <SlideWrapper className="grid">
        <div className="relative mx-auto h-full w-fit">
            <Image
                content={bathroomWhiteImageImage}
                className="h-full object-cover object-center"
            />
            <div className="absolute bottom-0 start-0 hidden h-44 w-3 bg-white xs:block" />
            <div className="absolute end-0 top-0 hidden h-64 w-3 bg-white xs:block" />
        </div>
    </SlideWrapper>,
];

const finishingSlideSet = [];

const restoreSlideSet = [];

export const slideSets: { [key in SlideSetName]: SlideSet[] } = {
    furnishing: furnishingSlideSet,
    finishing: finishingSlideSet,
    restore: restoreSlideSet,
};
