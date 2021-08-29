import "../../redesign/index.css";

export default function Card(props) {
  const UPCOMING_EVENTS = "upcoming_events";

  return (
    <figure onClick={() => {}}>
      <img src={props.pic} />
      <h3 className={UPCOMING_EVENTS}>{props.title}</h3>
      <p className={UPCOMING_EVENTS}>{props.info}</p>
    </figure>
  );
}
