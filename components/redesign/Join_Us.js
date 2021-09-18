import React from "react";
import "../../redesign/index.css";
import Card from "./Card";

const style = {
  height: "75vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px"
};

export default function Join_Us(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const RESOURCES_RIGHT = "resources_right";
  const JOIN_US = "join_us";
  const JOIN_US_CONTAINER = "join_us_container";
  const JOIN_US_SVG = "redesign/join_us.svg";
  const SOCIALS_SVG = "redesign/socials.svg";
  const LINKTREE = "https://linktr.ee/codersSB";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <hr />
      <img
        className={RESOURCES_RIGHT}
        src={JOIN_US_SVG}
        alt="computer screen with smiling faces"
      />
      <h2 className={JOIN_US}> Join Us </h2>
      <p className={JOIN_US}>
        Feel free to reach out to us at coderssb@gmail.com and check us out on
        your favorite social media for our latest events.
      </p>

      <div className={JOIN_US_CONTAINER}>
        <Card url={LINKTREE} pic={SOCIALS_SVG} />
      </div>
    </div>
  );
}
