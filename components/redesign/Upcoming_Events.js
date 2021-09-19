import React from "react";
import Card from "./Card";
import "../../redesign/index.css";

const style = {
  height: "80vh",
  backgroundColor: "#ddd"
};

export default function Upcoming_Events(props) {
  const GOOGLE = "https://www.google.com";
  const HOW_TO_LAND_INTERNSHIP = "redesign/events/how_to_land_internship.svg";
  const INFORMATIONAL_MEETING = "redesign/events/informational_meeting.svg";
  const PROJECT_SERIES = "redesign/events/project_series.svg";

  const UPCOMING_EVENTS_CONTAINER = "upcoming_events_container";
  const UPCOMING_EVENTS = "upcoming_events";

  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }
  return (
    <div style={cardStyle}>
      <h2 className={UPCOMING_EVENTS}> Upcoming Events</h2>

      <div className={UPCOMING_EVENTS_CONTAINER}>
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
  );
}
