import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { aboutImages } from "../../constants";

function AboutCarousal() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

    return(
        <div className="slider-conatiner">
            <Slider {...settings}>
                {aboutImages.map((e)=>(
                    <div className="mt-6" >
                        <div className="table">
                        <div className="bg-black flex justify-center p-5 w-full" key={e.id}>
                            <img src={e.img} className="object-cover  m-5 flex-1 table-cell h-[500px]"></img>
                        </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )

}

export default AboutCarousal;