import React from "react";
import Navbar from "../Header/Navbar";
import { IoShareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const Details = ({ slides }) => {

  // Check if slides is empty or undefined
  if (!slides || slides.length === 0) {
    return <div>No slides available</div>;
  }

  // Access the first slide or provide a default value if slides[0] is undefined
  const firstSlide = slides[0];

  return (
    <div>
      <div className="mx-16">
        <Navbar />
      </div>

      <hr />
      <div className="mx-32 flex justify-between">
        <p className="text-3xl font-semibold my-5">
          The Orchard Farm - 3 BR Pool Farm with Jacuzzi
        </p>
        <div className="flex w-1/12 mr-8 text-lg font-semibold underline">
          <div className="flex items-center mr-5">
            <IoShareOutline />
            <a href="#" className="ml-2">Share</a>
          </div>
          <div className="flex items-center">
            <IoIosHeartEmpty />
            <a href="#" className="ml-2">Save</a>
          </div>
        </div>
        <img src={firstSlide.url} alt="" />
      </div>
    </div>
  );
};

export default Details;
