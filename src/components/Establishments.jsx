import Container from "react-bootstrap/Container";
import EstablismentCard from "./EstablishmentCard";
import { establishments } from "../data/establishments";

const Establishments = () => {
  // TODO: the data and the goocle maps integration, click the picture or  direction to go google maps, meyby icon

  return (
    <Container className="d-flex mt-4 py-5 justify-content-around fs-6" fluid>
      {establishments.map((data) => (
        <EstablismentCard key={data.id} {...data}></EstablismentCard>
      ))}
    </Container>
  );
};

export default Establishments;
