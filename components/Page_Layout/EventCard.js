export default function EventCard(props) {
  function open(url) {
    window.open(url);
  }

  return (
    <figure onClick={() => open(props.url)}>
      <img src={props.pic} />
      <figcaption>{props.info}</figcaption>
    </figure>
  );
}
