import React from 'react'
import styles from './CarourselItems.module.css'
import logo from '../../images/image 64 (1)[748].png'
import img1 from  '../../images/kerasmooth (1)_2[746].png'



const CarouselItems = () => {
  return (
    // <div className={styles.mainContainer}>

   
    <div className={ styles.itemsContainer}>
        <div className={styles.arrowItem}>
            <img src={logo} alt="Logo" />
        </div>
            <img src={img1} alt="mainImage" />
          
      
    </div>
    

  
  )
}

export default CarouselItems
