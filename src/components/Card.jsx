import React from "react";
import '../styles/Card.css';
const loc = 'https://img.icons8.com/ios-filled/50/FA5252/map-marker.png';
const google = 'View on Google Maps'

function Card(props) {
  console.log(props)
  return (
    <div className="cardMain--Div">
      <img src={props.imageUrl} />
      <div className="card--Info">
        <div className="info--Prin">
          <img src={loc}/>
          <h3>{props.location}</h3>
          <a href={props.googleMapsUrl}>{google}</a>
        </div>
        <h1 className="card-Title">{props.title}</h1>
        <h3 className="card-Date">{props.startDate} - {props.endDate}</h3>
        <p className="card--Desc">{props.description}</p>
      </div>
    </div>
  )
}

export default Card;