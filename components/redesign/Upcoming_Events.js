import React from "react";
import Card from "./Card";
import "../../redesign/index.css";

const style = {
  height: "85vh",
  backgroundColor: "#ddd",
  display: "flex",
  flexDirection: "column",
  marginLeft: "80px",
  marginRight: "80px",
};

export default function Upcoming_Events(props) {
  const GOOGLE = "https://www.google.com";

  /* EDIT ME */
  const EVENT_1 = ["redesign/events/fall_2021/intro_to_coders.png",
    "https://cglink.me/2dD/r1278244"];
  const EVENT_2 = ["redesign/events/fall_2021/internship_panel.png", "https://cglink.me/2dD/r1286522"];
  const EVENT_3 = ["redesign/events/project_series.svg", GOOGLE];
  /* EDIT ME */

  const UPCOMING_EVENTS_CONTAINER = "upcoming_events_container";
  const UPCOMING_EVENTS = "upcoming_events";

  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }
  return (
    <div style={cardStyle}>
      <h2 className={UPCOMING_EVENTS}>Upcoming Events</h2>

      <div className={UPCOMING_EVENTS_CONTAINER}>
        <Card
          url={EVENT_1[1]}
          pic={EVENT_1[0]}
          title="Intro to Coders SB"
          info="September 27  |  7pm  |  ESB 1001"
          isLarge={true}
        />
        <Card
          url={EVENT_2[1]}
          pic={EVENT_2[0]}
          title="Internship Panel"
          info="September 29  |  7:30pm  |  ESB 1001"
          isLarge={true}
        />
        <Card
          url={EVENT_3[1]}
          pic={EVENT_3[0]}
          title="Project Series"
          info={"October 7  |  7pm  |  ESB 1001"}
          isLarge={true}
        />
      </div>
    </div>
  );
}
