import Officers from "../components/Page_Layout/Officers";
import Layout from "../components/Website_Layout/Layout";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";

export default function ResourcesPage() {
  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
        <BackgroundImage
          source="Background/sunset.jpg"
          missing_source="logo.png"
          title={<a className={"yellowHighlight"} color="black">Useful Resources</a>}
          hover={true}
        />
        <hr />

        <div className="w3-content" style={{ maxWidth: 1100, paddingBottom: 1000}}>
          <Officers />
        </div>
      </div>
    </Layout>
  );
}
