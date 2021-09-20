import EventCard from "./EventCard";
import React from "react";
import Card from "./Card";
import { events } from "../../utils/events";
import "../../css/Events.css";
import "../../css/Hover/reveal-top-right.css";
import "../../redesign/index.css";

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
      <div className="eventsOverview">
        <h1 className="upcomingEvents"> Events </h1>
          <p className="upcomingEvents">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation.
          </p>
          <h1 className="upcomingEvents"> Upcoming Events </h1>
        
          <div className="all">
            {/* <EventCard
              url={events[8].url}
              pic={events[8].pic}
              info={DateConv(events[8].start) + " Click to learn more!"}
            />
            <EventCard
              url={events[10].url}
              pic={events[10].pic}
              info={DateConv(events[10].start) + " Click to learn more!"}
            />

            <EventCard
              url={events[11].url}
              pic={events[11].pic}
              info={DateConv(events[11].start) + " Click to learn more!"}
            /> */}
              <Card
                url={GOOGLE}
                pic={HOW_TO_LAND_INTERNSHIP}
                title="How to Land an Internship"
                info="October 13  |  7pm  |  Zoom"
              />
              <Card
                url={GOOGLE}
                pic={INFORMATIONAL_MEETING}
                title="Coders SB Informational Meeting"
                info="October 18  |  6pm  |  Zoom"
              />
              <Card
                url={GOOGLE}
                pic={PROJECT_SERIES}
                title="Project Series"
                info={"Novermeber 2  |  7pm  |  Zoom"}
              />
          </div>
        </div>
    </div>
  );
}
