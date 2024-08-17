import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Placeholder from "react-bootstrap/Placeholder";

// TODO: add the video de fondo, repeat onclick, fades in and out. when video ends.
// leaves place for the text. add mute button.

const AboutUs = () => {
  return (
    <Container className="box box--bg box--margin offset border-top-0 border-bottom-0" id="about" fluid>
      <Stack className="about__stack m-3 text-center align-items-center justify-content-center">
        <h2 className="mb-4">Quienes somos</h2>
        <p className="w-100">
          <Placeholder xs={2} /> <Placeholder xs={8} /> <Placeholder xs={5} />
          <Placeholder xs={3} /> <Placeholder xs={4} /> <Placeholder xs={5} />
        </p>
      </Stack>
    </Container>
  );
};

export default AboutUs;
