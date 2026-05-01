import { Component } from "react";
import { Col, Spinner, Alert } from "react-bootstrap";

class MyCarouselSingleItem extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: false,
  };

  getItems = () => {
    fetch("http://www.omdbapi.com/?apikey=cf32fb06&s=" + this.props.search)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Response Error", response.status);
        }
      })
      .then((data) => {
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("Server Error", err);
        this.setState({
          error: true,
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    if (this.state.isLoading) {
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

    if (this.state.error) {
      return (
        <Alert key="danger" variant="danger">
          Server Error
        </Alert>
      );
    }

    return this.state.movies.map((movie) => (
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
        />
      </Col>
    ));
  }
}

export default MyCarouselSingleItem;
