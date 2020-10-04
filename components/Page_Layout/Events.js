<<<<<<< HEAD
export default function Events() {
  return (
    <div className="w3-row w3-padding-64" id="menu">
      <div className="w3-col l6 w3-padding-large">
        <h1 className="w3-center">Our Upcoming Event</h1>
        <br />
        <h4>Bread Basket</h4>
        <p className="w3-text-grey">
          Assortment of fresh baked fruit breads and muffins 5.50
        </p>
        <br />

        <h4>Honey Almond Granola with Fruits</h4>
        <p className="w3-text-grey">
          Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
        </p>
        <br />
=======
import FutureEventCard from "./FutureEventCard";
import { events } from "../../utils/events";
import "../../css/FutureEventCardStyle.css";
>>>>>>> c0a4baf7aea058d7d0a0ac72e3d8ccd0b6080f29

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
    <div>
      <h1>Upcoming Events</h1>
      <div className="all">
        <FutureEventCard
          // website={window.open(events[0].url, "_blank")}
          website={events[0].url}
          imgUrl={events[0].pic}
          when={DateConv(events[0].start)}
          info={events[0].info}
        />

<<<<<<< HEAD
        <h4>Blueberry Pancakes</h4>
        <p className="w3-text-grey">
          With syrup, butter and lots of berries 8.50
        </p>
      </div>
=======
        <FutureEventCard
          website={events[1].url}
          imgUrl={events[0].pic}
          when={DateConv(events[1].start)}
          info={events[1].info}
        />
>>>>>>> c0a4baf7aea058d7d0a0ac72e3d8ccd0b6080f29

        <FutureEventCard
          website={events[2].url}
          imgUrl={events[0].pic}
          when={DateConv(events[2].start)}
          info={events[2].info}
        />
      </div>
    </div>
  );
}
