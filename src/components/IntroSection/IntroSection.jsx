import React from 'react';
import PropTypes from 'prop-types';
import styles from './IntroSection.module.css';
import '../../common/vars.css';

const IntroSection = ({ title, desc, link, img }) => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
        <a href={link} target="_blank" rel="noreferrer" className={styles['learn-more']}>
          <span>Learn more</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8334 4.16675L16.6667 10.0001L10.8334 15.8334M3.33337 10.0001H16.6667H3.33337Z"
              stroke="#5B15CB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <img src={img} alt="" className={styles['display-img']} />
    </div>
  );
};

IntroSection.defaultProps = {
  title: '',
  desc: '',
  link: '',
  img: '',
};

IntroSection.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.element,
};

export default IntroSection;
