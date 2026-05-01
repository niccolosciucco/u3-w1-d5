import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = function () {
  return (
    <Navbar expand="lg" variant="dark" className="bg-transparent">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            id="logo-netflix"
            src="/netflix_logo.png"
            alt="Netflix Logo"
            style={{ width: "100px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link className="text-white" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              TV Shows
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

          <Nav className="d-flex align-items-center flex-row">
            <Nav.Link className="text-white px-2" href="#">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link className="text-white px-2" href="#">
              <span className="mb-0">KIDS</span>
            </Nav.Link>
            <Nav.Link className="text-white px-2" href="#">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <Nav.Link className="text-white px-2" href="#">
              <img
                id="avatar"
                src="/avatar.png"
                alt="Avatar"
                style={{ width: "30px" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
