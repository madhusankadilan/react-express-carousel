import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import LeftArrowIcon from "./LeftArrowIcon";
import RightArrowIcon from "./RightArrowIcon";

const Div = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LeftArrow = styled.span`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

const RightArrow = styled.span`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

function Carousel({ slides, infinite }) {
    const [carousel, setCarousel] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3600/api/carousel?slides=${slides}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    const { carouselData, status } = result;

                    if (status === "success") {
                        setCarousel(carouselData);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    function handleLeftClick() {
        setSelectedImageIndex((prevState) => {
            if (infinite) {
                return prevState === 0 ? carousel.length - 1 : prevState - 1;
            }

            return prevState === 0 ? 0 : prevState - 1;
        });
    }

    function handleRightClick() {
        setSelectedImageIndex((prevState) => {
            if (infinite) {
                return prevState === carousel.length - 1 ? 0 : prevState + 1
            }

            return prevState === carousel.length - 1 ? carousel.length - 1 : prevState + 1;
        }
            
        );
    }

    return (
        <Div>
            {carousel.length > 1 && (
                <LeftArrow onClick={handleLeftClick}>
                    <LeftArrowIcon />
                </LeftArrow>
            )}
            {carousel.length > 1 && (
                <RightArrow onClick={handleRightClick}>
                    <RightArrowIcon />
                </RightArrow>
            )}
            {carousel.map((item, index) => {
                return (
                    <CarouselItem
                        key={index}
                        {...item}
                        index={index}
                        selectedImageIndex={selectedImageIndex}
                    />
                );
            })}
        </Div>
    );
}

export default Carousel;
