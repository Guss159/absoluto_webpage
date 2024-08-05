import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import WhatsappWidget from "./WhatsappWidget";
import Stack from "react-bootstrap/Stack";

const NavBar = () => {
  return (
    <Navbar
      className="mt-2 container mx-auto p-0 bg-gradient bg-opacity-75 p-0 rounded-3 border-bottom border-top shadow-lg"
      bg="black"
      expand="lg"
      fixed="top"
      data-bs-theme="dark"
	  style={{ width:"90%" }}
    >
      <Container className="py-2 px-3">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="src/assets/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ABSOLUTO
        </Navbar.Brand>
        <Stack direction="horizontal">
          <Navbar.Text className="d-lg-none ms-auto">
            <WhatsappWidget className="me-4" />
          </Navbar.Text>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Conocenos</Nav.Link>
              <Nav.Link href="#contact"> Contactanos </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Stack>
      </Container>
      <WhatsappWidget className="d-none me-4 d-lg-flex w-25 justify-content-end" />
    </Navbar>
  );
};

export default NavBar;
