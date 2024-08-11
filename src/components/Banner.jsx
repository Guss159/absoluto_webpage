import Container from "react-bootstrap/Container";

const Banner = () => {
  return (
    <Container className="box box--bg box--margin border-top-0 border-bottom-0" fluid>
      <Container
        fluid
        className="m-3 text-center align-items-center justify-content-center"
      >
        <p className="m-0">
          Dolorem ipsum dolor sit amet consectetur <br />
          adipiscing elit. sed do.
        </p>
      </Container>
    </Container>
  );
};

export default Banner;
