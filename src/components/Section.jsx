import Container from "react-bootstrap/Container";

const Section = ({ children, ...rest }) => {
  let containerStyle = {
    height: "80%",
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    top: "13%",
  };

  return (
    <section {...rest}>
      {/* TODO: reverse ingenier the maskclass */}
      <Container
        className="mask mx-auto position-relative border border-light border-opacity-75
	  border-top-0 border-bottom-0 rounded-4 shadow-lg d-flex flex-column justify-content-center
	  align-items-center text-white"
        style={containerStyle}
      >
        {children}
      </Container>
    </section>
  );
};

export default Section;
