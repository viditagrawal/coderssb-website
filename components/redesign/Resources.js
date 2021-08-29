import React from "react";
import "../../redesign/index.css";

const style = {
  height: "100vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px"
};

export default function Resources(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const RESOURCES = "resources";
  const RESOURCES_RIGHT = "resources_right";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <img
        className={RESOURCES_RIGHT}
        src="redesign/resources_image.svg"
        alt="computer on a search homepage"
      />
      <h2 className={RESOURCES}> Resources </h2>
      <p className={RESOURCES}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation. <br />
        <br />
        <a className={RESOURCES} href="https://www.google.com">
          Learn More ⮕
        </a>
      </p>
    </div>
  );
}
