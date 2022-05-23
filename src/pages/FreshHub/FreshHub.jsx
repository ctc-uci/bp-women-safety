import React from 'react';
import IntroSection from '../../components/IntroSection/IntroSection';
import freshHub from '../../images/FreshHubPic.jpg';
import styles from './FreshHub.module.css';

const FreshHub = () => {
  const title = 'Fresh Hub';
  const desc =
    'FRESH Basic Needs Hub is a student-initiated effort that promotes equitable access to basic needs through student empowerment, community collaboration, and institutional integration.';
  const link = 'https://basicneeds.uci.edu/';

  return (
    <>
      <IntroSection title={title} desc={desc} img={freshHub} link={link} />
      <div className={styles['fresh-hub-resources-main']}>
        <div className={styles.header}>
          <div className={styles.title}>What is Fresh Hub?</div>
          <div className={styles.desc}>
            FRESH offers services to UCI students to help them meet their basic needs, including
            food pantry visits, CalFresh application assistance, and consultations with our social
            worker.
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <div className={styles.subtitle}>UCI Food Pantry</div>
            <div className={styles.subdesc}>
              The UCI Food Pantry housed at FRESH provides emergency food and toiletries to UCI
              students experiencing basic needs insecurities. Students can access once a week using
              Student ID card at the check-in station.
            </div>
            <div className={styles.discover}>Discover</div>
          </div>
          <div className={styles.col}>
            <div className={styles.subtitle}>CalFresh Application Assistance</div>
            <div className={styles.subdesc}>
              CalFresh is a federal nutrition assistance program that helps people purchase healthy
              foods at most grocery stores and farmers markets. Students can receive up to $250 per
              month. FRESH offers 1-1 CalFresh application assistance appointments via Zoom.
            </div>
            <div className={styles.discover}>Discover</div>
          </div>
          <div className={styles.col}>
            <div className={styles.subtitle}>Campus Social Worker Consultations</div>
            <div className={styles.subdesc}>
              Confidential in-person or Zoom appointments with our on-campus clinical social worker
              to provide support and guidance to students experiencing financial stress and/or
              food/housing insecurity. All students are eligible.
            </div>
            <div className={styles.discover}>Discover</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreshHub;
