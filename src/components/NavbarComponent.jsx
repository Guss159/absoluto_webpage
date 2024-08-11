import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import WhatsappWidget from "./WhatsappWidget";
import Stack from "react-bootstrap/Stack";

const NavbarComponent = () => {
  return (
    <Navbar
      className="navbar navbar--bg p-0 border-bottom shadow-lg"
      expand="lg"
      sticky="top"
    >
      <Container className="py-2 px-3">
        <Navbar.Brand href="#home">
          <img alt="" src="src/assets/logo.svg" width="30" height="30" />{" "}
          ABSOLUTO
        </Navbar.Brand>
        <Stack direction="horizontal">
          <Navbar.Text className="d-lg-none ms-auto">
            <WhatsappWidget className="me-4" />
          </Navbar.Text>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" offset me-auto">
              <Nav.Link  href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Conocenos</Nav.Link>
              <Nav.Link className=" offset" href="#contact"> Contactanos </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Stack>
      </Container>
      <WhatsappWidget className="d-none me-4 d-lg-flex w-25 justify-content-end" />
    </Navbar>
  );
};

export default NavbarComponent;
