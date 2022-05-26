import React from 'react';
import Map from '../components/Map';
import ResourceCard from '../components/ResourceCard.jsx';
import './Home.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import cardimg1 from '../images/WomxnCenterPic.jpg'
import cardimg2 from '../images/FreshHubPic.jpg'
import cardimg3 from '../images/BlueLight.jpg'

const cardlink1 = "https://womxnscenter.uci.edu/"
const cardlink2 = "https://basicneeds.uci.edu/"
const cardlink3 = "https://www.police.uci.edu/how-do-i/_brochures/bluelight_phones.pdf"

const cardtxt1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."
const cardtxt2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."
const cardtxt3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur enim fringilla volutpat in. Nam volutpat leo rhoncus facilisi amet ante. Nibh elit massa pellentesque."


const Home = () => {
  return (
    <div className="Home">
      <div className="MapBody">
        <Map />
      </div>
      <div className="cardBody">
        <h1>Featured Resources</h1>
        <Container>
        <Row>
          <div className="row">
            <div className="col1">
              <ResourceCard link={cardlink1} img={cardimg1} title="Womxn&apos;s Center for Success" txt={cardtxt1}/>
            </div>
            <div className="col2">
              <ResourceCard link={cardlink2} img={cardimg2} title="Fresh Hub" txt={cardtxt2}/>
            </div>
            <div className="col3">
              <ResourceCard link={cardlink3} img={cardimg3} title="Emergency Poles" txt={cardtxt3}/>
            </div>
          </div>
        </Row>
        </Container>
      </div>

    </div>
  );
};

export default Home;
