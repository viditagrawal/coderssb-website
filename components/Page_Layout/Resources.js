import React from "react"
import resourceData from "../../utils/resourcelist"


function NewResource(props) {

    const listOfLinks = []
    for (const [index, value] of props.resource.links.entries()) {
        listOfLinks.push(<li key={index}><a href = {value}>{value}</a></li>)
      }
    
    return (
        <div>
            <h3>{props.resource.name}</h3 >
            <p>{props.resource.description}</p>
            {listOfLinks}
            <br/>
        </div>
    )
}

export default function Resources() {
    const resourceList = resourceData.map(item => <NewResource key={item.id} resource={item}/>)
    
    return (
        <div className="w3-container w3-padding-64">
            <h1> Coding Resources</h1>
            <p> Here are some resources that can help you learn a new programming skill. We also have tips on preparing for coding interviews, contacting professors, applying to internships, and more!</p>
            {resourceList}
        </div>
    )
}