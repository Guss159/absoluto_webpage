import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const WhatsappCard = ({ text }) => {
  return (
    <Container className="round">
	  <Image round/>

      <Button onClick={handleClick}>{text}</Button>
    </Container>
  );
};

export default WhatsappCard;
