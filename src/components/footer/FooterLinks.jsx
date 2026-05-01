import { Container, Row, Col } from "react-bootstrap";
import FooterSingleLink from "./FooterSingleLink";

const FooterLinks = function () {
  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col xs={12} md={6} lg={3}>
          <FooterSingleLink
            link={[
              "Audio and Subtitles",
              "Media Center",
              "Privacy",
              "Contact Us",
            ]}
          />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <FooterSingleLink
            link={["Audio Description", "Investor Relations", "Legal Notices"]}
          />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <FooterSingleLink
            link={["Help Center", "Jobs", "Cookie Preferences"]}
          />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <FooterSingleLink
            link={["Gift Cards", "Terms of Use", "Corporate Information"]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FooterLinks;
