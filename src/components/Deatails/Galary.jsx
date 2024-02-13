import React from "react";
import { IoShareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom"; // Import Link component

import { slides } from "../Feed/Imageslider";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Galary = () => {
  return (
    <div>
      <div className="flex justify-between m-8 text-lg font-semibold cursor-pointer">
        <Link to="/details"> 
          <IoArrowBackCircle size={40} />
        </Link>
        <div className="flex underline">
          <div className="flex items-center mr-5">
            <IoShareOutline />
            <a href="#" className="ml-2">
              Share
            </a>
          </div>
          <div className="flex items-center">
            <IoIosHeartEmpty />
            <a href="#" className="ml-2">
              Save
            </a>
          </div>
        </div>
      </div>
      <ResponsiveMasonry
        className="px-32"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          {slides.map((slide, index) => (
            <div key={index} className="slide overflow-hidden inline-block">
               <img
                src={slide.url}
                alt={slide.url}
                className="p-4 cursor-pointer hover:scale-125 duration-1000 transition-transform hover:opacity-80 inline-block"
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Galary;
