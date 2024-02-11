import React from "react";

import { LuDot } from "react-icons/lu";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const BottomFooter = () => {
  return (
    <div className="h-20 flex items-center justify-between">
      <div className="flex items-center">
        <a className="hover:underline">© 2024 Airbnb, Inc. </a>
        <LuDot />
        <a className="hover:underline cursor-pointer">Privacy</a> <LuDot />
        <a className="hover:underline cursor-pointer">Terms</a>
        <LuDot />
        <a className="hover:underline cursor-pointer">Sitemap</a>
        <LuDot />
        <a className="hover:underline cursor-pointer">Company details</a>
      </div>
      <div className="flex items-center ">
        <p className="hover:underline cursor-pointer font-semibold text-lg">English (IN)</p>
        <p className="flex items-center mx-2 hover:underline cursor-pointer text font-semibold">
          <MdOutlineCurrencyRupee />
          INR
        </p>
        <div className="flex items-center">
          <FaFacebookSquare className="h-6 w-6 mx-2 cursor-pointer" />
          <FaTwitterSquare className="h-6 w-6 mx-2 cursor-pointer" />
          <FaInstagramSquare className="h-6 w-6 mx-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
