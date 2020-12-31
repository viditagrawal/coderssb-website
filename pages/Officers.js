import Officers from "../components/Page_Layout/Officers";
import Layout from "../components/Website_Layout/Layout";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";
import "../css/index.css"

export default function ResourcesPage() {
  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
        <BackgroundImage
          source="Background/sunset.jpg"
          missing_source="logo.png"
          title={<a className={"blueHighlight"}>Meet the Team</a>}
          hover={true}
        />
        <hr />

        <div className="w3-content" style={{ maxWidth: 1100, paddingBottom: 20}}>
          <img
            src="../../Officers/officerPageBanner.png"
            alt="Meet the people making the magic happen. Hover over the images for a suprise."
            className="officer-page-banner"
          />
          <Officers />
        </div>
      </div>
    </Layout>
  );
}
