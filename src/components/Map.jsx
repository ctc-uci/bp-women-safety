import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Search from './Search';
import MapButton from './MapButton';

import tempmap from '../images/temp_map.png';
import './Map.css';
import homepic from '../images/homepagepic.png'

function Map() {
  return (
    <>
      <div className="overlay">

      </div>

      <img className="map" src={homepic} alt="Map" />
    </>
  );
}

export default Map;
