import FutureEventCard from "./FutureEventCard";
import { events } from "../../utils/events";
import "../../css/FutureEventCardStyle.css";

function DateConv(dateObj) {
  return (
    "" +
    (dateObj.getMonth() + 1) +
    "/" +
    dateObj.getDate() +
    "/" +
    dateObj.getFullYear()
  );
}

export default function Events() {
  return (
    // <div>
    <div className="all">
      <FutureEventCard
        // website={window.open(events[0].url, "_blank")}
        website={events[0].url}
        imgUrl={events[0].pic}
        when={DateConv(events[0].start)}
        info={events[0].info}
      />

      <FutureEventCard
        website={events[1].url}
        imgUrl={events[1].pic}
        when={DateConv(events[1].start)}
        info={events[1].info}
      />

      <FutureEventCard
        website={events[2].url}
        imgUrl={events[2].pic}
        when={DateConv(events[2].start)}
        info={events[2].info}
      />
    </div>
    // </div>
  );
}
