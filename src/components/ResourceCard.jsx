import React from 'react';
import './Card.css';
import Card from 'react-bootstrap/Card'
function ResourceCard(props) {
  return (
    <>
    <Card  onClick={props.link} style={{ height: '18rem', width:'15rem' , cursor: "pointer"}} border="light" as='a'>
    <Card.Img  style={{ height: '13rem' }} varient="top" src={props.img}/>
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
