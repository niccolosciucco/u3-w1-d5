import { useEffect, useState } from "react";
import { Col, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

const MyCarouselSingleItem = function (props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const getItems = () => {
    fetch("http://www.omdbapi.com/?apikey=cf32fb06&s=" + props.search)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Response Error", response.status);
        }
      })
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Server Error", err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Col
        className="d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}
      >
        <Spinner animation="border" variant="light" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    );
  }

  if (isError) {
    return (
      <Alert key="danger" variant="danger">
        Server Error
      </Alert>
    );
  }

  return movies.map((movie) => (
    <Col xs={6} md={3} lg={2} key={movie.imdbID}>
      <img
        src={movie.Poster}
        className="img-fluid rounded carousel-poster"
        alt={movie.Title}
        style={{
          height: "300px",
          width: "100%",
          objectFit: "cover",
          transition: "transform 0.2s ease-in-out",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/details/" + movie.imdbID);
        }}
      />
    </Col>
  ));
};

export default MyCarouselSingleItem;
