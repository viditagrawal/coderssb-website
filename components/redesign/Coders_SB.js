import React from "react";
import "../../redesign/index.css";

const style = {
  height: "100vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px",
  textAlign: "center"
};

export default function Coders_SB(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const MAIN_TITLE = "main_title";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <div class="container">
        <div>
          <img
            className={MAIN_TITLE}
            src="redesign/logo.svg"
            alt="blue coders sb logo"
          />
        </div>
      </div>

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
