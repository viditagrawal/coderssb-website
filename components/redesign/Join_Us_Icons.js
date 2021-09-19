import React from "react";
import "../../redesign/index.css";
import Card from "./Card";

const style = {
  display: "flex",
  flexDirection: "row",
  alignContent: "flex-start",
  backgroundColor: "#ddd"
};

export default function Join_Us_Icons(props) {
  const cardStyle = { ...style };
  if (props.bgcolor) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  const INSTAGRAM_SVG = "redesign/social_icons/instagram.svg";
  const FACEBOOK_SVG = "redesign/social_icons/facebook.svg";
  const DISCORD_SVG = "redesign/social_icons/discord.svg";
  const EMAIL_SVG = "redesign/social_icons/email.svg";
  const INSTAGRAM = "https://www.instagram.com/coders.sb/?hl=en";
  const FACEBOOK = "https://www.facebook.com/coderssb/";
  const EMAIL =
    "https://mail.google.com/mail/?view=cm&source=mailto&to=coderssb@gmail.com";
  const DISCORD = "https://discord.com/invite/bW69w4QsS6";

  return (
    <div style={cardStyle}>
      <Card url={INSTAGRAM} pic={INSTAGRAM_SVG} />
      <Card url={FACEBOOK} pic={FACEBOOK_SVG} />
      <Card url={DISCORD} pic={DISCORD_SVG} />
      <Card url={EMAIL} pic={EMAIL_SVG} />
    </div>
  );
}
