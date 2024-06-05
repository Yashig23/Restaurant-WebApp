import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CarouselImages} from '../../constants/index';

function Carousal() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
        <div className="slider-container">
          <Slider {...settings}>
            {CarouselImages.map((e) => (
              <div key={e.id} className=" p-2">  {/* Add padding here for gap */}
                <div className="border rounded-xl p-3 bg-[#d2d2cf]">
                    <div className="flex justify-center">
                  <img src={e.img} style={{ width: 300, height: 300 }} className="rounded-xl" />
                  </div>
                  <div className="flex justify-between items-center mt-3 mb-3 px-7">
                  <div className="text-yellow-950 font-semibold text-[18px]">
                    <h3>{e.title}</h3>
                  </div>
                  <div>
                    <button className="border border-slate-500 rounded-xl px-4 py-2 text-black hover:scale-110 hover:bg-yellow-900 hover:text-white font-semibold duration-300">Explore Options</button>
                  </div>
                  </div>
                </div>
                

              </div>
            ))}
          </Slider>
        </div>
      );
    }
  
  export default Carousal;