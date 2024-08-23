import React from 'react'
import Slider from 'react-slick';
import img1 from './images/shirt1.jpg';
import img2 from './images/shirt2.webp';
import img3 from './images/shirt3.webp'
import img4 from './images/shirt4.avif'
import img5 from './images/shirt5.jpeg'

const CourselSection = () => {
    

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
         speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true, 

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
      const images = [
        img1,img2,img4,img5,img3
      ];
      
    
      return (
        <div>
         
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} >
                <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '300px' }} />
              </div>
            ))}
          </Slider>
        </div>
  )
}

export default CourselSection
