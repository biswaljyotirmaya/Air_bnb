// Card.js
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";

import Imageslider from "./Imageslider";
import { Link } from "react-router-dom";
import slides from './Imageslider'


const Card = ({ isChecked }) => {
  const initialTaxAmount = 323897;
  const [taxAmount, setTaxAmount] = useState(initialTaxAmount);
  const [watchList, setWatchList] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setTaxAmount((initialTaxAmount * 18) / 100);
    } else {
      setTaxAmount(initialTaxAmount);
    }
  }, [isChecked]);

 

  return (
    <Link to={'/details'}>
    <div className="relative rounded-xl cursor-pointer hover:shadow-lg hover:shadow-slate-300 p-4" onClick={console.log(slides)}
    >
      <div className="h-[315.50px] w-[300px] relative">
        <Imageslider galary={slides}/>
        <FaHeart
          className={`absolute top-0 right-0 m-4 h-6 w-6 ${
            watchList ? "text-rose-800" : "text-white"
          } z-10 `}
          onClick={() => {
            setWatchList(!watchList);
          }}
        />
      </div>
      <div className="w-[300px] h-[100px] px-2 text-gray-700">
        <div className="flex justify-between font-semibold">
          <p className="text-lg text-black">Minden, New Zendland</p>
          <p className="flex justify-between items-center">
            <IoStar className="mr-1" /> New
          </p>
        </div>
        <p>Added 5 weeks ago</p>
        <p className="no-underline">25 Feb - 1 Mar</p>
        <p className="flex items-center">
          <span className="flex items-center font-semibold mr-2">
            <MdOutlineCurrencyRupee />
            {taxAmount.toLocaleString()}
          </span>
          night
        </p>
      </div>
    </div>
    </Link>
  );
};

export default Card;
