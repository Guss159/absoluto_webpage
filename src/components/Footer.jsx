import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  let icons = [
    "fa-brands fa-square-facebook",
    "fa-brands fa-square-x-twitter",
    "fa-brands fa-linkedin",
    "fa-brands fa-square-google-plus",
  ];

  return (
    <Container
      as="footer"
      className="box box--bg my-5 py-3 border-bottom-0"
      fluid
    >
      <Row>
        <Col as="span" className="ps-3">
          © 2024 Absoluto
        </Col>
        <Col className="d-flex justify-content-center">
          {icons.map((icon) => (
            <FontAwesomeIcon key={icon} className="icon" icon={icon} size="2xl" bounce />
          ))}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Footer;
