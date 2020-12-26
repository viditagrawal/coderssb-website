import React from "react";
import resourceData from "../../utils/resources";
import "../../css/index.css"

function NewResource(props) {
  const listOfLinks = [];
  for (const [index, value] of props.resource.links.entries()) {
    listOfLinks.push(
      <li key={index}>
        <a href={value} target="_blank" className="link">
          {value}
        </a>
      </li>
    );
  }

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div
        style={{
          display: "inline-block",
          float: "left",
          width: "8%",
          marginTop: 30,
          marginRight: 25
        }}
      >
        <img
          src={props.resource.image}
          alt="resource image"
          className="w3-round w3-image w3-opacity-min"
          width="80"
          height="80"
        />
      </div>
      <div style={{ display: "inline-block", float: "left", width: "80%" }}>
        <h2 className="h2">{props.resource.name}</h2>
        <p className="paragraph-text">{props.resource.description}</p>
        {listOfLinks}
      </div>
      <br />
    </div>
  );
}

export default function Resources() {
  const resourceList = resourceData.map(item => (
    <NewResource key={item.id} resource={item} />
  ));

  return <div className="paragraphText">{resourceList}</div>;
}
