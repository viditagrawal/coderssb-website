import Header from "../components/Page_Layout/Header";
import Events from "../components/Page_Layout/Events";
import Links from "../components/Page_Layout/Links";
import FutureEventCard from "../components/Page_Layout/FutureEventCard";
import "../css/Links.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <hr />
        <Events />
        <hr />
      </div>

      <div style={{ width: "100%" }}>
        <div style={{ float: "left", width: "33%" }}>
          <Links
            source="Background/rfilm/8_blur.png"
            missing_source="banner_1.png"
            title={
              <a
                className={"yellowHighlight"}
                href="https://docs.google.com/forms/d/e/1FAIpQLSdP77TCVm-nBlPnLEXjojm-bp6NbfKak20_dz1LHkCyx-D7bw/viewform"
                target="_blank"
              >
                Apply to be a Coders SB Officer
              </a>
            }
            hover={true}
          />
        </div>
        <div style={{ float: "left", width: "33%" }}>
          <Links
            source="Background/rfilm/1_blur.png"
            missing_source="banner_1.png"
            title={
              <a
                className={"blueHighlight"}
                href="https://www.facebook.com/coderssb"
                target="_blank"
              >
                Follow our Facebook Page
              </a>
            }
            hover={true}
          />
        </div>
        <div style={{ float: "left", width: "33%" }}>
          <Links
            source="Background/rfilm/6_blur.png"
            missing_source="banner_1.png"
            title={
              <a
                className={"yellowHighlight"}
                href="http://eepurl.com/gPudI1"
                target="_blank"
              >
                Join Our Mailing List
              </a>
            }
            hover={true}
          />
        </div>
        <br style={{ clear: "left" }} />
      </div>
      <hr />
    </div>
  );
}
