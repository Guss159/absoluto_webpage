import Button from "react-bootstrap/Button";
import BgContainer from "./BgContainer";

const Hero = () => {
  return (
    <BgContainer className="box box-bg hero-container border-top-0 border-bottom-0">
      <h1 className="brand">Absoluto</h1>
      <p>
        Dolorem ipsum dolor sit amet consectetur <br />
        adipiscing elit. sed do.
      </p>
      <Button className="cta" size="lg" variant="outline-light">
        Call to action
      </Button>
    </BgContainer>
  );
};

export default Hero;
