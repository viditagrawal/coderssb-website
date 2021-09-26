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

  const GOOGLE_SVG = "redesign/companies/google.svg";
  const FACEBOOK_SVG = "redesign/companies/facebook.svg";
  const AMAZON_SVG = "redesign/companies/amazon.svg";
  const GITHUB_SVG = "redesign/companies/github.svg";

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
        <div className={COMPANIES_CONTAINER}>
          <img src={GOOGLE_SVG} style={resize_img} />
          <img src={FACEBOOK_SVG} style={resize_img} />
          <img src={AMAZON_SVG} style={resize_img} />
          <img src={GITHUB_SVG} style={resize_img} />
        </div>
      </div>
    </div>
  );
}
