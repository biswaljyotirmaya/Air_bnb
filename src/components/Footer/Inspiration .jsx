import React, { useState, useEffect } from "react";
import Lists from "./Lists.jsx";
import  '../../index.css'

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Inspiration = () => {
  const [list, setList] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [arrNo, setArrNo] = useState(1);
  const [selectedList, setSelectedList] = useState(Lists[1]);

  useEffect(() => {
    if (!list) {
      setSelectedLink(null);
    }
  }, [list]);

  const handleLinkClick = (index) => {
    setSelectedLink(index);
    setArrNo(index + 1);
    setSelectedList(Lists[index + 1]);
  };

  return (
    <div>
      <p className="text-2xl font-semibold">
        Inspiration for future getaways
      </p>
      <div>
        <div className="flex mt-3 items-center font-semibold cursor-pointer">
          {Lists[0].map((item, index) => (
            <div
              key={item}
              className={`mr-6 p-2 text-lg border-b-[3px] ${
                selectedLink === index ? "border-black " : "border-transparent"
              }`}
              onClick={() => handleLinkClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
        <hr />
        <div className="py-10 grid grid-cols-5 gap-4">
          {list
            ? selectedList.map((item, index) => (
                <div key={item.id} className="cursor-pointer">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p>{item.subTitle}</p>
                </div>
              ))
            : selectedList
                .slice(0, 19)
                .map((item) => (
                  <div key={item.id} className="cursor-pointer">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p>{(item.subTitle)?(item.subTitle):(item.title)}</p>
                  </div>
                ))}
          {list ? (
            <div
              className="cursor-pointer py-2 flex items-center"
              onClick={() => {
                setList(false);
              }}
            >
              <p className="font-semibold text-lg text-center mr-2 hover:underline">
                Show Less
              </p>
              <FaAngleUp />
            </div>
          ) : ((selectedList.length > 25) && (
            <div
              className="cursor-pointer flex items-center"
              onClick={() => {
                setList(true);
              }}
            >
              <p className="font-semibold text-lg text-center mr-2 hover:underline">
                Show More
              </p>
              <FaAngleDown />
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Inspiration;