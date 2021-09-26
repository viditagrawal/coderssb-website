import React from "react";
import "../../redesign/index.css";

const style_container = {
  height: "100vh",
  backgroundColor: "#ddd",
  padding: "20px 10px  10px 10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
};

const style_title = {
  display: "flex",
  flexDirection: "column"
};

export default function Resources(props) {
  const cardStyle = { ...style_container };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const RESOURCES = "resources";
  const RESOURCES_RIGHT = "resources_right";

  return (
    <div id={`#card${props.id}`} style={cardStyle}>
      <div style={style_title}>
        <h2 className={RESOURCES}> Resources </h2>
        <p className={RESOURCES}>
          Here are some resources to learn more  about computer science research on campus,
          applying to internships, preparing for interviews, hackathons on campus, and some
          links to popular tech stacks. Read more about each and find what excites you!
         <br />
          <br />
          <a className={RESOURCES} href="https://www.google.com">
            Learn More ⮕
        </a>
        </p>
      </div>
      <img
        className={RESOURCES_RIGHT}
        src="redesign/resources_image.svg"
        alt="computer on a search homepage"
      />

    </div>
  );
}
