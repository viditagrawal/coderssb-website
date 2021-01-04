import EventCard from "./EventCard";
import { events } from "../../utils/events";
import "../../css/Events.css";
import "../../css/Hover/reveal-top-right.css";

function DateConv(dateObj) {
  return (
    "" +
    (dateObj.getMonth() + 1) +
    "/" +
    dateObj.getDate() +
    "/" +
    dateObj.getFullYear() +
    " @ " +
    (dateObj.getHours() - 12) +
    "PM"
  );
}

export default function Events() {
  return (
    <div>
      <div className="all">
        <EventCard
          url={events[2].url}
          pic={events[2].pic}
          info={DateConv(events[2].start) + " Click to learn more!"}
        />

        <EventCard
          url={events[3].url}
          pic={events[3].pic}
          info={DateConv(events[3].start) + " Click to learn more!"}
        />
        <EventCard
          url={events[5].url}
          pic={events[5].pic}
          info={DateConv(events[5].start) + " Click to learn more!"}
        />
      </div>
    </div>
  );
}
