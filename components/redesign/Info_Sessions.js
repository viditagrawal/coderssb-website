import React from "react";
import "../../redesign/index.css";

const style = {
  height: "110vh",
  backgroundColor: "#ddd"
};

export default function Info_Sessions(props) {
  const cardStyle = { ...style };
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
    </div>
  );
}
