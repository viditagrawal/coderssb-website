import React from "react";
import officerData from "../../utils/officers";
import "../../css/index.css"

function NewOfficer(props) {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div className="w3-cell-row">
        <div className="w3-cell w3-cell-img">
          <div className="w3-cell imageBox">
            {/* <div class="hoverImg">
            <img
              src={props.officer.meme}
              alt="a meme"
              class="hoverImg"
            />
            </div> */}
            <div className="officerImg">
              <img
                src={props.officer.image}
                className="officerImg"
              />
            </div>
          </div>
        </div>
        <div className="w3-cell w3-cell-text w3-cell-top">
            <h3 className="h3-officer-name">{props.officer.name}</h3>
            <p className="p-officer-role">{props.officer.role}</p>
            <p className="p-officer-description">{props.officer.description}</p>
        </div>   
      </div>
      <br />
    </div>
  );
}

export default function Resources() {
  const officerList = officerData.map(item => (
    <NewOfficer key={item.id} officer={item} />
  ));

  return (
    <div>
      <div className="paragraphText">{officerList}</div>
    </div>
    
  );
}
