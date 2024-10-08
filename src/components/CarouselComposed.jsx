import { dataCarousel } from "../data/data_carousel";
import Carousel from "react-bootstrap/Carousel";
import CarouselWing from "./CarouselWing";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CarouselCard from "./CarouselCard";
import Container from "react-bootstrap/Container";
import { useState } from "react";

const CarouselComposed = () => {
  /*
		TODO: memo or cache the images so i dont need to call data.js again.
		TODO: match slide animation when wrapping with wings.
		TODO: double background is back, find the source
	*/
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  let indexWrapper = (index, length, offset) => {
    let x = (index + offset) % length;
    let y = x < 0 ? length - 1 : x;
    return y;
  };

  let wingOnClickHandler = (index, length, offset) => {
    setIndex(indexWrapper(index, length, offset));
  };

  //  NOTE: change the align-items-center and d-xl-flex to block if not gona use scale-down
  let wingsClass = "p-0 d-none d-lg-flex align-items-center";
  let wingsMargin = 1;
  let rightWing = `${wingsClass} ms-${wingsMargin}`;
  let leftWing = `${wingsClass} me-${wingsMargin}`;
  // TODO: ADD fade to wings

  return (
    <Container className="box box--bg box--margin offset border-top-0 border-bottom-0 p-3" id="about" fluid>
    <Row className="mx-0 flex-grow-1 ">
      <Col className={rightWing}>
        <CarouselWing
          handler={() => wingOnClickHandler(index, dataCarousel.length, -1)}
          {...dataCarousel[indexWrapper(index, dataCarousel.length, -1)]}
        />
      </Col>
      <Col className="my-auto p-0" lg={8}>
        <Carousel
          interval={null}
          activeIndex={index}
          onSelect={handleSelect}
          wrap
          touch
        >
          {dataCarousel.map((item) => (
            <Carousel.Item key={item.id}>
              <CarouselCard {...item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
      <Col className={leftWing}>
        <CarouselWing
          handler={() => wingOnClickHandler(index, dataCarousel.length, 1)}
          {...dataCarousel[indexWrapper(index, dataCarousel.length, 1)]}
        />
      </Col>
    </Row>
	  </Container>
  );
};

export default CarouselComposed;
