import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import WideNavbar from "./WideNavbar";

const Header = (props) => {
  const [search, setSearch] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!headerRef.current.contains(event.target)) {
        setSearch(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  return (
    search ? (
      <div className="sticky top-0 z-20 bg-white shadow" ref={headerRef}>
        <Navbar setSearch={setSearch} />
        <hr />
        <MenuBar setIsChecked={props.setIsChecked} />
      </div>
    ) : (
      <WideNavbar setSearch={setSearch} search={search}/>
    )
  );
};

export default Header;
