import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

const Details = function () {
  const params = useParams();
  console.log(params.id);

  const [movie, setMovie] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=cf32fb06&i=" + params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Response Error", response.status);
        }
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.log("Server Error", err);
      });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={3}>
          {" "}
          <Card>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Plot}</Card.Text>
            </Card.Body>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Home
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
