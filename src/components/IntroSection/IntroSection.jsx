import React from 'react';
import styles from './IntroSection.module.css';
import '../../common/vars.css';
import freshHub from '../../images/FreshHubPic.jpg';

const IntroSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <div className={styles.title}>Fresh Hub</div>
        <div className={styles.desc}>
          FRESH Basic Needs Hub is a student-initiated effort that promotes equitable access to
          basic needs through student empowerment, community collaboration, and institutional
          integration.
        </div>
        <a href="https://basicneeds.uci.edu/" target="_blank" rel="noreferrer">
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
      <img src={freshHub} alt="" className={styles['display-img']} />
    </div>
  );
};

export default IntroSection;
