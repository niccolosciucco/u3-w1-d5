import "../../App.css";
import { Nav } from "react-bootstrap";

const LastPartNav = function (props) {
  return (
    <div class="d-flex align-items-center">
      <Nav.Link className="text-white" href="#">
        <i class="bi bi-search me-3"></i>
      </Nav.Link>
      <Nav.Link className="text-white" href="#">
        <p class="mb-0 me-3">KIDS</p>
      </Nav.Link>
      <Nav.Link className="text-white" href="#">
        <i class="bi bi-bell-fill me-3"></i>
      </Nav.Link>
      <Nav.Link className="text-white" href="#">
        <img id="avatar" src={props.avatar} alt="Avatar" />
      </Nav.Link>
    </div>
  );
};
export default LastPartNav;
