import React from "react";
import { MdOutlineTune } from "react-icons/md";

import Taxes from "./Taxes";
import SliderItem from "./SliderItem";

const MenuBar = () => {
  return (
    <div className="h-[80px] flex top-80 items-center px-10">
      <div className="w-9/12 p-4">
        <SliderItem/>
      </div>
      <div className="w-3/12 flex justify-end">
        <div className=" border rounded-lg flex items-center mx-2 justify-between p-4 cursor-pointer">
            <MdOutlineTune className="h-6 w-6 mr-2"/>
            <p className="font-semibold text-sm">Filters</p>
        </div>
        <Taxes/>
      </div>
    </div>
  );
};

export default MenuBar;
