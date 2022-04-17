import React from 'react';
import Map from '../components/Map';
import Feature from '../components/Feature';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="MapBody">
        <Map />
      </div>
      <Feature />
    </div>
  );
};

export default Home;
