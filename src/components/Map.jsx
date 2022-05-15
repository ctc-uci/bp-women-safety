import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Search from './Search';
import MapButton from './MapButton';

import tempmap from '../images/temp_map.png';
import './Map.css';

function Map() {
  return (
    <>
      <div className="overlay">
        <Container>
          <Row className="elements">
            <div className="search">
              <Search />
            </div>
            <div className="mapbutton">
              <MapButton name="Emergency Poles" />
              <MapButton name="Hotlines" />
              <MapButton name="Gender Inclusive Restrooms" />
              <MapButton name="Free Menstruel Products" />
              <MapButton name="Lactation Rooms" />
            </div>
          </Row>
        </Container>
      </div>
      {/* <iframe className="imap" src="https://map.uci.edu/?id=463#!ct/52435?mc/33.6460817723824,-117.8388833999634?z/16?lvl/0" title="Map" /> */}
      <img className="map" src={tempmap} alt="Map" />
    </>
  );
}

export default Map;
