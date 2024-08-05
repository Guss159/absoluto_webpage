import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const CarouselCard = ({ name, img, imgDesc }) => {
  /*
		TODO: add the left and right mirrors
		TODO: grab event, dynamically change the mirrors
		proach does seem to
	*/

  let styleText = {
    top: "2rem",
    right: "1rem",
    // zIndex: 4000
  };

  return (
    <Container>
      <div className="position-absolute" style={styleText}>
        <h3>{name}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
      <div className="d-flex mh-100 mw-100">
        <div className="w-75 me-4 ms-5">
          <Image
            className="object-fit-fill"
            style={{ objectPosition: "50%" }}
            src={img}
            alt={imgDesc}
            fluid
            rounded
          />
        </div>
        {/* TODO: BIGGER  */}
        <Button
          className="align-self-end mb-3"
          size="lg"
          variant="outline-light"
        >
          CTA
        </Button>
      </div>
    </Container>
  );
};

export default CarouselCard;
