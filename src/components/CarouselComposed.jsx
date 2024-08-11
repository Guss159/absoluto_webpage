import { data } from "../data/data_carousel";
import Carousel from "react-bootstrap/Carousel";
import CarouselWing from "./CarouselWing";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CarouselCard from "./CarouselCard";
import { useState } from "react";

const CarouselComposed = () => {
  /*
		TODO: memo or cache the images so i dont need to call data.js again.
		TODO: match slide animation when wrapping with wings.
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

  let carouselItems = data.map((item) => (
    <Carousel.Item key={item.id}>
      <CarouselCard {...item} />
    </Carousel.Item>
  ));
  //  NOTE: change the align-items-center and d-xl-flex to block if not gona use scale-down
  let wingsClass = "p-0 d-none d-xl-flex align-items-center";
  let wingsMargin = 1;
  let rightWing = `${wingsClass} ms-${wingsMargin}`;
  let leftWing = `${wingsClass} me-${wingsMargin}`;
  // TODO: ADD fade to wings

  return (
    <Row
      className="carousel__row--bg mx-0 flex-grow-1 rounded"
    >
      <Col className={rightWing}>
        <CarouselWing
          handler={() => wingOnClickHandler(index, data.length, -1)}
          {...data[indexWrapper(index, data.length, -1)]}
        />
      </Col>
      <Col className="my-auto p-0" lg={9} xl={8}>
        <Carousel
          interval={null}
          activeIndex={index}
          onSelect={handleSelect}
          wrap
          touch
        >
          {carouselItems}
        </Carousel>
      </Col>
      <Col className={leftWing}>
        <CarouselWing
          handler={() => wingOnClickHandler(index, data.length, 1)}
          {...data[indexWrapper(index, data.length, 1)]}
        />
      </Col>
    </Row>
  );
};

export default CarouselComposed;
