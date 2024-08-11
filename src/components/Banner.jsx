import Container from "react-bootstrap/Container";

const Banner = () => {
  return (
    <Container
      className="box box-bg border-top-0 border-bottom-0"
    >
      <Container
        fluid
        className="m-3 banner text-center align-items-center justify-content-center"
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
