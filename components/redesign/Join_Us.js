import React from "react";
import "../../redesign/index.css";
import Card from "./Card";
import Join_Us_Icons from "./Join_Us_Icons";

const style = {
  display: "flex",
  flexDirection: "row",
  height: "45vh",
  alignItems: "center",
  backgroundColor: "#ddd",
  marginBottom: "50px"
};

export default function Join_Us(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const RESOURCES_RIGHT = "resources_right";
  const JOIN_US = "join_us";
  const JOIN_US_LEFT_SIDE = "join_us_left_side";
  const JOIN_US_SVG = "redesign/join_us.svg";
  const LINE_CONTAINER = "line_container";

  return (
    <div>
      <hr />
      <div id={`#card${props.id}`} style={cardStyle}>
        <div className={JOIN_US_LEFT_SIDE}>
          <h2 className={JOIN_US}> Join Us </h2>
          <p className={JOIN_US}>
            Feel free to reach out to us at coderssb@gmail.com and check us out
            on your favorite social media for our latest events.
          </p>
          <Join_Us_Icons bgcolor="white" />
        </div>
        <div>
          <img
            className={RESOURCES_RIGHT}
            src={JOIN_US_SVG}
            alt="computer screen with smiling faces"
          />
        </div>
      </div>
    </div>
  );
}
