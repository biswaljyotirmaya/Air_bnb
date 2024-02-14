import React, { useState, useEffect, useRef } from "react";
import logo from "/logo.png";
import { FaSearch } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";
import { IoMenuSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import SigninLogin from "../../Shared/SigninLogin";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [sign, setSign] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  const handleSearch = () => {
    setSearch(false);
    setSearchText(""); // Clear the search input
    // Perform search or any other action here
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Function to handle sign up click
  const handleSignUpClick = () => {
    setSign(true);
    setDropdownOpen(false); // Close dropdown after sign up click
  };

  return (
    <div className="h-[80px] w-full flex justify-between px-10 items-center ">
      <div className="w-[30%]">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className=" w-[40%] px-20">
        <div className=" rounded-full border flex font-medium text-lg justify-between items-center shadow-sm hover:shadow-md pl-8 pr-2 p-1">
          {search ? (
            <div className="w-full">
              <input
                type="text"
                className="w-full outline-none"
                placeholder="Search Places or city"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleEnterKey}
              />
            </div>
          ) : (
            <div className="flex">
              <div>
                <p className="cursor-pointer">Anywhere</p>
              </div>
              <div className="mx-4">
                <p className="cursor-pointer">Anyweek</p>
              </div>
              <div className="font-normal">
                <p className="cursor-pointer">Addguest</p>
              </div>
            </div>
          )}

          <div
            className="text-white bg-rose-500 hover:bg-rose-700 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => {
              !search ? setSearch(true) : handleSearch();
            }}
          >
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="w-[30%] flex justify-end items-center pr-4">
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
                <li className="py-2 px-4 hover:bg-zinc-50  cursor-pointer">
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
      {/* Render SigninLogin component if sign is true */}
    </div>
  );
};

export default Navbar;
