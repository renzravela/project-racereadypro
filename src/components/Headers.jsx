import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../assets/front-logo.png"
import { useNavigate } from "react-router-dom";
// import useLocation from 'react-router-dom';

const Headers = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="header-main">
        <Container>
          <Navbar.Brand className="front-logo">
            <Image src={logo} className="" />
          </Navbar.Brand>
          <Navbar.Brand
            onClick={() => {
              navigate("project-racereadypro/");
            }}
            href="#"
            className="fs-2 fw-bold text-light"
          >
            RaceReady Pro:F1
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => {
                  navigate("project-racereadypro/drivers");
                }}
                href="#"
                className="text-center text-light fs-6 fw-bold"
              >
                Drivers
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("project-racereadypro/cars");
                }}
                href="#"
                className="text-center text-light fs-6 fw-bold"
              >
                Cars & Livery
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("project-racereadypro/tracks");
                }}
                href="#"
                className="text-center text-light fs-6 fw-bold"
              >
                Tracks
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("project-racereadypro/about");
                }}
                href="#"
                className="text-center text-light fs-6 fw-bold"
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
