import AboutUs from "../components/Page_Layout/AboutUs";
import Typing from "../components/Page_Layout/Typing";
import Companies from "../components/Page_Layout/Companies";
import Layout from "../components/Website_Layout/Layout";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";

export default function About() {
  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
        <Typing />

        <div className="w3-content" style={{ maxWidth: 1100 }}>
          <hr />
          <AboutUs />
        </div>

        <hr />
        <Companies />
        <hr />

        {/* <Officers /> */}

        <BackgroundImage
          source="Background/rfilm/4_wide_blur.png"
          missing_source="logo.png"
          title={
            <a
              className={"yellowHighlight"}
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=coderssb@gmail.com"
              target="_blank"
            >
              Click to Email Us!
            </a>
          }
          hover={true}
        />
        <hr />
      </div>
    </Layout>
  );
}
