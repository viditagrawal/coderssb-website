import React from "react";
import "../../redesign/index.css";
import Card from "./Card";
import Join_Us_Icons from "./Join_Us_Icons";

const style = {
  display: "flex",
  flexDirection: "row",
  height: "75vh",
  backgroundColor: "#ddd"
};

export default function Join_Us(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const RESOURCES_RIGHT = "resources_right";
  const JOIN_US = "join_us";
  const JOIN_US_SVG = "redesign/join_us.svg";
  const SOCIALS_SVG = "redesign/socials.svg";
  const LINKTREE = "https://linktr.ee/codersSB";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <p className={JOIN_US}>
        <h2 className={JOIN_US}> Join Us </h2>
        Feel free to reach out to us at coderssb@gmail.com and check us out on
        your favorite social media for our latest events.
        <Join_Us_Icons bgcolor="white" />
      </p>
      <img
        className={RESOURCES_RIGHT}
        src={JOIN_US_SVG}
        alt="computer screen with smiling faces"
      />
    </div>
  );
}
