import React from "react";
import BeforeAfterSlider from "./Core";

import DoubleArrow from "../icons/DoubleArrow.svg";
import type { ImageType } from "../../utils/image";

type Props = {
    beforeImage: ImageType;
    afterImage: ImageType;
    className?: string;
    handleClassName?: string;
};

export default function ImageSlider({ beforeImage, afterImage, className, handleClassName }: Props) {
    return (
        <BeforeAfterSlider
            className={className}
            handleClassName={handleClassName}
            beforeImage={beforeImage}
            afterImage={afterImage}
            handleDraggableOnly={true}
            handleIcon={DoubleArrow.src}
        />
    );
}
