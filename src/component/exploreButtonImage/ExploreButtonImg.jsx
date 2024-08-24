import React from 'react'
import styles from './ExploreButton.module.css'
const ExploreButtonImg = () => {
  return (
    <div className='container'>
        
        <div className={styles.backgroundContainer}>
      <div className={styles.blurOverlay}>
        <button className={styles.button}>Explore</button>
      </div>
    </div>
    </div>
  )
}

export default ExploreButtonImg
