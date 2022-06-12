import styled from "styled-components";
import Carousel from "./components/Carousel";

const CarouselWrapper = styled.div``;

function App() {
    return (
        <CarouselWrapper>
            <Carousel slides={1} infinite={false} />
            <hr />
            <Carousel slides={4} infinite={true} />
            <hr />
            <Carousel slides={10} infinite={false} />
        </CarouselWrapper>
    );
}

export default App;
