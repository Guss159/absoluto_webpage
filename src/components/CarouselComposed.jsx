import { data } from "../data/carrousel";
import Carousel from "react-bootstrap/Carousel";
import CarouselWing from "./CarouselWing";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CarouselCard from "./CarouselCard";
import { useState } from "react";
import "./CarouselComposed.css";

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
  //  NOTE: change the align-items-center and d-lg-flex to block if not gona use scale-down
  let wingsClass = "carousel-col p-0 d-none d-lg-flex align-items-center";
  let wingsMargin = 3;
  // TODO: ADD fade to wings

  return (
    <Row
      className="mx-auto mw-100"
      style={{ height: "33%", backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <Col className={`${wingsClass} ms-${wingsMargin}`}>
        <CarouselWing
          handler={() => wingOnClickHandler(index, data.length, -1)}
          {...data[indexWrapper(index, data.length, -1)]}
        />
      </Col>
      <Col className="carousel-col p-0" lg={9} xl={8}>
        <Carousel
          interval={null}
          activeIndex={index}
          onSelect={handleSelect}
          wrap
          touch
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          {carouselItems}
        </Carousel>
      </Col>
      <Col className={`${wingsClass} me-${wingsMargin}`}>
        <CarouselWing
          handler={() => wingOnClickHandler(index, data.length, 1)}
          {...data[indexWrapper(index, data.length, 1)]}
        />
      </Col>
    </Row>
  );
};

export default CarouselComposed;
