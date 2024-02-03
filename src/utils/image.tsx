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

export const stairs1Image: ImageType = {
    image: stairs1,
    alt: "Scala angolare soggiorno",
};

export const stairs2Image: ImageType = {
    image: stairs2,
    alt: "Scala angolare soggiorno, dettaglio rampa inferiore",
};

export const stairs3Image: ImageType = {
    image: stairs3,
    alt: "Scala angolare soggiorno, dettaglio rampa superiore",
};

export const livingTable1Image: ImageType = {
    image: livingTable1,
    alt: "Tavolo da pranzo soggiorno",
};

export const livingTable2Image: ImageType = {
    image: livingTable2,
    alt: "Tavolo da pranzo soggiorno, dettaglio piano",
};

export const bedroomBlueWardrobe1Image: ImageType = {
    image: bedroomBlueWardrobe1,
    alt: "Armadio a quattro ante blu notte",
};

export const bedroomBlueWardrobe2Image: ImageType = {
    image: bedroomBlueWardrobe2,
    alt: "Armadio a quattro ante blu notte, dettaglio maniglie",
};

export const bedroomWhiteWardrobe1Image: ImageType = {
    image: bedroomWhiteWardrobe1,
    alt: "Armadio a quattro ante bianco avorio",
};

export const bedroomWhiteWardrobe2Image: ImageType = {
    image: bedroomWhiteWardrobe2,
    alt: "Armadio a quattro ante bianco avorio, dettaglio pomelli",
};

export const bathroomGreen1Image: ImageType = {
    image: bathroomGreen1,
    alt: "Mobile bagno completo verdone",
};

export const bathroomGreen2Image: ImageType = {
    image: bathroomGreen2,
    alt: "Mobile bagno completo verdone, dettaglio lavabo",
};

export const bathroomGreen3Image: ImageType = {
    image: bathroomGreen3,
    alt: "Mobile bagno completo verdone, dettaglio mobiletto",
};

export const bathroomWhiteImage: ImageType = {
    image: bathroomWhite,
    alt: "Chiusura nicchia bagno",
};

export const hallwayBeforeImage: ImageType = {
    image: hallwayBefore,
    alt: "Armadio a sei ante, originale",
};
export const hallwayAfterImage: ImageType = {
    image: hallwayAfter,
    alt: "Armadio a sei ante, riverniciato verde petrolio",
};

export const nightTableBeforeImage: ImageType = {
    image: nightTableBefore,
    alt: "Comodino, originale",
};
export const nightTableAfterImage: ImageType = {
    image: nightTableAfter,
    alt: "Comodino, riverniciato bianco panna",
};

export const bookCaseBeforeImage: ImageType = {
    image: bookCaseBefore,
    alt: "Libreria soggiorno, originale",
};

export const bookCaseAfterImage: ImageType = {
    image: bookCaseAfter,
    alt: "Libreria soggiorno, riverniciata bianco 9010",
};

export const livingSetBefore1Image: ImageType = {
    image: livingSetBefore1,
    alt: "Gruppo letto, fronte, originale",
};

export const livingSetBefore2Image: ImageType = {
    image: livingSetBefore2,
    alt: "Gruppo letto, profilo, originale",
};

export const livingSetBefore3Image: ImageType = {
    image: livingSetBefore3,
    alt: "Gruppo letto, sopra, originale",
};

export const livingSetAfterImage: ImageType = {
    image: livingSetAfter,
    alt: "Gruppo letto, vista d'insieme, riverniciato bianco",
};

export const drawerBeforeImage: ImageType = {
    image: drawerBefore,
    alt: "Mobile bagno,originale",
};

export const drawerAfterImage: ImageType = {
    image: drawerAfter,
    alt: "Mobile bagno, riverniciato argento",
};

export const ancientLivingBeforeImage: ImageType = {
    image: ancientLivingBefore,
    alt: "Credenza d'epoca, originale",
};

export const ancientLivingAfterImage: ImageType = {
    image: ancientLivingAfter,
    alt: "Credenza d'epoca, Riverniciata bicolore Tiffany",
};

export const multicolorDrawer1Image: ImageType = {
    image: multicolorDrawer1,
    alt: "Cassettone fantasia multicolor",
};

export const multicolorDrawer2Image: ImageType = {
    image: multicolorDrawer2,
    alt: "Cassettone fantasia multicolor, dettaglio cassetti",
};

export const entranceDrawerImage: ImageType = {
    image: entranceDrawer,
    alt: "Madia decapata",
};

export const entranceWritingDeskImage: ImageType = {
    image: entranceWritingDesk,
    alt: "Scrittoio vintage decapato con sgabello",
};

export const vintageWritingDesk1Image: ImageType = {
    image: vintageWritingDesk1,
    alt: "Scrittoio vintage rilucidato a cera",
};

export const vintageWritingDesk2Image: ImageType = {
    image: vintageWritingDesk2,
    alt: "Scrittoio vintage rilucidato a cera, dettaglio cassettiera",
};

export const vintageWritingDesk3Image: ImageType = {
    image: vintageWritingDesk3,
    alt: "Scrittoio vintage rilucidato a cera, dettaglio gamba",
};

export const carpenterWorkbenchImage: ImageType = {
    image: carpenterWorkbench,
    alt: "Banco da carpentiere",
};

export const diningTable1Image: ImageType = {
    image: diningTable1,
    alt: "Tavolo da pranzo in massello rilucidato a cera",
};

export const diningTable2Image: ImageType = {
    image: diningTable2,
    alt: "Tavolo da pranzo in massello rilucidato a cera, dettaglio venature del piano",
};

export const livingDrawerBeforeImage: ImageType = {
    image: livingDrawerBefore,
    alt: "Cassettone antico, prima del restauro",
};

export const livingDrawerAfterImage: ImageType = {
    image: livingDrawerAfter,
    alt: "Cassettone antico, dopo il restauro",
};
