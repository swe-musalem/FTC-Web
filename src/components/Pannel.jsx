
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import FeaturedEventCard from "./FeaturedEventCard"
import image1 from '../eventsImages/image1.png'

function Pannel() {
    const events = [
                    {element:<FeaturedEventCard link='' text='FTC' src={image1}/>},
                    {element:<FeaturedEventCard link='' text='FTC' src={image1}/>},
                    {element:<FeaturedEventCard link='' text='FTC' src={image1}/>},
                    {element:<FeaturedEventCard link='' text='FTC' src={image1}/>},
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
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
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

    const style = ''

    
  return <div className="  ">
   
   
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