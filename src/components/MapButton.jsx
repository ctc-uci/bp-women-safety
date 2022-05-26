import React from 'react';
import PropTypes from 'prop-types';
import './MapButton.css';

function MapButton({ name }) {
  return (
    <button id="mapbutton" type="button">
      {name}
    </button>
  );
}

MapButton.defaultProps = {
  name: '',
};

MapButton.propTypes = {
  name: PropTypes.string,
};

export default MapButton;
