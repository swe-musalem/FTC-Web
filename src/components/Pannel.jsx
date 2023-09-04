
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Swiper from 'react-id-swiper';

import FeaturedEventCard from "./FeaturedEventCard"
import image1 from '../eventsImages/image1.png'

function Pannel() {
    const events = [
                //  objects
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        centerMode: true,
        centerPadding: "360px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              centerMode: true,
              centerPadding: "100px",
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: false,
              
            }
          }
        ]
      };

     

    
  return <div className="">
      <div className="flex justify-center ">
        <Slider {...settings} className="w-full">
           <FeaturedEventCard link='' text='FTC' src={image1}/>
           <FeaturedEventCard link='' text='FTC' src={image1}/>
           <FeaturedEventCard link='' text='FTC' src={image1}/>
           <FeaturedEventCard link='' text='FTC' src={image1}/>
        </Slider>
      </div>
    </div>

}



export default Pannel