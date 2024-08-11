// import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  const icons_props = {
    // className: style.fa_icon,
    size: "2xl",
    bounce: true,
    style: {
      cursor: "pointer",
      padding: "0em 0.5em",
      "--fa-animation-duration": "2s",
      "--fa-bounce-height": "-10px",
    },
  };
  // TODO: this be stack
  return (
    <Container as="footer" className="box box-bg my-4 py-3 border-bottom-0" fluid>
      <Row>
        <Col as="span" className=" ps-3 ">
          © 2024 Absoluto
        </Col>
        <Col className="d-flex justify-content-center">
          {/* <i className="bi-alarm"></i> */}
          <FontAwesomeIcon
            icon="fa-brands fa-square-facebook"
            {...icons_props}
          />
          <FontAwesomeIcon
            icon="fa-brands fa-square-x-twitter"
            {...icons_props}
          />
          <FontAwesomeIcon icon="fa-brands fa-linkedin" {...icons_props} />

          <FontAwesomeIcon
            icon="fa-brands fa-square-google-plus"
            {...icons_props}
          />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Footer;
