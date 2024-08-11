import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
      <Container
        className="hero box box--bg border-top-0 border-bottom-0"
        fluid
      >
    <Container fluid>
        <h1 className="hero__brand">Absoluto</h1>
        <p className="hero__p">
          Dolorem ipsum dolor sit amet consectetur <br />
          adipiscing elit. sed do.
        </p>
        <Button className="hero__cta" size="lg" variant="outline-light">
          Call to action
        </Button>
      </Container>
    </Container>
  );
};

export default Hero;
