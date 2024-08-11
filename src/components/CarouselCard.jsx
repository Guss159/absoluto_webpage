import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const CarouselCard = ({ name, img, imgDesc }) => {
  /*
		TODO: add the left and right mirrors
		TODO: grab event, dynamically change the mirrors
		proach does seem to
	*/

  return (
        <Container className=" CARF h-100 d-flex justify-content-center align-items-center" fluid>
      {/* <Container className="position-absolute top-0 ms-5"> */}
      {/*   <h3>{name}</h3> */}
      {/*   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      {/* </Container> */}
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
  );
};

export default CarouselCard;
