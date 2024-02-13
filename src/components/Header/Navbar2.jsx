import React from "react";

const Navbar2 = () => {
  return (
    <div className="h-20 text-center px-24 flex items-center">
      <div className="cursor-pointer flex items-center border-b-4 h-full mx-6 text-lg font-medium border-transparent hover:border-black px-4">
        Photos
      </div>
      <div className="cursor-pointer flex items-center border-b-4 h-full mx-6 text-lg font-medium border-transparent hover:border-black px-4">
        Amenities
      </div>
      <div className="cursor-pointer flex items-center border-b-4 h-full mx-6 text-lg font-medium border-transparent hover:border-black px-4">
        Reviews
      </div>
      <div className="cursor-pointer flex items-center border-b-4 h-full mx-6 text-lg font-medium border-transparent hover:border-black px-4">
        Location
      </div>
    </div>
  );
};

export default Navbar2;
