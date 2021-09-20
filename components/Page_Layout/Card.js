export default function EventCard(props) {
  function open(url) {
    window.open(url);
  }

  return (
    <figure onClick={() => open(props.url)}>
      <img src={props.pic} />
      <h3 className="eventCard">{props.title}</h3>
      <p className="eventCard">{props.info}</p>
    </figure>
  );
}
