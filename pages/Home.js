import Header from "../components/Page_Layout/Header";
import Events from "../components/Page_Layout/Events";
import Links from "../components/Page_Layout/Links";
import "../css/Links.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <hr />
      <Events />
      <hr />
      <div className="w3-content" style={{ maxWidth: 1100 }}></div>

      {/* <div style={{ width: "100%" }}>
        <div style={{ float: "left", width: "25%" }}>
          <Links
            source="Background/rfilm/8_blur.png"
            missing_source="logo.png"
            title={
              <a
                className={"yellowHighlight"}
                href="https://www.instagram.com/coders.sb/"
                target="_blank"
              >
                Follow us on Instagram
              </a>
            }
            hover={true}
          />
        </div>
        <div style={{ float: "left", width: "25%" }}>
          <Links
            source="Background/silhouettes_blur.png"
            missing_source="logo.png"
            title={
              <a
                className={"blueHighlight"}
                href="https://www.facebook.com/coderssb"
                target="_blank"
              >
                Like our Facebook Page
              </a>
            }
            hover={true}
          />
        </div>
        <div style={{ float: "left", width: "25%" }}>
          <Links
            source="Background/san_nic_blur.png"
            missing_source="logo.png"
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
        <div style={{ float: "left", width: "25%" }}>
          <Links
            source="Background/rfilm/1_blur.png"
            missing_source="logo.png"
            title={
              <a
                className={"blueHighlight"}
                href="https://discord.gg/kesRgzaHuG"
                target="_blank"
              >
                Join the Coders SB Discord
              </a>
            }
            hover={true}
          />
        </div>
        <br style={{ clear: "left" }} />
      </div>
      <hr /> */}
    </div>
  );
}
