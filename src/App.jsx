import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainPage from './mainPage/MainPage'
import './App.css'



const App = () => {
  return (
  <>

  <div  className='headerConatiner'>
    <h1 style={{textAlign:"center"}}>
        Hair Product
    </h1>
    <h5 style={{textAlign:"center"}}>Indulge In Our Exclusive Offer & Reignite Your Love Affair With Your Locks.</h5>
  </div>

  <div >
        
        <MainPage/>
        
    
        
  </div>
  

 



  
  </>
  )
}

export default App
