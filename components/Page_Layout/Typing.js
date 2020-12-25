import React from "react";
import Typical from "react-typical";
import "../../css/TypingStyle.css";

const typing_text_interval_ms = 4000;
const source = "Background/rfilm/8_wide_blur.png";
const missing_source = "logo.png";

export default function Typing() {
  return (
    <div className="typingParentDiv">
      <img
        src={source}
        className="w3-round w3-image w3-opacity-min"
        alt={missing_source}
        width="100%"
      />
      <h1 className="typing">
        <Typical
          steps={[
            "Company Events 👥 ",
            typing_text_interval_ms,
            "Tech Workshops 💻 ",
            typing_text_interval_ms,
            "Networking Opportunities 👥 ",
            typing_text_interval_ms,
            "Join our project series 🏆 ",
            typing_text_interval_ms,
            "Over 800 Facebook Members 📈",
            typing_text_interval_ms
          ]}
          loop={Infinity}
        />
      </h1>
    </div>
  );
}
