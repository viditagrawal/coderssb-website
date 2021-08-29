import React from "react";
import "../../redesign/index.css";

const style = {
  height: "110vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px"
};

export default function Info_Sessions(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <h1 className={"secondary_title"}>Info Sessions</h1>
    </div>
  );
}
