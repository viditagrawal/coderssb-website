import Header from "../components/Page_Layout/Header";
import About from "../components/Page_Layout/About";
import Events from "../components/Page_Layout/Events";
import Contact from "../components/Page_Layout/Contact";
import Calendar from "../components/Page_Layout/Calendar";
import Typing from "../components/Page_Layout/Typing";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";
import Companies from "../components/Page_Layout/Companies";

export default function HomePage() {
  return (
    <div>
      <Header />

      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <hr />
        <Events />
        <hr />
      </div>

      <Typing />

      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <hr />
        <About />
      </div>

      <hr />
      <Companies />
      <hr />
      <BackgroundImage
        source="Background/storke_background_blur.png"
        missing_source="banner_1.png"
        title={
          <a
            className={"blueHighlight"}
            href="https://www.facebook.com/groups/coderssb"
            target="_blank"
          >
            Click to Join our Facebook Page!
          </a>
        }
        hover={true}
      />
      <hr />
      <BackgroundImage
        source="Background/henley_background_blur.png"
        missing_source="banner_1.png"
        title={
          <a
            className={"yellowHighlight"}
            href="http://eepurl.com/gPudI1"
            target="_blank"
          >
            Click to Join Our Mailing List
          </a>
        }
        hover={true}
      />

      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <hr />
        <Calendar />
        <hr />
        <Contact />
      </div>
    </div>
  );
}
