

import React from "react";
import Slider from "react-slick";
import styles from "./MainPage.module.css";
import ExploreButtonImg from "../component/exploreButtonImage/ExploreButtonImg";
import CarouselItems from "../component/carouseltems/CarouselItems";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      Next
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      Prev
    </div>
  );
}



const MainPage = () => {
  const settings = {
    swipeToSlide: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const settings2 = {
    draggable: true,
    swipeToSlide: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={styles.mainContainerLarge}>
        <div className={styles.boxCover}>
          <ExploreButtonImg />
        </div>
        <Slider {...settings} className={styles.carouselDestop}>
          <div>
            <CarouselItems />
          </div>
          <div>
            <CarouselItems />
          </div>
          <div>
            <CarouselItems />
          </div>
          <div>
            <CarouselItems />
          </div>
          <div>
            <CarouselItems />
          </div>
        </Slider>
        
      </div>
      <div className="custom-arrows">
    
        <SamplePrevArrow/>
        <SampleNextArrow/>
        </div>
     

      <div className={styles.mainContainerSmall}>
        <Slider {...settings2}>
          <div>
            <ExploreButtonImg />
          </div>
          <div>
            <CarouselItems />
          </div>
          <div>
            <CarouselItems />
          </div>
          <div>
            <ExploreButtonImg />
          </div>
          <div>
            <ExploreButtonImg />
          </div>
        </Slider>

      
    
      </div>
    </>
  );
};

export default MainPage;

