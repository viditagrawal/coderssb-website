import React from "react";
import "../../redesign/index.css";

const style = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#ddd",
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
  const LINKTREE = "https://linktr.ee/codersSB";

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
        Welcome to Coders SB! Coders SB provides an environment where students can have fun building cool stuff with their peers, improving both their programming and collaboration skills. Come to our next meeting to join to get started!
      </p>
      <button className={MAIN_TITLE} onClick={() => open(LINKTREE)}>Join Us</button>
    </div>
  );
}
