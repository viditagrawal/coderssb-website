import React from "react";
import "../../redesign/index.css";

const style_container = {
  height: "100vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px",
  display: "flex",
  flexDirection: "row"
};

const style_title = {
  display: "flex",
  flexDirection: "column"
};

export default function Info_Sessions(props) {
  const cardStyle = { ...style_container };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const INFO_SESSIONS = "info_sessions";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>

      <img
        className={INFO_SESSIONS}
        src="redesign/white_logo_design.svg"
        alt="computer on a search homepage"
      />

      <div style={style_title}> <h2 className={INFO_SESSIONS}> Info Sessions </h2>
        <p className={INFO_SESSIONS}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation.
        <br />
          <br />
          <a className={INFO_SESSIONS} href="https://www.google.com">
            Learn More ⮕{" "}
          </a>
        </p></div>

    </div>
  );
}
