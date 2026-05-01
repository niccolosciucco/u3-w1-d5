import "../../../App.css";

const MyVisualization = function () {
  return (
    <div
      id="visual"
      className="d-none d-lg-flex border border-secondary align-items-center"
    >
      <div className="px-2 py-1 border-end border-secondary d-flex align-items-center justify-content-center pointer">
        <i className="bi bi-text-left text-white fs-5"></i>
      </div>
      <div className="px-2 py-1 d-flex align-items-center justify-content-center pointer">
        <i className="bi bi-grid-fill text-white"></i>
      </div>
    </div>
  );
};

export default MyVisualization;
