import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import WhatsappWidget from "./WhatsappWidget";
import Stack from "react-bootstrap/Stack";
import { useEffect, useRef } from "react";

const NavbarComponent = () => {
  const ref = useRef(null);
  useEffect(() => {
    let height = ref.current ? ref.current.offsetHeight : 0;
    document.documentElement.style.setProperty("--nav--height", `${height}px`);
  }, []);

  return (
    <>
      <Navbar
        ref={ref}
        className="navbar navbar--bg p-0 mx-4 rounded border-bottom shadow-lg"
        expand="lg"
        fixed="top"
      >
        <Container className="py-2 px-3">
          <Navbar.Brand href="#home">
            <img alt="logo de Absoluto" src="src/assets/logo.svg" />{" "}
            <span className="d-none d-sm-inline-block">ABSOLUTO</span>
          </Navbar.Brand>
          <Navbar.Text className="d-lg-none ms-auto me-5">
            <WhatsappWidget />
          </Navbar.Text>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Conocenos</Nav.Link>
              <Nav.Link href="#contact">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text className="d-none d-lg-flex">
            <WhatsappWidget />
          </Navbar.Text>
        </Container>
      </Navbar>
      <div className="navbar--spacer"></div>
    </>
  );
};

export default NavbarComponent;
