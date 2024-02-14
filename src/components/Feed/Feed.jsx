import React, { useState } from "react";
import Card from "./Card";

const Feed = (props) => {
  const [showMore, setShowMore] = useState(false);
  const cardArray = Array.from({ length: 60 }, (_, index) => index);


  return (
    <>
      <div className="px-10 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardArray.slice(0, showMore ? cardArray.length : 24).map((index) => (
          <Card key={index} isChecked={props.isChecked} />
        ))}
      </div>
      <div className="text-center my-16">
        <p className="text-2xl font-semibold text-gray-700">Continue exploring</p>
        <button
          className="bg-black rounded-lg my-4 p-3 px-4 text-white font-semibold text-xl"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show more"}
        </button>
      </div>
    </>
  );
};

export default Feed;
