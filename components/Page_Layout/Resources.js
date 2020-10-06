import React from "react"
import resourceData from "../../utils/resourcelist"


function NewResource(props) {

    const listOfLinks = []
    for (const [index, value] of props.resource.links.entries()) {
        listOfLinks.push(<li key={index}><a href = {value} target="_blank" style={{color:"#0000EE"}}>{value}</a></li>)  
      }
    
    return (
        <div style={{padding: 0, margin: 0}}>
            <div style={{display: "inline-block", float: "left",  width: "10%", marginTop: 30, marginRight: 30}}>
                <img 
                    src = {props.resource.image}
                    alt="resource image"
                    className="w3-round w3-image w3-opacity-min"
                    width="200"
                    height="200"
                />
            </div>
            <div style= {{display: "inline-block", float: "left", width: "80%"}}>
                <h2>{props.resource.name}</h2 >
                <p>{props.resource.description}</p>
                {listOfLinks}
            </div>
            <br/>
        </div>
    )
}

export default function Resources() {
    const resourceList = resourceData.map(item => <NewResource key={item.id} resource={item}/>)
    
    return (
        <div>
            <h3> Here are some great resources to help you contact professors for research, learn programming skills, apply to internships, and more!</h3>
            <br/>
            <br/>
            {resourceList}
        </div>
    )
}