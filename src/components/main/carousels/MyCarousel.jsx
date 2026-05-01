import { Carousel, Row } from "react-bootstrap";
import MyCarouselSingleItem from "./MyCarouselSingleItem";

const MyCarousel = (props) => {
  return (
    <Carousel
      id="netflixCarousel"
      indicators={false}
      interval={null}
      className="container-fluid mb-5"
    >
      <Carousel.Item>
        <Row className="g-1 flex-nowrap">
          <MyCarouselSingleItem search={props.titles[0]} />
        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row className="g-1 flex-nowrap">
          <MyCarouselSingleItem search={props.titles[1]} />
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
