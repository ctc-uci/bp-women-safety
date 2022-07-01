import React from 'react';
import IntroSection from '../../components/IntroSection/IntroSection';
import freshHub from '../../images/FreshHubPic.jpg';
import styles from './FreshHub.module.css';
import resources from './resources';
import resourceServices from './resourceServices';

const FreshHub = () => {
  const title = 'Fresh Hub';
  const desc =
    'FRESH Basic Needs Hub is a student-initiated effort that promotes equitable access to basic needs through student empowerment, community collaboration, and institutional integration.';
  const link = 'https://basicneeds.uci.edu/';

  const resourceCols = resources.map(resourceInfo => (
    <div key={resourceInfo.key} className={styles.col}>
      <img src={resourceInfo.src} alt={resourceInfo.alt} />
      <div className={styles.subtitle}>{resourceInfo.title}</div>
      <div className={styles.subdesc}>{resourceInfo.description}</div>
      <div className={styles.discover}>Discover</div>
    </div>
  ));

  const resourceServicesCols = resourceServices.map(resourceInfo => (
    <div key={resourceInfo.key} className={styles.colCard}>
      <img src={resourceInfo.src} alt={resourceInfo.alt} />
      <div className={styles.cardTitle}>{resourceInfo.title}</div>
      <div className={styles.cardDesc}>{resourceInfo.description}</div>
    </div>
  ));

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

        <div className={styles.columns}>{resourceCols}</div>
      </div>
      <div className={styles['fresh-hub-resources-main']}>
        <div className={styles.header}>
          <div className={styles.title}>Resources & Services</div>
        </div>
        <div className={styles.columns}>{resourceServicesCols}</div>
      </div>
    </>
  );
};

export default FreshHub;
