import FutureEventCard from "./FutureEventCard";
import { stuff } from "../../utils/events";
import "../../css/FutureEventCardStyle.css";

export default function Events() {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="all">
        <FutureEventCard
          website={stuff[0].url}
          name={stuff[0].title}
          imgUrl={stuff[0].pic}
          when={stuff[0].start.toString()}
          info={stuff[0].info}
        />

        <FutureEventCard
          website={stuff[1].url}
          name={stuff[1].title}
          imgUrl={stuff[0].pic}
          when={stuff[1].start.toString()}
          info={stuff[1].info}
        />

        <FutureEventCard
          website={stuff[2].url}
          name={stuff[2].title}
          imgUrl={stuff[0].pic}
          when={stuff[2].start.toString()}
          info={stuff[2].info}
        />
      </div>
    </div>
  );
}
