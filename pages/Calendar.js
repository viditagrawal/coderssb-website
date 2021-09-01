import Calendar from "../components/Page_Layout/Calendar";
import Layout from "../components/Website_Layout/Layout";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";
import eventsOverview from "../components/events_page_redesign/eventsOverview";
import upcomingEvents from "../components/events_page_redesign/upcomingEvents";
import "../css/index.css";

export default function CalendarPage() {
  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
        {/* <BackgroundImage
          source="Background/henley_background_blur.png"
          missing_source="logo.png"
          title={<a className={"blueHighlight"}>Calendar Of Events</a>}
          hover={false}
        /> */}

          <eventsOverview />
          <upcomingEvents />

        <div style={{ padding: 20 }} className="paragraph-text">
          <Calendar />
        </div>
      </div>
    </Layout>
  );
}
