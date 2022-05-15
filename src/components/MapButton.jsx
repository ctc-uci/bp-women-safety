import React from 'react';
import './MapButton.css';

function MapButton(props) {
  return(
        <button id="mapbutton" type="button">
          {props.name}
        </button>
        );
}

export default MapButton;
