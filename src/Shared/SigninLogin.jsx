import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import Facebook from "/Facebok.png";
import Google from "/Google.png";
import Apple from "/Apple.png";
import { CiMail } from "react-icons/ci";
import { GiSmartphone } from "react-icons/gi";
import { Link } from "react-router-dom";

const SigninLogin = () => {
  const [islogin, setIslogin] = useState(true);

  return (
    <div
      class="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
          <div class="relative transform rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg xl:max-w-[42%] overflow-hidden">
            <div className="flex text-lg items-center m-5 pr-40">
              <Link to="/">
                <RxCross2
                  className="cursor-pointer mr-[195px]"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                />
              </Link>

              <p className="font-bold text-center">Login or Signup</p>
            </div>
            <hr />
            <div className="p-[24px] h-[36.3rem] overflow-y-scroll ">
              <p className=" my-6 text-3xl font-semibold">Welcome to Airbnb</p>
              {islogin ? (
                <div>
                  <div className="border-2 rounded-xl ">
                    <input
                      type="text"
                      className=" w-full h-16 rounded-xl px-4 placeholder:text-lg"
                      placeholder="Country Name"
                    />
                    <hr />
                    <input
                      type="text"
                      className="w-full h-16 rounded-xl px-4 placeholder:text-lg"
                      placeholder="Phone Number"
                    />
                  </div>
                  <p className="mt-2 text-xs mb-1">
                    We’ll call or text you to confirm your number. Standard
                    message and data rates apply.
                    <a
                      href="#"
                      className="font-semibold ml-2 text-sm underline"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    className="border-[3px] border-black  w-full h-16 rounded-xl px-4 placeholder:text-lg my-5 required:border-red-500 "
                    placeholder="Enter Email"
                  />
                </>
              )}
              <br />
              <button className="bg-rose-500 text-white rounded-lg h-14 w-full text-center font-bold text-xl hover:bg-rose-600">
                Continue
              </button>
              <p className="text-center">or</p>
              <button className="border-2 my-2 border-black flex items-center px-8 rounded-lg  h-14 w-full text-center hover:bg-gray-100">
                <img src={Facebook} className="h-6 w-6" alt="" />
                <p className="w-10/12 text-lg text-center">
                  Continue with Facebook
                </p>
              </button>
              <button className="border-2 my-2 border-black rounded-lg flex items-center px-8  h-14 w-full hover:bg-gray-100 ">
                <img src={Google} className="h-6 w-6" />
                <p className="w-10/12 text-lg"> Continue with Google</p>
              </button>
              <button className=" border-2 my-2 border-black rounded-lg flex items-center px-8  h-14 w-full text-center hover:bg-gray-100">
                <img src={Apple} alt="" className="h-6 w-6" />
                <p className="w-10/12 text-lg ">Continue with Apple</p>
              </button>
              {islogin ? (
                <button
                  className="border-2 my-2 border-black rounded-lg flex items-center px-8  h-14 w-full text-center hover:bg-gray-100"
                  onClick={() => setIslogin(false)}
                >
                  <CiMail className="h-6 w-6" />
                  <p className="w-10/12 text-lg ">Continue with Mail</p>
                </button>
              ) : (
                <button
                  className="border-2 my-2 border-black rounded-lg flex items-center px-8  h-14 w-full text-center hover:bg-gray-100"
                  onClick={() => setIslogin(true)}
                >
                  <GiSmartphone className="h-6 w-6" />
                  <p className="w-10/12 text-lg ">Continue with Phone</p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninLogin;
