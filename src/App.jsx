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
import MySettingTitle from "./components/main/settingPage/MySettingTitle";
import MySettingTitleSections from "./components/main/settingPage/MySettingTitleSections";
import MySettingBoldText from "./components/main/settingPage/MySettingBoldText";
import MySettingGreyText from "./components/main/settingPage/MySettingGreyText";
import MySettingLink from "./components/main/settingPage/MySettingLink";
import MySettingAvatar from "./components/main/settingPage/MySettingAvatar";

// Trasformato App in una classe, mi serve lo state
// Sembra che non ho rotto nulla, quindi la lascio a classe

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
    }, 7000);
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
                Go to Profile Page
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
              <section id="main-section">
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
                Go to Setting Page
              </Button>
            </footer>
          </>
        )}

        {this.state.isSetting && (
          <>
            <header>
              <MyNavbar />
            </header>
            <section className="bg-white">
              <article id="main-section">
                <main className="flex-grow-1">
                  <MySettingTitle title="Account" />
                  <Container className="border-bottom border-secondary">
                    <Row class="pt-3">
                      <MySettingTitleSections
                        text="MEMBERSHIP & BILLING"
                        button={true}
                        buttonText="Cancel Membership"
                      />

                      <Col
                        xs={12}
                        lg={8}
                        xl={9}
                        className="d-flex flex-column flex-sm-row justify-content-between border-bottom border-secondary pb-3"
                      >
                        <div class="d-flex flex-column">
                          <MySettingBoldText text="student@strive.school" />
                          <MySettingGreyText text="Password: ******" />
                          <MySettingGreyText text="Phone: 1234567" />
                        </div>

                        <div class="d-flex flex-column align-items-start align-items-sm-end">
                          <MySettingLink text="Change account email" />
                          <MySettingLink text="Change password" />
                          <MySettingLink text="Change phone number" />
                        </div>
                      </Col>

                      <div class="d-flex justify-content-end mt-3">
                        <Col
                          xs={12}
                          lg={8}
                          xl={9}
                          className="d-flex flex-column flex-sm-row justify-content-between border-bottom border-secondary pb-3"
                        >
                          <div class="d-flex flex-column">
                            <MySettingBoldText text="PayPal admin@strive.school" />
                          </div>

                          <div class="d-flex flex-column align-items-start align-items-sm-end">
                            <MySettingLink text="Update payment info" />
                            <MySettingLink text="Billing details" />
                          </div>
                        </Col>
                      </div>

                      <div class="d-flex justify-content-end mt-3">
                        <Col
                          xs={12}
                          lg={8}
                          xl={9}
                          className="d-flex flex-column flex-sm-row justify-content-between pb-3"
                        >
                          <div class="d-flex flex-column"></div>
                          <div class="d-flex flex-column align-items-start align-items-sm-end">
                            <MySettingLink text="Redeem gift card or promo code" />
                            <MySettingLink text="Where to buy gift cards" />
                          </div>
                        </Col>
                      </div>
                    </Row>
                  </Container>

                  <Container className="border-bottom border-secondary">
                    <Row className="pt-3">
                      <MySettingTitleSections
                        text="PLAN DETAILS"
                        button={false}
                        buttonText=""
                      />

                      <Col
                        xs={12}
                        lg={8}
                        xl={9}
                        className="d-flex flex-column flex-sm-row justify-content-between pb-3"
                      >
                        <MySettingBoldText text="Premium" />
                        <MySettingLink text="Change Plan" />
                      </Col>
                    </Row>
                  </Container>

                  <Container className="border-bottom border-secondary">
                    <Row className="pt-3">
                      <MySettingTitleSections
                        text="SETTINGS"
                        button={false}
                        buttonText=""
                      />

                      <Col
                        xs={12}
                        lg={8}
                        xl={9}
                        className="d-flex flex-column flex-sm-row justify-content-between pb-3"
                      >
                        <div className="d-flex flex-column">
                          <MySettingLink text="Parental Control" />
                          <MySettingLink text="Test Participation" />
                          <MySettingLink text="Manage download service" />
                          <MySettingLink text="Activate a device" />
                          <MySettingLink text="Recent device streaming activity" />
                          <MySettingLink text="Sign out of all devices" />
                        </div>
                      </Col>
                    </Row>
                  </Container>

                  <Container className="border-bottom border-secondary pb-4">
                    <Row classNme="pt-3">
                      <MySettingTitleSections
                        text="MEMBERSHIP & BILLING"
                        button={false}
                        buttonText=""
                      />

                      <Col xs={12} lg={9}>
                        <div class="d-flex justify-content-between align-items-start mb-3">
                          <MySettingAvatar
                            src="./avatar.png"
                            text="Strive Student"
                          />
                          <div class="d-flex flex-column align-items-end">
                            <MySettingLink text="Manage Profile" />
                            <MySettingLink text="Add profile email" />
                          </div>
                        </div>

                        <Row>
                          <Col xs={6} sm={4} className="d-flex flex-column">
                            <MySettingLink text="Language" />
                            <MySettingLink text="Playback settings" />
                            <MySettingLink text="Subtitle appearance" />
                          </Col>
                          <div class="col-6 col-sm-4 d-flex flex-column">
                            <MySettingLink text="Viewing activity" />
                            <MySettingLink text="Ratings" />
                          </div>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </main>
                <footer></footer>
              </article>
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
                Go to Home Page
              </Button>
            </section>
          </>
        )}
      </div>
    );
  }
}

export default App;
