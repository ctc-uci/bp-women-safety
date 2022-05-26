import React from 'react';
import PropTypes from 'prop-types';
import './Card.module.css';

function Card({ title, text, link, img }) {
  return (
    <a id="card" href={link}>
      <div id="imgHolder">
        <img src={img} alt="" />
      </div>
      <div id="textArea">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </a>
  );
}

Card.defaultProps = {
  title: '',
  text: '',
  link: '',
  img: '',
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.element,
};

export default Card;
