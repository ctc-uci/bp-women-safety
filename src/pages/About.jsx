import React from 'react';
import ReactDOM from 'react-dom';

import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aboutpic from '../images/aboutpic.PNG';
import person1 from '../images/jaq.PNG';
import person2 from '../images/joj.PNG';
import person3 from '../images/ron.PNG';
import person4 from '../images/tig.PNG';
import person5 from '../images/rah.PNG';

const About = () => {
return (
  <>
    <div className="top">
      <p className='font2'>ABOUT US</p>
      <p className="big">Making campus resources more<br></br> accessible and easily digestible</p>
    </div>
    <div className="statement">
      <Row>

        <Col>
        <div className="a">
          <p className="bold">
            OUR MISSION
          </p>
          <h3>Discover. Learn. Share.</h3>
          <p>
            We believe we can make UCI campus resources more discoverable for students
            so that they can have all the resources they need to be successful in their
            personal and professional lives.
          </p>
          </div>
          </Col>
          <Col>
          <img className="pic" src={aboutpic} style={{height: "400px", width: "400px"}}/>
          </Col>

        </Row>
      </div>
      <div className="center">
        <p className="bigLess">Meet the minds behind DubHub</p>
        <p className="quote">Inspired by students. Designed to discover.</p>
      </div>
      <div className="cards">
        <Container>
          <Row>
            <div className="card">
            <div className="card1">
              <img className="person" src={person1}></img>
              <p className="name">Jacqueline Le</p>
              <p className="title">Product Designer & User Researcher</p>
            </div>
            </div>
            <div className="card">
            <div className="card2">
              <img className="person" src={person2}></img>
              <p className="name">Joshua Montellano</p>
              <p className="title">Developer</p>
            </div>
            </div>
            <div className="card">
              <img className="person" src={person3}></img>
              <p className="name">Rong Mu</p>
              <p className="title">Developer</p>
            </div>
          </Row>
          <Row>
            <div className="card">
            <div className="card4">
              <img className="person" src={person4}></img>
              <p className="name">Rayan Tighiouart</p>
              <p className="title">Developer</p>
            </div>
            </div>
            <div className="card">
            <div className="card5">
              <img className="person" src={person5}></img>
              <p className="name">Rachel Villamor</p>
              <p className="title">Developer</p>
            </div>
            </div>
          </Row>
        </Container>
      </div>
  </>
);
}


export default About;
