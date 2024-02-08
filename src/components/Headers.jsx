import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import logo from "../assets/front-logo.png";
import '../css/custom.css';

const Headers = () => {
  return (
    <>
      <Navbar expand="lg" className="header-main">
        <Container>
          <Navbar.Brand className="front-logo">
              <Image src={ logo } className=""/>
          </Navbar.Brand>
          <Navbar.Brand href="#" className="fs-2 fw-bold text-light">RaceReady Pro:F1</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="text-light fs-6 fw-bold">Drivers</Nav.Link>
              <Nav.Link href="#" className="text-light fs-6 fw-bold">Cars & Livery</Nav.Link>
              <Nav.Link href="#" className="text-light fs-6 fw-bold">Tracks</Nav.Link>
              <Nav.Link href="#" className="text-light fs-6 fw-bold">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
