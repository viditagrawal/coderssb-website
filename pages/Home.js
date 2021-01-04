import Header from "../components/Page_Layout/Header";
import Events from "../components/Page_Layout/Events";
import Links from "../components/Page_Layout/Links";
import Companies from "../components/Page_Layout/Companies";
import "../css/Links.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <hr />
      <Events />
      <hr />
      <div className="w3-cell">
        <h1
          className="p-officer-description"
          style={{ fontSize: 60, paddingLeft: 75 }}
        >
          {" "}
          Our Mission{" "}
        </h1>
        <p
          className="p-officer-description"
          style={{
            paddingLeft: 75,
            paddingRight: 75,
            paddingTop: 0,
            paddingBottom: 25,
            fontSize: 27
          }}
        >
          Welcome to Coders SB! Our goal is to bridge the gap between classes at
          UCSB and the real-world. Enabling you to build real world programs,
          apps, websites, utilities, and services. Come learn about scalable web
          services, APIs, iOS/Android Applications, or professional-looking
          websites that will impress anyone. Coders SB provides an environment
          where students can have fun building cool stuff with their peers,
          improving both their programming and collaboration skills, which are
          vital to working in the industry (and boosting their resume!). We will
          also host workshops and have industry professionals come and share
          their wisdom with us. Most importantly, we're extremely open and
          welcoming to students of all ages and skill-sets, from freshmen with
          no experience to seniors with various internships and hackathon
          awards. Come to our next meeting to join to get started! Let's build
          something! Here are the companies we've worked with
        </p>
      </div>
      <Companies />
      <hr />

      {/* <div style={{ width: "100%", paddingLeft: 50, paddingRight: 50 }}>
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
