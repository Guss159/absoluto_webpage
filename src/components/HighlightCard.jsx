import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const HighlightCard = ({ image, text, invert }) => {
  return (
    <Row className={`${invert ? "flex-row-reverse" : ""}`}>
      <Col>
        <Image className="object-fit-contain" src={image} rounded />
      </Col>
      <Col className="align-items-center justify-content-center text-break lh-lg">
        <p className="m-auto align-self-center text-break lh-lg">{text}</p>
      </Col>
    </Row>
  );
};

export default HighlightCard;
