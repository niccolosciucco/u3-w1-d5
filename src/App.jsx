import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/header/MyNavbar";
import MyFooter from "./components/footer/MyFooter";
import MyDropDownGenres from "./components/main/genresAndVisualization/MyDropDownGenres";
import MyVisualization from "./components/main/genresAndVisualization/MyVisualization";
import MyCarousel from "./components/main/carousels/MyCarousel";
import MyCarouselTitle from "./components/main/carousels/MyCarouselTitle";
import { Alert, Button, Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import MyProfileTitle from "./components/main/profilePage/MyProfileTitle";
import MyProfileAvatar from "./components/main/profilePage/MyProfileAvatar";
import MyProfileSubtitle from "./components/main/profilePage/MyProfileSubtitle";
import MyProfileDropDown from "./components/main/profilePage/MyProfileDropDown";
import MyProfileButtons from "./components/main/profilePage/MyProfileButtons";
import MyProfileCheckBox from "./components/main/profilePage/MyProfileCheckBox";
import MyHero from "./components/main/heroSection/MyHero";

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
              <MyHero />
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
            <header>
              <MyNavbar />
            </header>
            <main className="flex-grow-1">
              <section id="profile-main-section">
                <Container>
                  <MyProfileTitle title="Edit Profile" />

                  <Row class="row mt-3 border-bottom border-secondary">
                    <MyProfileAvatar />
                    <Col xs={12} md={9} className="p-0 mb-3">
                      <MyProfileSubtitle text="Strive Student" />
                      <MyProfileDropDown />

                      <div className="mt-3">
                        {" "}
                        <MyProfileSubtitle text="Maturity Settings" />
                      </div>

                      <div>
                        <MyProfileButtons text="ALL MATURITY RATINGS" />
                      </div>
                      <div>
                        <p className="mt-3 text-white">
                          Show title of <strong>all maturity ratings</strong>{" "}
                          for this profile.
                        </p>
                      </div>
                      <div>
                        <MyProfileButtons text="EDIT" />
                      </div>

                      <div class="border-top border-secondary mt-4">
                        <MyProfileSubtitle text="Autoplay control" />
                      </div>
                      <MyProfileCheckBox
                        text={[
                          "Autoplay next episode in a series on all devices.",
                          "Autoplay previews while browsing on all devices.",
                        ]}
                      />
                    </Col>
                  </Row>
                </Container>

                <Container className="mt-3 px-0">
                  <Row className="g-3">
                    {" "}
                    <Col
                      xs={12}
                      lg={4}
                      className="d-flex justify-content-center justify-content-lg-start"
                    >
                      <MyProfileButtons text="SAVE" />
                    </Col>
                    <Col
                      xs={12}
                      lg={4}
                      className="d-flex justify-content-center"
                    >
                      <MyProfileButtons text="CANCEL" />
                    </Col>
                    <Col
                      xs={12}
                      lg={4}
                      className="d-flex justify-content-center justify-content-lg-end"
                    >
                      <MyProfileButtons text="DELETE PROFILE" />
                    </Col>
                  </Row>
                </Container>
              </section>
            </main>
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
            <header>
              <MyNavbar />
            </header>
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
