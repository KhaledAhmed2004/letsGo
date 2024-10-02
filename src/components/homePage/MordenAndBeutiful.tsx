import Image from "next/image";
import React from "react";
import map_img from "../../assets/images/map-1.png";
const MordenAndBeutiful = () => {
  return (
    <div className="">
      <div className="section-title text-center">
        <span className="sub-title text-lg font-semibold text-gray-500 mb-2">
          MODERN & BEAUTIFUL
        </span>
        <h2 className="section-title text-5xl font-bold">
          Explore the World for Travel
        </h2>
      </div>

      <div className="flex items-center justify-center m-2">
        <Image alt="" src={map_img} />
      </div>
    </div>
  );
};

export default MordenAndBeutiful;
