import React from "react";
import "../../redesign/index.css";

const style = {
  height: "100vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px"
};

export default function Upcoming_Events(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <h1 className={"secondary_title"}>Upcoming Events</h1>
    </div>
  );
}
