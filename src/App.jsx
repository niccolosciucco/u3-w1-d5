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
      <footer></footer>
    </div>
  );
}

export default App;
