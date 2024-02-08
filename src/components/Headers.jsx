import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import logo from "../assets/front-logo.png";

const Headers = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Image src={ logo } className="me-3"/>
          <Navbar.Brand href="#"><h3>RaceReady Pro:F1</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link href="#"><h5>Pilots</h5></Nav.Link>
              <Nav.Link href="#"><h5>Cars & Livery</h5></Nav.Link>
              <Nav.Link href="#"><h5>Tracks</h5></Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">About ReadyRace Pro</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
