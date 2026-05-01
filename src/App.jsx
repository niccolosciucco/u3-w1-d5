import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/header/MyNavbar";
import MyFooter from "./components/footer/MyFooter";
import MyDropDownGenres from "./components/main/genresAndVisualization/MyDropDownGenres";
import MyVisualization from "./components/main/genresAndVisualization/MyVisualization";
import MyCarousel from "./components/main/carousels/MyCarousel";
import MyCarouselTitle from "./components/main/carousels/MyCarouselTitle";

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
          <MyCarouselTitle title="Only on Netflix" />
          <MyCarousel titles={["Avengers", "Harry Potter"]} />

          <MyCarouselTitle title="Watch it Again" />
          <MyCarousel titles={["Star Wars", "Fast and furious"]} />

          <MyCarouselTitle title="Trending Now" />
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
