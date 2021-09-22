import "../../css/FutureEventCardStyle.css";
import "../../redesign/index.css";

export default function FutureEventCard(props) {
  return (
    <div className="card">
      <div>
        <a href={props.website} target="_blank">
          <img className="first" src={props.imgUrl} alt={props.altImgUrl} />
          <div className="overlay">
            <h5 className="paragraph-text"> {props.when} </h5>
            <h5 className="paragraph-text"> {props.info} </h5>
          </div>
        </a>
      </div>
    </div> 
  );
}
