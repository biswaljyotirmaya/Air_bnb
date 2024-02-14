import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import Tags from "./Tags";

const PriceCard = () => {
  return (
    <div className="w-2/6  sticky -top-2/4">
    <div className=" border p-6 rounded-2xl shadow-xl h-[36rem]">
      <p className="flex text-3xl font-semibold">
        <span className="flex items-center line-through text-gray-700 ml-2">
          ₹31,500{" "}
        </span>{" "}
        <span className="flex items-center ml-1">₹25,200</span>{" "}
        <span className="ml-1 font-normal text-xl self-end">night</span>
      </p>
      <div class="grid grid-cols-2 my-4 border border-gray-300 overflow-hidden cursor-pointer rounded-xl">
        <div class="row-span-3 h-16 p-4">
          <p className="font-bold tracking-wider text-xs">CHECK-IN</p>
          <p className="text-lg leading-4">2/18/2024</p>
        </div>
        <div class="row-span-3 h-16  border-l-2 border-gray-300 p-4">
          <p className="font-bold tracking-wider text-xs">CHECK-OUT</p>
          <p className="text-lg leading-4">2/18/2024</p>
        </div>
        <div class="col-span-2 flex h-16 text-center border-t-2 border-gray-300  justify-between p-4">
          <div>
            <p className="font-bold tracking-wider text-xs">GUESTS</p>
            <p className="text-lg leading-4">1 guest</p>
          </div>
          <div className=" my-auto">
            <FaAngleDown size={20} />
          </div>
        </div>
      </div>
      <button className="font-semibold w-full border bg-gradient-to-r from-rose-600 to-rose-700 rounded-xl h-14 text-white text-xl">
        Reserve
      </button>
      <p className="text-lg text-center my-4">You won't be charged yet</p>
      <p className="flex justify-between text-lg mx-2">
        <span className="underline">₹31,500 x 5 nights</span>
        <span>₹1,57,500</span>
      </p>
      <p className="flex justify-between text-lg mx-2 my-4">
        <span className="underline">Special offer</span>
        <span className="text-green-500">-₹31,500</span>
      </p>
      <p className="flex justify-between text-lg mx-2">
        <span className="underline">Airbnb service</span>
        <span>₹17,788</span>
      </p>
      <hr className="my-6" />
      <p className="flex justify-between text-lg mx-2">
        <span className="underline font-semibold">Total before taxes</span>
        <span className="font-semibold">₹1,43,788</span>
      </p>
    </div>
    <div className="p-4 border my-10 rounded-xl bg-white">
      <Tags tag={<FcAlarmClock/>} title={"Special offer: save ₹31,502"} subtitle={"This Host is offering a deal on their first 3 bookings."}/>
    </div>
    </div>
  );
};

export default PriceCard;
