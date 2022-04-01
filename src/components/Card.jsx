import React from 'react';
import './Card.css';
function Card(props) {
  return (
    <a id="card" href={props.link}>
      <div>
        <img src={props.img} />
      </div>
      <div id='textArea'>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
    </a>
  );
}

export default Card;
