import React from "react";
import PropTypes from "prop-types";

const style = {
  height: "100vh",
  backgroundColor: "#ddd",
  padding: "20px 10px 10px 10px"
};

export default function Card(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const cardAboveID = props.id - 1;
  const cardBelowID = props.id + 1;

  const shouldDisplayUpButton =
    document.getElementById(`#card${cardAboveID}`) != null;
  const shouldDisplayDownButton =
    document.getElementById(`#card${cardBelowID}`) != null;

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <h1>
        <br />
        {props.title}
      </h1>
      {shouldDisplayUpButton && (
        <button
          onClick={() => {
            document.getElementById(`#card${cardAboveID}`).scrollIntoView();
          }}
        >
          Up
        </button>
      )}
      {shouldDisplayDownButton && (
        <button
          onClick={() => {
            document.getElementById(`#card${cardBelowID}`).scrollIntoView();
          }}
        >
          Down
        </button>
      )}
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  buttonConfiguration: PropTypes.string
};
