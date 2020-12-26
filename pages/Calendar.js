import Calendar from "../components/Page_Layout/Calendar";
import Layout from "../components/Website_Layout/Layout";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";
import "../css/index.css";

export default function CalendarPage() {
  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
        <BackgroundImage
          source="Background/rfilm/6_wide_blur.png"
          missing_source="banner_1.png"
          title={<a className={"blueHighlight"}>Calendar Of Events</a>}
          hover={false}
        />
        <div style={{ padding: 20 }} className="paragraph-text">
          <Calendar />
        </div>
      </div>
    </Layout>
  );
}
