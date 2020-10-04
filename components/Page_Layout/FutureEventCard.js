import "../../css/FutureEventCardStyle.css";

export default function FutureEventCard(props) {
  return (
    <div className="card">
      <div>
        <a href={props.website} target="_blank">
          <img className="first" src={props.imgUrl} />

          <div className="overlay">
            <h5> {props.when} </h5>
            <h5> {props.info} </h5>
          </div>
        </a>
      </div>
    </div>
  );
}
