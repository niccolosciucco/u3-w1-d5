import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/header/MyNavbar";
import MyFooter from "./components/footer/MyFooter";
import MyDropDownGenres from "./components/main/genresAndVisualization/MyDropDownGenres";
import MyVisualization from "./components/main/genresAndVisualization/MyVisualization";
import MyCarousel from "./components/main/carousels/MyCarousel";
import MyCarouselTitle from "./components/main/carousels/MyCarouselTitle";
import { Alert, Button } from "react-bootstrap";
import { Component } from "react";

// Trasformato App in una classe, mi serve lo state
// Sembra che non ho rotto nulla, quindi la lascio a classe
// Non so se è il modo migliore, ma è l'unico che so fare

class App extends Component {
  state = {
    showInfo: true,
    isHome: true,
    isProfile: false,
    isSetting: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showInfo: false,
      });
    }, 5000);
  }
  render() {
    return (
      <div id="main-div" className="d-flex flex-column min-vh-100">
        {this.state.showInfo && (
          <Alert
            key="primary"
            variant="primary"
            className="mb-0 rounded-0 text-center"
          >
            Click on the button at the end of every page to "change" page
          </Alert>
        )}

        {this.state.isHome && (
          <>
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
              <Button
                variant="dark"
                onClick={() => {
                  this.setState({
                    isHome: false,
                    isProfile: true,
                  });
                }}
              >
                Profile Page
              </Button>
            </footer>
          </>
        )}

        {this.state.isProfile && (
          <>
            <header></header>
            <main className="flex-grow-1"></main>
            <footer>
              <Button
                variant="dark"
                onClick={() => {
                  this.setState({
                    isHome: false,
                    isProfile: false,
                    isSetting: true,
                  });
                }}
              >
                Setting Page
              </Button>
            </footer>
          </>
        )}

        {this.state.isSetting && (
          <>
            <header></header>
            <main className="flex-grow-1"></main>
            <footer>
              <Button
                variant="dark"
                onClick={() => {
                  this.setState({
                    isHome: true,
                    isProfile: false,
                    isSetting: false,
                  });
                }}
              >
                Home Page
              </Button>
            </footer>
          </>
        )}
      </div>
    );
  }
}

export default App;
