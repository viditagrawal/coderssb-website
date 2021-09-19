import React from "react";
import Card from "./Card";
import "../../redesign/index.css";

const style = {
  height: "45vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ddd"
};

export default function Companies(props) {
  const COMPANIES_SVG = "redesign/companies.svg";

  const GOOGLE_SVG = "redesign/companies/google.svg";
  const FACEBOOK_SVG = "redesign/companies/facebook.svg";
  const AMAZON_SVG = "redesign/companies/amazon.svg";
  const GITHUB_SVG = "redesign/companies/github.svg";

  // same format as upcoming event for title
  const COMPANIES = "companies";
  const COMPANIES_CONTAINER = "companies_container";

  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }
  return (
    <div>
      <hr />
      <div style={cardStyle}>
        <h2 className={COMPANIES}>Companies We've Worked With</h2>
        <p className={COMPANIES}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.{" "}
        </p>
        {/* <img src={COMPANIES_SVG} className={COMPANIES} /> */}
        <div className={COMPANIES_CONTAINER}>
          <img src={GOOGLE_SVG} />
          <img src={FACEBOOK_SVG} />
          <img src={AMAZON_SVG} />
          <img src={GITHUB_SVG} />
        </div>
      </div>
    </div>
  );
}
