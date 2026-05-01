import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/header/MyNavbar";
import MyFooter from "./components/footer/MyFooter";
import MyDropDownGenres from "./components/main/genresAndVisualization/MyDropDownGenres";
import MyVisualization from "./components/main/genresAndVisualization/MyVisualization";
import MyCarousel from "./components/main/carousels/MyCarousel";

function App() {
  return (
    <div id="main-div" className="d-flex flex-column min-vh-100">
      <header>
        <MyNavbar />
      </header>
      <main className="flex-grow-1">
        <section
          id="genres"
          className="d-flex align-items-center justify-content-between py-3 mx-2"
        >
          <MyDropDownGenres />
          <MyVisualization />
        </section>

        <section className="mx-2">
          <h4 className="text-white">Trending Now</h4>
          <MyCarousel titles={["Avengers", "Harry Potter"]} />

          <h4 className="text-white">Watch it Again</h4>
          <MyCarousel titles={["Star Wars", "Fast and furious"]} />

          <h4 className="text-white">Trending</h4>
          <MyCarousel titles={["Mission Impossible", "Saw"]} />
        </section>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
