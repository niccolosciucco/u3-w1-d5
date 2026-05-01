import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/footer/MyNavbar";

function App() {
  return (
    <div id="main-div" className="d-flex flex-column min-vh-100">
      <header>
        <MyNavbar />
      </header>
      <main className="flex-grow-1"></main>
      <footer>
        <section className="mt-5 pb-5 text-secondary pointer">
          <div>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>
          </div>
          <div className="container mt-4">
            <div className="row mb-3">
              <div className="col-12 col-md-6 col-lg-3">
                <p className="small mb-2">Audio and Subtitles</p>
                <p className="small mb-2">Media Center</p>
                <p className="small mb-2">Privacy</p>
                <p className="small mb-2">Contact Us</p>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <p className="small mb-2">Audio Description</p>
                <p className="small mb-2">Investor Relations</p>
                <p className="small mb-2">Legal Notices</p>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <p className="small mb-2">Help Center</p>
                <p className="small mb-2">Jobs</p>
                <p className="small mb-2">Cookie Preferences</p>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <p className="small mb-2">Gift Cards</p>
                <p className="small mb-2">Terms of Use</p>
                <p className="small mb-2">Corporate Information</p>
              </div>
            </div>
          </div>
          <div>
            <button className="text-secondary bg-black border border-secondary">
              Service Code
            </button>
          </div>
          <div>
            <span className="text-secondary mt-3">
              © 1997-2026 Netflix, Inc.
            </span>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
