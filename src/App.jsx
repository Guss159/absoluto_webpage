import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import ContactForm from "./components/ContactForm";
import CarouselComposed from "./components/CarouselComposed";
import Establishments from "./components/Establishments";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Stack from "react-bootstrap/Stack";
import "./App.css";

function App() {
  return (
    <>
      <Stack className="vh-100" as="header" id="home">
        <NavBar />
        <Hero />
        <CarouselComposed />
      </Stack>
      {/* <ContactForm id="contact" /> */}
      <Banner />
      <AboutUs />
      <Establishments />
      <Footer />
    </>
  );
}

export default App;
library.add(fab, fas, far);
