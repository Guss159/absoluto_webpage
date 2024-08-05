import Button from "react-bootstrap/Button";
import Section from "./Section";

const Hero = () => {
  let brand = {
    right: "20%",
  };
  let description = {
    right: "25%",
  };
  let cta = {
    top: "25%",
  };

  return (
    <Section style={{ height: "65%" }}>
      <h1 className="position-relative" style={brand}>
        Absoluto
      </h1>
      <p className="position-relative" style={description}>
        Dolorem ipsum dolor sit amet consectetur <br />
        adipiscing elit. sed do.
      </p>
      <Button
        className="position-relative "
        size="lg"
        variant="outline-light"
        style={cta}
      >
        Call to action
      </Button>
    </Section>
  );
};

export default Hero;
