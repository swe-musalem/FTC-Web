
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Swiper from 'react-id-swiper';

import FeaturedEventCard from "./FeaturedEventCard"
import image1 from '../eventsImages/image1.svg'
import image2 from '../eventsImages/image2.svg'

import { Carousel } from 'flowbite-react';


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

     

    const style = 'object-cover'
    // const Imageheight = 'sm:w-1/2 h-5/6 object-fit'
   
    return (
      
      // slideInterval={2000}
        <Carousel  pauseOnHover  className="sm:w-1/2 sm:mx-auto w-3/4 mx-auto h-5/6 sm:h-1/2">
          <img
            alt="..."
            src={image1}
          />
          <img
            alt="..."
            src={image2}
          />
          <img
            alt="..."
            src={image1}
          />
          <img
            alt="..."
            src={image2}
          />
          <img
            alt="..."
            src={image1}
          />
        </Carousel>
      

    )
  


  // <div className="">
  //     <div className="flex justify-center ">
  //       <Slider {...settings} className="w-full">
  //          <FeaturedEventCard link='' text='FTC' src={image1}/>
  //          <FeaturedEventCard link='' text='FTC' src={image1}/>
  //          <FeaturedEventCard link='' text='FTC' src={image1}/>
  //          <FeaturedEventCard link='' text='FTC' src={image1}/>
  //       </Slider>
  //     </div>
  //   </div>

}



export default Pannel