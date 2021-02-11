import EventCard from "./EventCard";
import { events } from "../../utils/events";
import "../../css/Events.css";
import "../../css/Hover/reveal-top-right.css";

function DateConv(dateObj) {
  var minutes = "00";
  if (dateObj.getMinutes() != 0) {
    minutes = dateObj.getMinutes();
  }

  return (
    "" +
    (dateObj.getMonth() + 1) +
    "/" +
    dateObj.getDate() +
    "/" +
    dateObj.getFullYear() +
    " @ " +
    (dateObj.getHours() - 12) +
    ":" +
    minutes +
    " PM"
  );
}

export default function Events() {
  return (
    <div>
      <div className="all">
        <EventCard
          url={events[8].url}
          pic={events[8].pic}
          info={DateConv(events[8].start) + " Click to learn more!"}
        />

        <EventCard
          url={events[11].url}
          pic={events[11].pic}
          info={DateConv(events[9].start) + " Click to learn more!"}
        />
        <EventCard
          url={events[10].url}
          pic={events[10].pic}
          info={DateConv(events[10].start) + " Click to learn more!"}
        />
      </div>
    </div>
  );
}
