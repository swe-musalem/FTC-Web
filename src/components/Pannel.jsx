
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';

import image1 from '../eventsImages/image1.svg'
import image2 from '../eventsImages/image2.svg'

import { Carousel } from 'flowbite-react';


function Pannel() {
    const events = [
                //  objects
    ]

   
     

    const imageStyle = 'object-contain w-full h-64 w-full'
   
   
    return (
      
      // slideInterval={2000}
        <Carousel  pauseOnHover slideInterval={5000}  className="sm:w-1/2 w-72 mx-auto h-64  sm:h-72">
          <img
            alt="..."
            src={image1}
            className={imageStyle}
          />
          <img
            alt="..."
            src={image2}
            className={imageStyle}
          />
          <img
            alt="..."
            src={image1}
            className={imageStyle}
          />
          <img
            alt="..."
            src={image2}
            className={imageStyle}
          />
          <img
            alt="..."
            src={image1}
            className={imageStyle}
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