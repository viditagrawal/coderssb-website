import Typical from "react-typical";
import "../../css/TypingStyle.css";

const typing_text_interval_ms = 4000;

export default function Typing() {
  return (
    <div>
      <h1 className="typing">
        <Typical
          steps={[
            "Company Events 👥",
            typing_text_interval_ms,
            "Tech Workshops 💻",
            typing_text_interval_ms,
            "Networking Opportunities 🚀 ",
            typing_text_interval_ms,
            "Apply to be an officer! ✉️"
          ]}
          loop={Infinity}
        />
      </h1>
    </div>
  );
}
