import React, { useState, useEffect } from "react";

const Taxes = (props) => {
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    props.setIsChecked(isToggle);
  }, [isToggle, props]);

  const handleCheckboxChange = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center border justify-between px-1 rounded-lg w-[250px]">
        <input
          type="checkbox"
          name="autoSaver"
          className="sr-only"
          checked={isToggle}
          onChange={handleCheckboxChange}
        />

        <span className="label flex items-center text-xs font-semibold text-black">
          Display total{" "}
          <span className="pl-1">
            {" "}
            {isToggle ? "with taxes" : "without taxes"}{" "}
          </span>
        </span>

        <span
          className={`slider ml-3 flex h-[26px] w-[50px] sticky items-center rounded-full p-1 duration-200 ${
            isToggle ? "bg-[#08081b]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isToggle ? "translate-x-6" : ""
            }`}
          ></span>
        </span>
      </label>
    </>
  );
};

export default Taxes;