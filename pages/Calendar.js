import Calendar from "../components/Page_Layout/Calendar";
import Layout from "../components/Website_Layout/Layout";
import Events from "../components/Page_Layout/Events";
import "../css/index.css";

export default function CalendarPage() {
  return (
    <Layout setGoogleId={id => setGoogleId(id)}>
      <div>
          <Events />

        <div style={{ padding: 20 }} className="paragraph-text">
          <Calendar />
        </div>
      </div>
    </Layout>
  );
}
