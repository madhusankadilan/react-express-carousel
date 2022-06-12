import React from "react";
import styled from "styled-components";

const P = styled.p`
    color: white;
`;

function CarouselSubTitleComponent({ subTitle }) {
    return <P>{subTitle}</P>;
}

export default CarouselSubTitleComponent;
