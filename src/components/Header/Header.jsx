import React from "react";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";

const Header = () => {
  return (
    <div className=" sticky top-0 z-20 bg-white shadow">
      <Navbar/>
      <hr />
      <MenuBar/>
    </div>
  );
};

export default Header;
