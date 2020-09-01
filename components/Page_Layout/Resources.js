import React from "react"
import resourceData from "../../public/ResourceList"


function NewResource(props) {

    const listOfLinks = []

    for (const [index, value] of props.resource.links.entries()) {
        listOfLinks.push(<li key={index}><a href = {value}>{value}</a></li>)
      }
    


    return (
        <div>
            <h2>{props.resource.name}</h2 >
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
            <h1>Resources</h1>
            <br/>
            <p> Here are some resources that can help you get started learning a new programming skill!</p>
            {resourceList}
        </div>
    )
}





