import { Row, Col } from "react-bootstrap";

const MyProfileTitle = function (props) {
  return (
    <Row>
      <Col className="text-white border-bottom border-secondary p-0">
        <h1>{props.title}</h1>
      </Col>
    </Row>
  );
};

export default MyProfileTitle;
