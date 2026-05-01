import { Button } from "react-bootstrap";

const MyProfileButtons = function (props) {
  return <Button variant="dark">{props.text}</Button>;
};

export default MyProfileButtons;
