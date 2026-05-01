import { Dropdown } from "react-bootstrap";

const MyProfileDropDown = function () {
  return (
    <Dropdown data-bs-theme="dark">
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#" active>
          English
        </Dropdown.Item>
        <Dropdown.Item href="#">Italiano</Dropdown.Item>
        <Dropdown.Item href="#">Español</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Français</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyProfileDropDown;
