import { Navbar, Container, Nav } from "react-bootstrap";
import LastPartNav from "./LastPartNav";

const MyNavbar = function () {
  return (
    <Navbar expand="lg" className="bg-trasparent">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            id="logo-netflix"
            src="../public/netflix_logo.png"
            alt="Netflix Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-white" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Tv Shows
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              My List
            </Nav.Link>
          </Nav>
          <LastPartNav avatar="../public/avatar.png" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
