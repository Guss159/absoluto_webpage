import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const CarouselCard = ({ name, img, imgDesc }) => {
  /*
		TODO: add the left and right mirrors
		TODO: grab event, dynamically change the mirrors
		proach does seem to
	*/


  return (
    <Container>
      <Container className="position-absolute top-0 ms-5" fluid >
        <h3>{name}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Container>
      <Container className="d-flex h-100 mh-100 mw-100">
        <Container className="d-flex justify-content-center w-75 me-4 ms-5">
          <Image
            // className="object-fit-fill"
            // style={{ objectPosition: "50%" }}
      style={{ objectFit: "scale-down" }}
            src={img}
            alt={imgDesc}
            fluid
            rounded
          />
        </Container>
        {/* TODO: BIGGER  */}
        <Button
          className="align-self-end mb-3"
          size="lg"
          variant="outline-light"
        >
          CTA
        </Button>
      </Container>
    </Container>
  );
};

export default CarouselCard;
