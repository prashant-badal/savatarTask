import React from 'react';
import styles from './BlurredBackground.module.css'; // Import CSS Module

const BlurredBackground = () => {
  return (
   <div className={styles.showHide}>

  
    <div className={styles.backgroundContainer}>
      <div className={styles.blurOverlay}>
        <button className={styles.button}>Explore</button>
      </div>
    </div>
    </div> 
  );
};

export default BlurredBackground;
