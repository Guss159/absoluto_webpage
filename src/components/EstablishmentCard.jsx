import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const EstablismentCard = ({ img, imgDesc, title, desc, direction }) => {
  const alertClicked = () => {
    alert("You clicked");
  };
  let itemStyle = {
    // opacity: "0.75 !important",
  };

  return (
    <Card
      bg="secondary"
      text="white"
      border="primary"
      // className="bg-opacity-75"
      className="shadow-lg"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={img} alt={imgDesc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item
          style={itemStyle}
          action
          variant="dark"
          onClick={alertClicked}
        >
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item style={itemStyle} variant="dark">
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item style={itemStyle} variant="dark">
          Vestibulum at eros
        </ListGroup.Item>
      </ListGroup>
      {/* <Card.Body> */}
      {/*   <Card.Link>Link</Card.Link> */}
      {/* </Card.Body> */}
    </Card>
  );
};

export default EstablismentCard;
