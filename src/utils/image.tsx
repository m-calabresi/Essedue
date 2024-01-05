import React from "react";

import stairs1 from "../assets/webp/scala-soggiorno.webp";
import stairs2 from "../assets/webp/scala-soggiorno-dettaglio-1.webp";
import stairs3 from "../assets/webp/scala-soggiorno-dettaglio-2.webp";
import livingTable1 from "../assets/webp/tavolo-soggiorno-legno.webp";
import livingTable2 from "../assets/webp/tavolo-soggiorno-legno-dettaglio.webp";
import bedroomBlueWardrobe1 from "../assets/webp/armadio-camera-letto-blu.webp";
import bedroomBlueWardrobe2 from "../assets/webp/armadio-camera-letto-blu-maniglie.webp";
import bedroomWhiteWardrobe1 from "../assets/webp/armadio-camera-letto-bianco.webp";
import bedroomWhiteWardrobe2 from "../assets/webp/armadio-camera-letto-bianco-pomelli.webp";
import bathroomGreen1 from "../assets/webp/bagno-verde.webp";
import bathroomGreen2 from "../assets/webp/bagno-verde-lavabo.webp";
import bathroomGreen3 from "../assets/webp/bagno-verde-mobile.webp";
import bathroomWhite from "../assets/webp/armadio-bagno-bianco.webp";
import hallwayBefore from "../assets/webp/mobile-disimpegno-prima.webp";
import hallwayAfter from "../assets/webp/mobile-disimpegno-dopo.webp";
import nightTableBefore from "../assets/webp/comodino-prima.webp";
import nightTableAfter from "../assets/webp/comodino-dopo.webp";
import livingSetBefore1 from "../assets/webp/set-mobili-soggiorno-prima-1.webp";
import livingSetBefore2 from "../assets/webp/set-mobili-soggiorno-prima-2.webp";
import livingSetBefore3 from "../assets/webp/set-mobili-soggiorno-prima-3.webp";
import livingSetAfter from "../assets/webp/set-mobili-soggiorno-dopo.webp";
import drawerBefore from "../assets/webp/cassettiera-prima.webp";
import drawerAfter from "../assets/webp/cassettiera-dopo.webp";
import bookCaseBefore from "../assets/webp/libreria-prima.webp";
import bookCaseAfter from "../assets/webp/libreria-dopo.webp";
import ancientLivingBefore from "../assets/webp/mobile-soggiorno-antico-prima.webp";
import ancientLivingAfter from "../assets/webp/mobile-soggiorno-antico-dopo.webp";
import multicolorDrawer1 from "../assets/webp/cassettone-fantasia-1.webp";
import multicolorDrawer2 from "../assets/webp/cassettone-fantasia-2.webp";
import entranceDrawer from "../assets/webp/cassettone-ingresso.webp";
import entranceWritingDesk from "../assets/webp/scrittoio-ingresso.webp";
import carpenterWorkbench from "../assets/webp/banco-carpentiere.webp";
import vintageWritingDesk1 from "../assets/webp/scrittoio-vintage-1.webp";
import vintageWritingDesk2 from "../assets/webp/scrittoio-vintage-2.webp";
import vintageWritingDesk3 from "../assets/webp/scrittoio-vintage-3.webp";
import diningTable1 from "../assets/webp/tavolo-pranzo.webp";
import diningTable2 from "../assets/webp/tavolo-pranzo-dettaglio.webp";
import livingDrawerBefore from "../assets/webp/cassettone-ingresso-prima.webp";
import livingDrawerAfter from "../assets/webp/cassettone-ingresso-dopo.webp";

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

export const livingTable1Image: ImageType = {
    image: livingTable1,
    alt: "",
};

export const livingTable2Image: ImageType = {
    image: livingTable2,
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

export const hallwayBeforeImage: ImageType = {
    image: hallwayBefore,
    alt: "",
};
export const hallwayAfterImage: ImageType = {
    image: hallwayAfter,
    alt: "",
};

export const nightTableBeforeImage: ImageType = {
    image: nightTableBefore,
    alt: "",
};
export const nightTableAfterImage: ImageType = {
    image: nightTableAfter,
    alt: "",
};

export const bookCaseBeforeImage: ImageType = {
    image: bookCaseBefore,
    alt: "",
};

export const bookCaseAfterImage: ImageType = {
    image: bookCaseAfter,
    alt: "",
};

export const livingSetBefore1Image: ImageType = {
    image: livingSetBefore1,
    alt: "",
};

export const livingSetBefore2Image: ImageType = {
    image: livingSetBefore2,
    alt: "",
};

export const livingSetBefore3Image: ImageType = {
    image: livingSetBefore3,
    alt: "",
};

export const livingSetAfterImage: ImageType = {
    image: livingSetAfter,
    alt: "",
};

export const drawerBeforeImage: ImageType = {
    image: drawerBefore,
    alt: "",
};

export const drawerAfterImage: ImageType = {
    image: drawerAfter,
    alt: "",
};

export const ancientLivingBeforeImage: ImageType = {
    image: ancientLivingBefore,
    alt: "",
};

export const ancientLivingAfterImage: ImageType = {
    image: ancientLivingAfter,
    alt: "",
};

export const multicolorDrawer1Image: ImageType = {
    image: multicolorDrawer1,
    alt: "",
};

export const multicolorDrawer2Image: ImageType = {
    image: multicolorDrawer2,
    alt: "",
};

export const entranceDrawerImage: ImageType = {
    image: entranceDrawer,
    alt: "",
};

export const entranceWritingDeskImage: ImageType = {
    image: entranceWritingDesk,
    alt: "",
};

export const vintageWritingDesk1Image: ImageType = {
    image: vintageWritingDesk1,
    alt: "",
};

export const vintageWritingDesk2Image: ImageType = {
    image: vintageWritingDesk2,
    alt: "",
};

export const vintageWritingDesk3Image: ImageType = {
    image: vintageWritingDesk3,
    alt: "",
};

export const carpenterWorkbenchImage: ImageType = {
    image: carpenterWorkbench,
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

export const livingDrawerBeforeImage: ImageType = {
    image: livingDrawerBefore,
    alt: "",
};

export const livingDrawerAfterImage: ImageType = {
    image: livingDrawerAfter,
    alt: "",
};
