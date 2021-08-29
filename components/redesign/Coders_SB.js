import React from "react";
import "../../redesign/index.css";

const style = {
  height: "100vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px"
};

export default function Card(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <h1 className={"main_title"}>Coders SB</h1>
    </div>
  );
}
