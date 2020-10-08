import Resources from "../components/Page_Layout/Resources";
import Layout from "../components/Website_Layout/Layout";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";

export default function ResourcesPage() {
  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
        <BackgroundImage
          source="Background/rfilm/7_wide_blur.png"
          missing_source="banner_1.png"
          title={<a className={"yellowHighlight"}>Useful Resources</a>}
          hover={true}
        />
        <hr />

        <div className="w3-content" style={{ maxWidth: 1100, paddingBottom: 1150}}>
          <Resources />
        </div>
      </div>
    </Layout>
  );
}
