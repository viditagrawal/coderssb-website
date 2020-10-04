import Header from "../components/Page_Layout/Header";
import Calendar from "../components/Page_Layout/Calendar";
import Navbar from "../components/Website_Layout/Navbar";

export default function CalendarPage() {
  return (
    <div>
      <Navbar setGoogleId={(id) => props.setGoogleId(id)} />
      <div style = {{padding: 20}}>
        <Calendar />
      </div>
    </div>
  );
}