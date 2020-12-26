import Calendar from "../components/Page_Layout/Calendar";
import Layout from "../components/Website_Layout/Layout";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";

export default function CalendarPage() {
  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
        <BackgroundImage
          source="Background/henley_background_blur.png"
          missing_source="logo.png"
          title={<a className={"blueHighlight"}>Calendar Of Events</a>}
          hover={false}
        />
        <div style={{ padding: 20 }}>
          <Calendar />
        </div>
      </div>
    </Layout>
  );
}
