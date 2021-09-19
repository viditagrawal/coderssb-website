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

  const LINKTREE = "https://linktr.ee/codersSB"; /* temporary */

  return (
    <div style={cardStyle}>
      <Card url={LINKTREE} pic={INSTAGRAM_SVG} />
      <Card url={LINKTREE} pic={FACEBOOK_SVG} />
      <Card url={LINKTREE} pic={DISCORD_SVG} />
      <Card url={LINKTREE} pic={EMAIL_SVG} />
    </div>
  );
}
