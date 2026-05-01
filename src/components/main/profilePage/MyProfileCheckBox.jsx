import { Form } from "react-bootstrap";

const MyProfileCheckBox = function (props) {
  return (
    <Form>
      <Form.Check
        type="checkbox"
        id="first-checkBox"
        label={props.text[0]}
        className="text-white"
      />
      <Form.Check
        type="checkbox"
        id="second-checkBox"
        label={props.text[1]}
        className="text-white"
      />
    </Form>
  );
};

export default MyProfileCheckBox;
