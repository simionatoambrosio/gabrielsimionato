import React from 'react'
import './Project.css'

function Project(props) {
    return (
        <div className='project-card'>
            <img src={props.image} alt={props.name}></img>
            <div className='project-header'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>
                    Webpage Link: <a href={`https://` + `${props.webpagelink}`} target="_blank"> {props.webpagelink}</a>
                </p>
                <p>
                    GitHub Link: <a href={`https://` + `${props.gitlink}`} target="_blank"> {props.gitlink}</a>
                </p>
            </div>
        </div>
    )
}

export default Project