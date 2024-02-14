import React, { useState } from "react";

const Taxes = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center border justify-between px-2 rounded-lg w-[246px]">
        <input
          type="checkbox"
          name="autoSaver"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <span className="label flex items-center text-xs font-semibold text-black">
          Display total{" "}
          <span className="pl-1">
            {" "}
            {isChecked ? "with taxes" : "without taxes"}{" "}
          </span>
        </span>

        <span
          className={`slider ml-3 flex h-[26px] w-[50px] sticky items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-[#08081b]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-6" : ""
            }`}
          ></span>
        </span>
      </label>
    </>
  );
};

export default Taxes;