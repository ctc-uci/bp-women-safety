import tempmap from '../images/temp_map.png';
import Search from '../components/Search';
import MapButton from './MapButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Map.css';

function Map() {
  return (
    <>
      <div className="overlay">
        <Container>
          <Row>
            <Search />
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
      <img classname="map" src={tempmap} alt="Map" />
    </>
  );
}

export default Map;
