import React from "react";
import styled from "styled-components";
import CarouselSubTitle from "./CarouselSubTitle";
import CarouselTitle from "./CarouselTitle";

const CarouselImage = styled.img`
    display: block;
    width: 100%;
    height: 700px;
    object-fit: cover;
`;

const CarouselItemWrapper = styled.div`
    ${({ isActive }) =>
        isActive &&
        `
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
    `}
    ${({ isActive }) =>
        !isActive &&
        `opacity: 0;
    transition-duration: 1s ease;`}
`;

const CarouselText = styled.div`
    position: absolute;
    top: 70%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function CarouselItem({ image, title, subTitle, index, selectedImageIndex }) {
    return (
        <CarouselItemWrapper isActive={index === selectedImageIndex ? true : false}>
            {index === selectedImageIndex && (
                <>
                    <CarouselImage src={image} alt="Carousel Image" />
                    <CarouselText>
                        <CarouselTitle title={title} />
                        <CarouselSubTitle subTitle={subTitle} />
                    </CarouselText>
                </>
            )}
        </CarouselItemWrapper>
    );
}

export default CarouselItem;
