import Header from "../components/Page_Layout/Header";
import AboutUs from "../components/Page_Layout/AboutUs";
import Events from "../components/Page_Layout/Events";
import Typing from "../components/Page_Layout/Typing";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";
import Companies from "../components/Page_Layout/Companies";
import Resources from "../components/Page_Layout/Resources";
import FutureEventCard from "../components/Page_Layout/FutureEventCard";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <hr />
        <Events />
        <hr />
      </div>
      <BackgroundImage
        source="Background/rfilm/4_wide_blur.png"
        missing_source="banner_1.png"
        title={
          <a
            className={"yellowHighlight"}
            href="https://docs.google.com/forms/d/e/1FAIpQLSdP77TCVm-nBlPnLEXjojm-bp6NbfKak20_dz1LHkCyx-D7bw/viewform"
            target="_blank"
          >
            Click to Apply to be a Coders SB Officer
          </a>
        }
        hover={true}
      />
      <hr />
      <BackgroundImage
        source="Background/rfilm/1_wide_blur.png"
        missing_source="banner_1.png"
        title={
          <a
            className={"blueHighlight"}
            href="https://www.facebook.com/coderssb"
            target="_blank"
          >
            Click to Follow our Facebook Page
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
      <hr />

      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <hr />
        <Resources />
      </div>
    </div>
  );
}
