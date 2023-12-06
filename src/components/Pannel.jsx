
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';

import image1 from '../eventsImages/image1.svg'
import image2 from '../eventsImages/image2.svg'

import img1 from '../eventsImages/img1.jpeg'
import img2 from '../eventsImages/img2.jpeg'
import img3 from '../eventsImages/img3.jpeg'

import { Carousel } from 'flowbite-react';


function Pannel() {
    const events = [
                //  objects
    ]

   
     

    const imageStyle = 'object-contain w-full  w-full rounded-md bg-black'
   
   
    return (
      
      // slideInterval={2000}
        <Carousel   slideInterval={5000}  className="sm:w-1/3 w-3/4 mx-auto h-64  sm:h-72">
          <img
            alt="..."
            src={img3}
            className={imageStyle}
          />
          <img
            alt="..."
            src={img2}
            className={imageStyle}
          />
          <img
            alt="..."
            src={img1}
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