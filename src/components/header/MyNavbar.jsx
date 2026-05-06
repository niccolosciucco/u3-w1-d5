import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router";

const MyNavbar = function () {
  const location = useLocation();

  return (
    <Navbar expand="lg" variant="dark" className="bg-transparent">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img
            id="logo-netflix"
            src="/netflix_logo.png"
            alt="Netflix Logo"
            style={{ width: "100px" }}
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
            <Link to="" className="nav-link">
              Tv Shows
            </Link>
            <Link to="" className="nav-link">
              Movies
            </Link>
            <Link to="" className="nav-link">
              Recently Added
            </Link>
            <Link to="" className="nav-link">
              My List
            </Link>
            <Link
              to="/profile"
              className={
                location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className={
                location.pathname === "/settings"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Settings
            </Link>
          </Nav>

          <Nav className="d-flex align-items-center flex-row">
            <Link to="" className="nav-link text-white px-2">
              <i className="bi bi-search"></i>
            </Link>
            <Link to="" className="nav-link text-white px-2">
              <span className="mb-0">KIDS</span>
            </Link>
            <Link to="" className="nav-link text-white px-2">
              <i className="bi bi-bell-fill"></i>
            </Link>
            <Link to="/profile" className="nav-link text-white px-2">
              <img
                id="avatar"
                src="/avatar.png"
                alt="Avatar"
                style={{ width: "30px" }}
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
