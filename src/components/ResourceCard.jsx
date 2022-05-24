import React from 'react';
import Card from 'react-bootstrap/Card';
import './ResourceCard.css';

function ResourceCard(props) {
  return (
    <>
    <Card  onClick={props.link} style={{ height: '18rem', width:'15rem' , cursor: "pointer"}} border="light" as='a'>
    <Card.Img  style={{ height: '13rem' }} variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title style={{ fontSize: "12px" }}>
         {props.title}
        </Card.Title>
        <Card.Text style={{ fontSize: "11px" }}>{props.txt}</Card.Text>
      </Card.Body>
    </Card>
    </>
    );
  }

  export default ResourceCard;
