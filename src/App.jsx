import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/header/MyNavbar";
import MyFooter from "./components/footer/MyFooter";

function App() {
  return (
    <div id="main-div" className="d-flex flex-column min-vh-100">
      <header>
        <MyNavbar />
      </header>
      <main className="flex-grow-1"></main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
