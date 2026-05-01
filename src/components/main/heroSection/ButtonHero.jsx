import { Button } from "react-bootstrap";

const ButtonHero = function () {
  return (
    <div className="d-flex gap-2">
      <Button className="btn-netflix-light btn-lg px-4 fw-bold d-flex align-items-center">
        <i className="bi bi-play-fill fs-2 me-1"></i> Riproduci
      </Button>
      <Button className="btn-netflix-dark btn-lg px-4 fw-bold d-flex align-items-center">
        <i className="bi bi-info-circle fs-4 me-2"></i> Altre info
      </Button>
    </div>
  );
};

export default ButtonHero;
