import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {reviews} from '../../constants/index';

function ReviewCarousal() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
        <div className="slider-container">
          <Slider {...settings}>
            {reviews.map((e) => (
              <div key={e.id} className="p-8"> 
              <div className="flex flex-wrap gap-6"> 
                <div className="border-4 p-8 grid grid-cols-2 rounded-xl bg-black">
                    <div className="flex justify-center flex-wrap">
                  <img src={e.img} style={{ width: 150, height: 150 }} className="rounded-full" />
                  </div>
                  <div className=" m-0 ">
                  <div className="text-white font-semibold text-[20px] mt-1 mb-1">
                    <h3>{e.name}</h3>
                  </div>
                  <div className="text-white text-[18px] font-light">
                    {e.content}
                  </div>
                  <div className="text-yellow-300 ">
                    {"★".repeat(e.rating) + "☆".repeat(5 - e.rating)}
                  </div>
                  </div>
                  </div>
                </div>
                

              </div>
            ))}
          </Slider>
        </div>
      );
    }
  
  export default ReviewCarousal;