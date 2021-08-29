import React from "react";
import "../../redesign/index.css";

const style = {
  height: "110vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px"
};

export default function Project_Series(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const PROJECT_SERIES = "project_series";
  const PROJECT_SERIES_RIGHT = "project_series_right";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <h1 className={PROJECT_SERIES}>Here's What We Do</h1>
      <img
        className={PROJECT_SERIES_RIGHT}
        src="redesign/blue_screen_image.svg"
        alt="computer on a search homepage"
      />
      <h2 className={PROJECT_SERIES}> Project Series </h2>
      <p className={PROJECT_SERIES}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
        <br />
        <br />
        <a className={PROJECT_SERIES} href="https://www.google.com">
          {" "}
          Learn More ⮕{" "}
        </a>
      </p>
    </div>
  );
}
