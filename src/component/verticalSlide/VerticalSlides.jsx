import React, { useRef } from 'react';
import Slider from 'react-slick';
import './VerticalSlider.css'; // Import custom CSS for styling
import MainPage from '../../mainPage/MainPage';

function VerticalSlider() {
  const sliderRef = useRef(null); // Create a ref to access the slider instance

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide);
    }
  };

  // Handle scroll event to change slides
  const handleScroll = (event) => {
    const delta = event.deltaY; // Get the scroll direction

    if (delta > 0) {
      sliderRef.current.slickNext(); // Scroll down
    } else {
      sliderRef.current.slickPrev(); // Scroll up
    }
  };

  return (
    <div className="slider-container" onWheel={handleScroll}>
      <Slider ref={sliderRef} {...settings}>
        <div className="slide-item">
       
        </div>
        {/* <div className="slide-item">
         <MainPage/>
        </div> */}
        <div className="slide-item">
          <h3>3</h3>
        </div>
        <div className="slide-item">
          <h3>4</h3>
        </div>
        <div className="slide-item">
          <h3>5</h3>
        </div>
        <div className="slide-item">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default VerticalSlider;
