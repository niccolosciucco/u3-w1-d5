import { Container, Row, Col } from "react-bootstrap";
import "../../../App.css";
import ButtonHero from "./ButtonHero";

const MyHero = function () {
  return (
    <section className="netflix-hero">
      <Container fluid className="px-5">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <img
              src="./friends-logo.jpg"
              alt="Friends Logo"
              className="img-fluid mb-4"
              style={{ maxWidth: "350px", borderRadius: "10px" }}
            />

            <p
              className="text-white fs-5 mb-4"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              Six friends living in New York City navigate the highs and lows of
              adulthood together. From iconic romances to hilarious mishaps,
              it’s the ultimate feel-good series about the family you choose.
            </p>

            <ButtonHero />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyHero;
