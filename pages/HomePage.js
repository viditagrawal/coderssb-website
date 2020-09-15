import Header from "../components/Page_Layout/Header";
import About from "../components/Page_Layout/About";
import Events from "../components/Page_Layout/Events";
import Contact from "../components/Page_Layout/Contact";
import MailingList from "../components/Page_Layout/MailingList";
import Calendar from "../components/Page_Layout/Calendar";
import Typing from "../components/Page_Layout/Typing";

export default function HomePage() {
  return (
    <div>
      <Header />
      {/* <-- Page content begins --> */}
      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <Typing />
        <hr />
        <Events />
        <hr />
        <Calendar />
        <hr />
        <About />
        <hr />

        <Contact />
        <hr />
        <MailingList />
      </div>
      {/* <-- End page content --> */}
    </div>
  );
}
