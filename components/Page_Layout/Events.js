import React from "react";
import Card from "./Card";
import "../../css/Events.css";
import "../../css/Hover/reveal-top-right.css";
import "../../redesign/index.css";

export default function Events() {
  const GOOGLE = "https://www.google.com";

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
              <Card
                url={GOOGLE}
                pic={"https://i.redd.it/h680edyswmo71.jpg"}
                title="How to Land an Internship"
                info="October 13  |  7pm  |  Zoom"
              />
              <Card
                url={GOOGLE}
                pic={"https://i.redd.it/h680edyswmo71.jpg"}
                title="Coders SB Informational Meeting"
                info="October 18  |  6pm  |  Zoom"
              />
              <Card
                url={GOOGLE}
                pic={"https://i.redd.it/h680edyswmo71.jpg"}
                title="Project Series"
                info={"Novemeber 2  |  7pm  |  Zoom"}
              />
            </div>
          </div>
        </div>
  );
}
