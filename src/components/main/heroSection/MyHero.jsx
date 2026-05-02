import { Container, Row, Col } from "react-bootstrap";
import "../../../App.css";
import ButtonHero from "./ButtonHero";
import MyHeroDescription from "./MyHeroDescription";
import MyHeroImg from "./MyHeroImg";

const MyHero = function () {
  return (
    <section className="netflix-hero">
      <Container fluid className="px-5">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <MyHeroImg url="./friends-logo.jpg" />

            <MyHeroDescription
              text="Six friends living in New York City navigate the highs and lows of
                    adulthood together. From iconic romances to hilarious mishaps, it’s the
                    ultimate feel-good series about the family you choose."
            />

            <ButtonHero />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyHero;
