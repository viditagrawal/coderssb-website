import FutureEventCard from "./FutureEventCard";
import { events } from "../../utils/events";
import "../../css/Hover-reveal-top-right.css";

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
        <figure>
          <img src={events[2].pic} />
          <figcaption>
            {events[2].info + " " + DateConv(events[2].start)}
          </figcaption>
        </figure>
        <figure>
          <img src={events[3].pic} />
          <figcaption>
            {events[3].info + " " + DateConv(events[3].start)}
          </figcaption>
        </figure>
        <figure>
          <img src={events[5].pic} />
          <figcaption>
            {events[5].info + " " + DateConv(events[5].start)}
          </figcaption>
        </figure>

        {/* <FutureEventCard
          className="paragraph-text"
          website={events[0].url}
          imgUrl={events[0].pic}
          altImgUrl={events[0].alt}
          when={DateConv(events[0].start)}
          info={events[0].info}
        />

        <FutureEventCard
          className="paragraph-text"
          website={events[1].url}
          imgUrl={events[1].pic}
          altImgUrl={events[1].alt}
          when={DateConv(events[1].start)}
          info={events[1].info}
        />

        <FutureEventCard
          className="paragraph-text"
          website={events[5].url}
          imgUrl={events[5].pic}
          altImgUrl={events[5].alt}
          when={DateConv(events[5].start)}
          info={events[5].info}
        /> */}
      </div>
    </div>
  );
}
