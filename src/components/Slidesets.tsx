import React from "react";

import stairsImage1 from "../assets/webp/scala-soggiorno.webp";
import stairsImage2 from "../assets/webp/scala-soggiorno-dettaglio-1.webp";
import stairsImage3 from "../assets/webp/scala-soggiorno-dettaglio-2.webp";
import diningTable1 from "../assets/webp/tavolo-soggiorno-legno.webp";
import diningTable2 from "../assets/webp/tavolo-soggiorno-legno-dettaglio.webp";
import bedroomBlueWardrobe1 from "../assets/webp/armadio-camera-letto-blu.webp";
import bedroomBlueWardrobe2 from "../assets/webp/armadio-camera-letto-blu-maniglie.webp";
import bedroomWhiteWardrobe1 from "../assets/webp/armadio-camera-letto-bianco.webp";
import bedroomWhiteWardrobe2 from "../assets/webp/armadio-camera-letto-bianco-pomelli.webp";
import bathroomGreen1 from "../assets/webp/bagno-verde.webp";
import bathroomGreen2 from "../assets/webp/bagno-verde-lavabo.webp";
import bathroomGreen3 from "../assets/webp/bagno-verde-mobile.webp";
import bathroomWhite from "../assets/webp/armadio-bagno-bianco.webp";

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
        <img
            src={stairsImage1.src}
            alt="tavolino circolare in legno"
            className="col-span-2 row-span-5 h-full w-full object-cover object-center"
        />
        <img
            src={stairsImage2.src}
            alt="tavolino circolare in legno"
            className="row-span-2 h-full w-full object-cover object-center"
        />
        <img
            src={stairsImage3.src}
            alt="tavolino circolare in legno"
            className="row-span-3 h-full w-full object-cover object-center"
        />
    </SlideWrapper>,
    <SlideWrapper className="relative">
        <img
            src={diningTable1.src}
            alt="tavolino circolare in legno"
            className="absolute bottom-0 start-0 h-full w-3/4 min-w-[18rem] object-cover object-center pt-6"
        />
        <img
            src={diningTable2.src}
            alt="tavolino circolare in legno"
            className="absolute end-0 top-0 h-64 w-44 bg-white object-cover object-center pb-3 ps-3"
        />
    </SlideWrapper>,
    <SlideWrapper className="relative xs:static">
        <div className="static h-full w-3/4 xs:relative">
            <img
                src={bedroomBlueWardrobe1.src}
                alt="tavolino circolare in legno"
                className="h-full w-full min-w-[18rem] object-cover object-center"
            />
            <img
                src={bedroomBlueWardrobe2.src}
                alt="tavolino circolare in legno"
                className="absolute bottom-0 end-0 h-44 w-24 bg-white object-cover object-center ps-3 pt-3 xs:translate-x-14"
            />
        </div>
    </SlideWrapper>,
    <SlideWrapper>
        <div className="relative h-full w-3/4">
            <img
                src={bedroomWhiteWardrobe1.src}
                alt="tavolino circolare in legno"
                className="h-full w-full min-w-[18rem] object-cover object-center"
            />
            <img
                src={bedroomWhiteWardrobe2.src}
                alt="tavolino circolare in legno"
                className="absolute end-0 top-1/3 translate-x-28 bg-white object-cover object-center py-3 ps-3"
            />
        </div>
    </SlideWrapper>,
    <SlideWrapper className="grid grid-cols-3 grid-rows-2 gap-3">
        <img
            src={bathroomGreen2.src}
            alt="tavolino circolare in legno"
            className="col-span-1 row-span-1 h-full w-full object-cover object-center"
        />
        <img
            src={bathroomGreen1.src}
            alt="tavolino circolare in legno"
            className="col-span-2 row-span-2 h-full w-full object-cover object-center"
        />
        <img
            src={bathroomGreen3.src}
            alt="tavolino circolare in legno"
            className="col-span-1 row-span-1 h-full w-full object-cover object-center"
        />
    </SlideWrapper>,
    <SlideWrapper className="grid">
        <div className="relative mx-auto h-full w-fit">
            <img
                src={bathroomWhite.src}
                alt="tavolino circolare in legno"
                className="h-full object-cover object-center"
            />
            <div className="absolute bottom-0 start-0 hidden h-44 w-3 bg-white xs:block" />
            <div className="absolute end-0 top-0 hidden h-64 w-3 bg-white xs:block" />
        </div>
    </SlideWrapper>,
];

const finishingSlideSet = [];

const restoreSlideSet = [];

export const slideSets: { [key in SlideSetName]: Slide[] } = {
    furnishing: furnishingSlideSet,
    finishing: finishingSlideSet,
    restore: restoreSlideSet,
};
