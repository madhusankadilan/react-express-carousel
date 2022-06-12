import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
    color: white;
`;

function CarouselTitleComponent({ title }) {
    return <H1>{title}</H1>;
}

export default CarouselTitleComponent;
