import React from 'react';
import Footer from './components/Footer.jsx'
import Map from './components/Map.jsx'
import Search from './components/Search.jsx'
import MapButton from './components/Map-Button.jsx'
import Feature from './components/Feature.jsx'
import BrandName from './components/BrandName.jsx'

import './App.css';
import tempmap from "./images/temp_map.png";


function App() {
  return (
    <div className="App">
      <Search />
      <MapButton name="Emergency Poles"/>
      <MapButton name="Hotlines"/>
      <MapButton name="Gender Inclusive Restrooms"/>
      <MapButton name="Free Menstruel Products"/>
      <MapButton name="Lactation Rooms"/>

      <Map />
      <Feature />
      <Footer />
      <BrandName />
    </div>
  );
}

export default App;
