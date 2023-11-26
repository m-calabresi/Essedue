import React from "react";

import stairs1 from "../assets/webp/scala-soggiorno.webp";
import stairs2 from "../assets/webp/scala-soggiorno-dettaglio-1.webp";
import stairs3 from "../assets/webp/scala-soggiorno-dettaglio-2.webp";
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

export type ImageType = {
    image: ImageMetadata;
    alt: string;
};

type ImageProps = {
    content: ImageType;
    className?: string;
};

export const Image = ({ content, className }: ImageProps) => (
    <img
        src={content.image.src}
        width={content.image.width}
        height={content.image.height}
        alt={content.alt}
        className={className ?? ""}
    />
);

// TODO: alt texts
export const stairs1Image: ImageType = {
    image: stairs1,
    alt: "",
};

export const stairs2Image: ImageType = {
    image: stairs2,
    alt: "",
};

export const stairs3Image: ImageType = {
    image: stairs3,
    alt: "",
};

export const diningTable1Image: ImageType = {
    image: diningTable1,
    alt: "",
};

export const diningTable2Image: ImageType = {
    image: diningTable2,
    alt: "",
};

export const bedroomBlueWardrobe1Image: ImageType = {
    image: bedroomBlueWardrobe1,
    alt: "",
};

export const bedroomBlueWardrobe2Image: ImageType = {
    image: bedroomBlueWardrobe2,
    alt: "",
};

export const bedroomWhiteWardrobe1Image: ImageType = {
    image: bedroomWhiteWardrobe1,
    alt: "",
};

export const bedroomWhiteWardrobe2Image: ImageType = {
    image: bedroomWhiteWardrobe2,
    alt: "",
};

export const bathroomGreen1Image: ImageType = {
    image: bathroomGreen1,
    alt: "",
};

export const bathroomGreen2Image: ImageType = {
    image: bathroomGreen2,
    alt: "",
};

export const bathroomGreen3Image: ImageType = {
    image: bathroomGreen3,
    alt: "",
};

export const bathroomWhiteImageImage: ImageType = {
    image: bathroomWhite,
    alt: "",
};
