import Container from "react-bootstrap/Container";
import Section from "./Section";
import Placeholder from "react-bootstrap/Placeholder";

const AboutUs = () => {
  return (
    <Section
      id="about"
      className="m-section text-center"
      style={{ height: "80vh" }}
    >
      <Container className="my-5">
        <h2 className="mb-4">Quienes somos</h2>
        <p>
          <Placeholder xs={2} /> <Placeholder xs={8} /> <Placeholder xs={5} />
          <Placeholder xs={3} /> <Placeholder xs={4} /> <Placeholder xs={5} />
        </p>
      </Container>
    </Section>
  );
};

export default AboutUs;
