import React from "react";
import { iconsData } from "./IconsData";
import Slider from "react-slick";
import '../../index.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderItem = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 900,
    slidesToShow: 10,
    slidesToScroll: 3,
  };

  return (
    <div className="items-center">
      <Slider {...settings}>
        {iconsData.map((item) => (
          <div
          key={item.key}
          className="bg-white h-[80px] text-black p-5 cursor-pointer hover:underline"
        >
         {item.icon}
          <p className="  text-xs mt-1">{item.title}</p>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderItem;
