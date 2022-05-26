import React from 'react';
import Footer from './components/Footer';
import Map from './components/Map';
import Feature from './components/Feature';
import BrandName from './components/BrandName';
import AboutSection from './components/IntroSection/IntroSection';

import './App.css';
// import tempmap from './images/temp_map.png';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <p>epic navbar</p>
      </div>
      <AboutSection />
      <div className="MapBody">
        <Map />
      </div>

      <Feature />

      <div className="Footer">
        <Footer />
        <BrandName />
      </div>
    </div>
  );
}

export default App;
