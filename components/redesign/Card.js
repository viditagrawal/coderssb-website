import "../../redesign/index.css";
import React, { useState } from "react";

export default function Card(props) {
  const UPCOMING_EVENTS = "upcoming_events";

  const [shouldMagnify, setShouldMagnify] = useState(false);

  const style = shouldMagnify ? { cursor: "pointer" } : {};

  return (
    <div style={style}>
      <figure
        onClick={() => {
          open(props.url);
        }}
        onMouseEnter={() => {
          setShouldMagnify(true);
        }}
        onMouseLeave={() => {
          setShouldMagnify(false);
        }}
      >
        <img src={props.pic} />
        <h3 className={UPCOMING_EVENTS}>{props.title}</h3>
        <p className={UPCOMING_EVENTS}>{props.info}</p>
      </figure>
    </div>
  );
}
