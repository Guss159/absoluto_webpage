import { Image } from "react-bootstrap";

const CarouselWing = ({ handler, img, imgDesc }) => {
  return (
    <Image
      className="mh-100 mw-100"
      // style={{ height:"100", objectFit: "cover", objectPosition:"40% 50%" }}
      style={{ objectFit: "scale-down" }}
      src={img}
      alt={imgDesc}
      rounded
      onClick={handler}
    />
  );
};

export default CarouselWing;
