import React from "react";
import "../../redesign/index.css";

const style = {
  height: "100vh",
  backgroundColor: "#ddd",
  padding: "20px 10px 10px",
  textAlign: "center"
};

export default function Coders_SB(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const MAIN_TITLE = "main_title";
  const MAIN_TITLE_LOGO = "main_title_logo";
  const MAIN_TITLE_COVER = "main_title_cover";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <img
        className={MAIN_TITLE_LOGO}
        src="redesign/logo.svg"
        alt="blue coders sb logo"
      />
      <img
        className={MAIN_TITLE_COVER}
        src="redesign/landing_page_image.svg"
        alt="computer on a search homepage"
      />
      <h1 className={MAIN_TITLE}>Coders SB</h1>
      <p className={MAIN_TITLE}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <button className={MAIN_TITLE}>Join Us</button>
    </div>
  );
}
