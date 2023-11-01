import React from "react";
import BeforeAfterSlider, { type SliderImageType } from "./Core";

import DoubleArrow from "../icons/DoubleArrow.svg";

type Props = {
    beforeImage: SliderImageType;
    afterImage: SliderImageType;
    className?: string;
    handleClassName?: string;
};

export { type SliderImageType } from "./Core";

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
