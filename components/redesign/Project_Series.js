import React from "react";
import "../../redesign/index.css";


const style_container = {
  height: "110vh",
  backgroundColor: "#ddd",
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
};

const style_title = {
  display: "flex",
  flexDirection: "column"
};


export default function Project_Series(props) {
  const cardStyle = { ...style_container };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const PROJECT_SERIES = "project_series";
  const PROJECT_SERIES_RIGHT = "project_series_right";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <img
        className={PROJECT_SERIES_RIGHT}
        src="redesign/blue_screen_image.svg"
        alt="computer on a search homepage"
      />
      <div style={style_title}><h2 className={PROJECT_SERIES}> Project Series </h2>
        <p className={PROJECT_SERIES}>
          In our project series you will work with a team of up to four to create a full stack web application using React, the industry standard for building user interfaces. We will have prizes and awards at the end of each quarter!
        <br />
          <br />
          <a className={PROJECT_SERIES} href="https://forms.gle/D1QskDhdzznWu6i1A">
            {" "}
            Apply Now ⮕{" "}
          </a>
        </p> </div>

    </div>
  );
}
