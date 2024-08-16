import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./App.scss";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

import ContactForm from "./components/ContactForm";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CarouselComposed from "./components/CarouselComposed";
import Establishments from "./components/Establishments";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Highlights from "./components/Highlights"

function App() {
  return (
    <>
      <Container className="gx-5" fluid="xxl" id="home">
        <NavbarComponent />
        <Stack className="landing__stack" as="header">
          <Hero id="home" />
          <CarouselComposed />
        </Stack>
        {/* <ContactForm id="contact" /> */}
        <Banner />
        <AboutUs />
        <Highlights />
        <Establishments />
        <Footer />
      </Container>
    </>
  );
}

export default App;
library.add(fab, fas, far);
