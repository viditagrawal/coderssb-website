import React from "react";
import Card from "./Card";
import "../../redesign/index.css";

const style = {
  height: "40vh",
  backgroundColor: "#ddd"
};

export default function Companies(props) {
  const COMPANIES_SVG = "redesign/companies.svg";

  const GOOGLE_SVG = "redesign/companies/google.svg";
  const FACEBOOK_SVG = "redesign/companies/facebook.svg";
  const AMAZON_SVG = "redesign/companies/amazon.svg";
  const GITHUB_SVG = "redesign/companies/github.svg";

  // same format as upcoming event for title
  const UPCOMING_EVENTS = "upcoming_events";
  const COMPANIES = "companies";
  const COMPANIES_CONTAINER = "companies_container";

  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }
  return (
    <div style={cardStyle}>
      <h2 className={UPCOMING_EVENTS}>Companies We've Worked With</h2>
      <p className={COMPANIES}>
        Here are a few of the companies that we've worked with. Coders SB
        frequently hosts company info sessions.{" "}
      </p>
      {/* <img src={COMPANIES_SVG} className={COMPANIES} /> */}

      <div className={COMPANIES_CONTAINER}>
        <img src={GOOGLE_SVG} />
        <img src={FACEBOOK_SVG} />
        <img src={AMAZON_SVG} />
        <img src={GITHUB_SVG} />
      </div>
    </div>
  );
}
