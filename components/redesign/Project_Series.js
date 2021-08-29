import React from "react";
import "../../redesign/index.css";

const style = {
  height: "100vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px"
};

export default function Project_Series(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const SECONDARY_TITLE = "secondary_title";
  const SECONDARY_TITLE_RIGHT = "secondary_title_right";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <h1 className={SECONDARY_TITLE}>Here's What We Do</h1>
      <img
        className={SECONDARY_TITLE_RIGHT}
        src="redesign/blue_screen_image.svg"
        alt="computer on a search homepage"
      />
      <h2 className={SECONDARY_TITLE}> Project Series </h2>
      <p className={SECONDARY_TITLE}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
        <a
          className={SECONDARY_TITLE}
          href="https://www.google.com"
          target="_blank"
        >
          {" "}
          Learn More ⮕{" "}
        </a>
      </p>
    </div>
  );
}
