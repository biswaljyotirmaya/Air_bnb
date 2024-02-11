import React, { useEffect } from "react";
import { useState } from "react";

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const linkList = [
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
  { title: "poiuyqwerty", subTitle: "asldkfjgh" },
];

const links = [
  "Popular",
  "Art & Future",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do",
];

const Inspiration = () => {
  const [list, setList] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    if (!list) {
      setSelectedLink(null);
    }
  }, [list]);

  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  return (
    <div>
      <p className="text-2xl font-semibold">Inspiration for future getaways</p>
      <div>
        <div className="flex mt-3 items-center font-semibold cursor-pointer">
          {links.map((item, index) => (
            <div
              key={item}
              className={`mr-6 p-2 text-lg border-b-[3px] ${
                selectedLink === index? "border-black " : "border-transparent"
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
            ? linkList.map((item, index) => (
                <div key={item.title} className="cursor-pointer">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p>{item.subTitle}</p>
                </div>
              ))
            : linkList.slice(0, 19).map((item) => (
                <div key={item.title} className="cursor-pointer">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p>{item.subTitle}</p>
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
          ) : (
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
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Inspiration;
