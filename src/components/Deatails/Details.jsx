import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import { IoShareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar2 from "../Header/Navbar2";
import { PiDotsNineBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { BsDoorOpen } from "react-icons/bs";
import { PiMedalMilitary } from "react-icons/pi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaChevronRight } from "react-icons/fa6";

import { slides } from "../Feed/Imageslider";
import PriceCard from "./PriceCard";
import Tags from "./Tags";
import Description from "./Description";
import Footer from "../Footer/Footer";

const Details = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const twentyPercentOfWindowHeight = window.innerHeight * 0.5; // Calculate 20% of window height
      if (window.scrollY > twentyPercentOfWindowHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`${isScrolled ? "sticky top-0 bg-white z-20 shadow" : ""}`}
      >
        {isScrolled ? <Navbar2 /> : <Navbar />}
      </div>

      <hr />
      <div className="mx-24 flex justify-between">
        <p className="text-3xl font-semibold my-5">
          The Orchard Farm - 3 BR Pool Farm with Jacuzzi
        </p>
        <div className="flex w-1/12 mr-8 text-lg font-semibold underline">
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
      <div className=" relative h-96">
        <div className="flex rounded-2xl mx-20 overflow-hidden">
          {slides.slice(0, 2).map((slide, index) => (
            <img
              key={index}
              src={slide.url}
              alt=""
              className="object-cover w-1/2 h-96 mx-2 rounded-2xl hover:opacity-9x5"
            />
          ))}
          <Link to="/galary">
            <button className="absolute bottom-2  right-24 bg-white border-black border-2 font-semibold text-xl rounded-xl p-2 px-4 flex items-center">
              <PiDotsNineBold className="mr-2" />
              Show all photos
            </button>
          </Link>
        </div>
      </div>

      <div className="flex w-full px-20 my-10 justify-between">
        <div className="w-4/6 pr-32 scroll-mt-10">
          <div>
            <p className="text-2xl font-semibold">
              Farm stay in Gurugram, India
            </p>
            <p className="text-xl my-1">
              11 guests · 3 bedrooms · 8 beds · 4 bathrooms
            </p>
            <p className="font-semibold text-lg flex items-center">
              <FaStar />
              New · <a className="underline cursor-pointer"> 1 review</a>
            </p>
          </div>
          <hr className="my-8" />
          <Tags
            title={"Hosted by Hostizzy Homes & Villas"}
            subtitle={"Superhost · 4 years hosting"}
            tag={
              <img
                className="rounded-full"
                src="https://a0.muscache.com/im/pictures/user/User-290639154/original/2298a7e7-97a2-47dc-b27c-e3cf090d4609.jpeg?im_w=240"
              />
            }
          />
          <hr className="my-8" />
          <Tags
            title={"Self check-in"}
            subtitle={"You can check in with the building staff."}
            tag={<BsDoorOpen />}
          />
          <Tags
            title={"Hostizzy Homes & Villas is a Superhost"}
            subtitle={"Superhosts are experienced, highly rated Hosts."}
            tag={<PiMedalMilitary />}
          />
          <Tags
            title={"Dive right in"}
            subtitle={"This is one of the few places in the area with a pool."}
            tag={<LiaSwimmingPoolSolid />}
          />
          <hr className="my-8" />
          <p className="text-lg">
            Welcome to Orchard Farm, a stunning family-friendly and pet-friendly
            luxury farmhouse just 45 minutes from Delhi and Gurgaon, this
            farmhouse offers a tranquil escape for you and your loved ones with
            exclusive amenities like a private pool and Jacuzzi.
            <br />
            <br /> It is a perfect place for getaways near Delhi and Gurgoan
            with friends and family and also an ideal choice for pre-wedding
            shoots, corporate events, destination weddings and <br />
            <br />
            <p
              className="text-lg underline font-bold flex items-center cursor-pointer"
              onClick={() => setShow(!show)}
            >
              Show more
              <FaChevronRight />
            </p>
          </p>
          {show && <Description show={{ setShow }} />}

          <hr className="my-8" />
        </div>
        <PriceCard />
      </div>
      <Footer />
    </div>
  );
};

export default Details;
