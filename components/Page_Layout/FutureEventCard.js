import "../../css/FutureEventCardStyle.css";

export default function FutureEventCard(props) {
  return (
    <div className="card">
      <center>
        <h3> {props.name} </h3>
      </center>
      <img className="first" src={props.imgUrl} />
      <a href={props.website}>
        <div className="overlay">
          <h5> {props.when} </h5>
          <h5> {props.info} </h5>
        </div>
      </a>
    </div>
  );
}
