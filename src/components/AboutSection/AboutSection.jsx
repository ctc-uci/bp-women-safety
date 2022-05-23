import React from 'react';
import styles from './AboutSection.module.css';
import '../../common/vars.css';
import freshHub from '../../images/FreshHubPic.jpg';

const AboutSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <div className={styles.title}>Fresh Hub</div>
        <div className={styles.desc}>
          FRESH Basic Needs Hub is a student-initiated effort that promotes equitable access to
          basic needs through student empowerment, community collaboration, and institutional
          integration.
        </div>
        <div>Learn More</div>
      </div>

      <img src={freshHub} alt="" className={styles['display-img']} />
    </div>
  );
};

export default AboutSection;
