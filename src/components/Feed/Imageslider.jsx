import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from 'react-router-dom';

export const slides = [
  {
    url: "https://i.pinimg.com/564x/b7/b0/41/b7b04108bbac6055484c21253b2e16fc.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/f3/7d/f9/f37df9544aa32a334affd9e037700b00.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/36/2d/b1/362db180f8afb3ca3b0085d64a9f04b9.jpg",
  },

  {
    url: "https://i.pinimg.com/564x/ed/5e/c9/ed5ec9d123d70e5b925534cb0d975a89.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/d8/6d/89/d86d8939275772f7fbf1196359b9ca53.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/c7/54/b8/c754b8af8e9b9dce58690e2a8c571ff6.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/84/3d/3a/843d3a85ccd9867f6dbc4ca4a82fcfa5.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/bf/5f/49/bf5f494a365cf9db5c03493534ead0fe.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/fc/23/b8/fc23b8d33176cc2f575a399257cb51da.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/eb/16/f5/eb16f5e97b7508456068aa00f34b6128.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/29/f9/74/29f97449149b025734d5ee246f094ac2.jpg",
  },
];

function Imageslider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative group">
      <div key={slides[currentIndex].url}>
        <Link to="/details">
          <img
            src={slides[currentIndex].url}
            alt=""
            className="w-full h-[310px] rounded-2xl bg-center bg-cover duration-500 relative"
          />
        </Link>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center w-full pb-4 mx-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-sm cursor-pointer mx-[-4px] ${
                slideIndex === currentIndex ? "text-red-400" : "text-white"
              }`}
            >
              <RxDotFilled size={20} />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <div className="absolute top-[50%] left-0 transform -translate-y-1/2 -translate-x-[-30px] text-lg rounded-full bg-black/20 p-1 text-white cursor-pointer hover:bg-gray-500">
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] right-0 transform -translate-y-1/2 translate-x-[-30px] text-lg rounded-full bg-black/20 p-1 text-white cursor-pointer hover:bg-gray-500">
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
      </div>
    </div>
  );
}

export default Imageslider;
