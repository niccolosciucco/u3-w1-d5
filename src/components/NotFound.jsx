import { Col, Container, Row } from "react-bootstrap";

const NotFound = function () {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col className="text-center">
          <img src="/404.jpg" alt="Error 404" className="img-fluid w-50" />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
