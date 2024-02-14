import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { VscGlobe } from "react-icons/vsc";
import { IoMenuSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import SigninLogin from "../../Shared/SigninLogin";
import { useState, useRef, useEffect } from "react";

const WideNavbar = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [sign, setSign] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClickbg = () => {
    setIsClicked(!isClicked);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleSignUpClick = () => {
    setSign(true);
    setDropdownOpen(false);
  };
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <>
      <div className="w-full border h-[200px] shadow sticky top-0 bg-white z-20">
        <div className="h-1/2  flex">
          <div className=" w-1/3 flex items-center pl-20">
            {" "}
            <Link to="/" >
              <img src={logo} alt="" className="w-36"  />
            </Link>
          </div>
          <div className="w-1/3 flex items-center justify-around">
            <div
              className={`hover:bg-gray-100 px-6 py-4 flex justify-center text-xl rounded-full cursor-pointer ${
                selectedItem === 0
                  ? "font-semibold text-black"
                  : "font-semibold text-gray-400"
              }`}
              onClick={() => handleItemClick(0)}
            >
              Stays
            </div>
            <div
              className={`hover:bg-gray-100 px-6 py-4 flex items-center justify-center text-xl rounded-full cursor-pointer ${
                selectedItem === 1
                  ? "font-semibold text-black"
                  : "font-semibold text-gray-400"
              }`}
              onClick={() => handleItemClick(1)}
            >
              Experiences
            </div>
            <div
              className={`hover:bg-gray-100 px-6 py-4 flex items-center justify-center text-xl rounded-full cursor-pointer ${
                selectedItem === 2
                  ? "font-semibold text-black"
                  : "font-semibold text-gray-400"
              }`}
              onClick={() => handleItemClick(2)}
            >
              Online Experiences
            </div>
          </div>
          <div className=" w-1/3 flex items-center justify-center">
            <div className=" flex justify-end items-center pr-4">
              <div className="p-2 rounded-full hover:bg-zinc-50 font-medium text-lg cursor-pointer">
                <a>Airbnb your home</a>
              </div>
              <div className="mx-2 p-4 rounded-full hover:bg-zinc-50 cursor-pointer">
                <VscGlobe className="h-6 w-6" />
              </div>
              <div className="relative inline-block" ref={dropdownRef}>
                <div
                  className="border rounded-full flex h-14 p-2 cursor-pointer items-center justify-around w-24 hover:shadow-md"
                  onClick={toggleDropdown}
                >
                  <IoMenuSharp className="h-5 w-5" />
                  <FaUserCircle className="h-8 w-8" />
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-[250px] z-20 py-2 bg-white rounded-lg shadow-lg text-lg">
                    <ul>
                      <li
                        className="py-2 px-4 hover:bg-zinc-50 cursor-pointer font-semibold"
                        onClick={handleSignUpClick}
                      >
                        Sign up
                      </li>
                      <li
                        className="py-2 px-4 hover:bg-zinc-50 cursor-pointer "
                        onClick={handleSignUpClick}
                      >
                        Login
                      </li>
                      <hr className="my-1" />
                      <li className="py-2 px-4 hover:bg-zinc-50 font-normal cursor-pointer">
                        Airbnb your home
                      </li>
                      <Link to={"/helpCenter"}>
                        <li className="py-2 px-4 hover:bg-zinc-50 cursor-pointer">
                          Help Center
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {sign && <SigninLogin />}{" "}
          </div>
        </div>

        <div className="h-1/2 flex items-center justify-center bg-white">
          <div className="bg-gray-200 h-[75%] w-[60%] rounded-full flex justify-evenly">
            <div
              className={`h-full cursor-pointer hover:bg-gray-300 rounded-full justify-center px-8 flex flex-col w-4/12 border  ${
                isClicked ? "bg-white shadow-lg border" : "border-transparent"
              }`}
              onClick={handleClickbg}
            >
              <p className="font-semibold">Where</p>
              <p
                className={"font-normal text-lg leading-3 text-gray-400"
                }
              >
                Search destination
              </p>
            </div>

            <div className="h-full cursor-pointer hover:bg-gray-300 rounded-full justify-center px-4 flex flex-col  w-2/12">
              <p className="font-semibold">Check in</p>
              <p className=" font-normal text-lg leading-3 text-gray-400">Add dates</p>
            </div>
            <div className="h-full cursor-pointer hover:bg-gray-300 rounded-full justify-center px-4 flex flex-col  w-2/12">
              <p className="font-semibold">Check out</p>
              <p className=" font-normal text-lg leading-3 text-gray-400">Add dates</p>
            </div>
            <div className=" h-full cursor-pointer hover:bg-gray-300 rounded-full flex items-center justify-between px-4 w-4/12">
              {" "}
              <div className="h-full cursor-pointer hover:bg-gray-300 rounded-full justify-center px-4 flex flex-col">
                <p className="font-semibold">Check out</p>
                <p className=" font-normal text-lg leading-3 text-gray-400">Add dates</p>
              </div>
              <div className=" bg-rose-600 text-white font-semibold px-6 py-4 rounded-full text-xl flex items-center justify-center">
                <FaSearch className="mr-2" />
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WideNavbar;
