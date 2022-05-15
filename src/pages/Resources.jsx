import React from 'react';
import ReactDOM from 'react-dom';

import './Resources.css';
import ResourceCard from '../components/ResourceCard.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cardimg1 from '../images/WomxnCenterPic.jpg'
import cardimg2 from '../images/FreshHubPic.jpg'
import cardimg3 from '../images/BlueLight.jpg'
import cardimg4 from "../images/image.PNG"
import cardimg5 from "../images/image.PNG"
import cardimg6 from "../images/image.PNG"
import cardimg7 from "../images/image.PNG"



const cardlink1 = "https://womxnscenter.uci.edu/"
const cardlink2 = "https://basicneeds.uci.edu/"
const cardlink3 = "https://www.police.uci.edu/how-do-i/_brochures/bluelight_phones.pdf"
const cardlink4 = "https://care.uci.edu/"
const cardlink5 = "https://www.police.uci.edu/how-do-i/safety-escort.php"
const cardlink6 = "https://counseling.uci.edu/"
const cardlink7 = "#"

const cardtxt1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."
const cardtxt2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."
const cardtxt3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."
const cardtxt4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."
const cardtxt5 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."
const cardtxt6 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."
const cardtxt7 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."



const Resources = () => {
  return (
  <>
  <div className="mainpage">
  <h1 className="title">Resources</h1>
  <div className="Cards">
  <Container>
      <Row>
        <ResourceCard link={cardlink1} img={cardimg1} title="Womxn&apos;s Center for Success" txt={cardtxt1}/>
        <ResourceCard link={cardlink2} img={cardimg2} title="Fresh Hub" txt={cardtxt2}/>
        <ResourceCard link={cardlink3} img={cardimg3} title="Emergency Poles" txt={cardtxt3}/>
      </Row>
      <Row>
        <ResourceCard link={cardlink4} img={cardimg4} title="Abuse Assistance" txt={cardtxt4}/>
        <ResourceCard link={cardlink5} img={cardimg5} title="Safety Escorts" txt={cardtxt5}/>
        <ResourceCard link={cardlink6} img={cardimg6} title="Counseling Center" txt={cardtxt6}/>
      </Row>
      <Row>
        <ResourceCard link={cardlink7} img={cardimg7} title="Hotlines" txt={cardtxt7}/>
      </Row>
    </Container>
  </div>
  <p>Can&apos;t find the resource you&apos;re looking for? </p>
  <div className="center">
    <a href="#">Learn more →</a>
  </div>
  {/*<Link to="./About">Find out more</Link>*/}
  </div>

  </>
  );
};

export default Resources;
