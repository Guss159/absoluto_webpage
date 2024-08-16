import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import HighlightCard from "./HighlightCard";
import { dataHighlights } from "../data/data_highlights";
import Carousel from "react-bootstrap/Carousel";

const Highlights = () => {
  const groupedData = [];
  for (let i = 0; i < dataHighlights.length; i += 2) {
    groupedData.push(dataHighlights.slice(i, i + 2));
  }

  return (
    <Container className="box box--bg box--margin offset border-top-0 border-bottom-0">
	  <Carousel interval={18000}>
        {groupedData.map((pair, index) => (
          <Carousel.Item key={index} >
            <Stack className="p-5">
              {pair.map((item, index) => {
				  console.log(index)
				  console.log(index ===1)
                return (
                  <HighlightCard key={index} invert={index === 1} {...item} />
                );
              })}
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Highlights;
