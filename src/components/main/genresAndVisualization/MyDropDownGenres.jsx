import { Dropdown } from "react-bootstrap";

const MyDropDownGenres = function () {
  return (
    <div className="d-flex align-items-center gap-4">
      <h2 className="text-white mb-0 fw-bold fs-3">TV Shows</h2>

      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Genres
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Adventure</Dropdown.Item>
          <Dropdown.Item href="#">Animation</Dropdown.Item>
          <Dropdown.Item href="#">Comedy</Dropdown.Item>
          <Dropdown.Item href="#">Crime</Dropdown.Item>
          <Dropdown.Item href="#">Documentaries</Dropdown.Item>
          <Dropdown.Item href="#">Drama</Dropdown.Item>
          <Dropdown.Item href="#">Fantasy</Dropdown.Item>
          <Dropdown.Item href="#">Horror</Dropdown.Item>
          <Dropdown.Item href="#">Mystery</Dropdown.Item>
          <Dropdown.Item href="#">Romance</Dropdown.Item>
          <Dropdown.Item href="#">Sci-Fi</Dropdown.Item>
          <Dropdown.Item href="#r">Thriller</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MyDropDownGenres;
