import FutureEventCard from "./FutureEventCard";
import { events } from "../../utils/events";
import "../../css/FutureEventCardStyle.css";

export default function Events() {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="all">
        <FutureEventCard
          website={events[0].url}
          imgUrl={events[0].pic}
          when={events[0].start.toString()}
          info={events[0].info}
        />

        <FutureEventCard
          website={events[1].url}
          imgUrl={events[0].pic}
          when={events[1].start.getMonth()}
          info={events[1].info}
        />

        <FutureEventCard
          website={events[2].url}
          imgUrl={events[0].pic}
          when={events[2].start.toString()}
          info={events[2].info}
        />
      </div>
    </div>
  );
}
