import ProjectSeriesInfo from "../components/Page_Layout/ProjectSeriesInfo";
import Layout from "../components/Website_Layout/Layout";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";
import "../css/index.css";


export default function ProjectSeriesPage() {
  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
        <BackgroundImage
          source="Background/ocean.jpg"
          missing_source="logo.png"
          title={<a className={"yellowHighlight"}>Project Series</a>}
          hover={true}
        />
        <hr />

        <div className="w3-content" style={{ maxWidth: 1100, marginBottom: 200}}>
          <ProjectSeriesInfo />
        </div>
        <br></br>
      </div>
    </Layout>
  );
}

