import React from "react";

import img5 from "../assets/images/img5.jpeg";
import img7 from "../assets/images/img7.jpeg";
import img9 from "../assets/images/img9.jpeg";

import usecensus2020 from "../assets/images/usecensus2020.jpeg";
import distrippes from "../assets/images/distrippes.jpeg";

const MiscGallery = () => {
  return (
    <>
      <p className="text-2xl font-bold text-center text-[#2a52be] my-6">
        More highlights
      </p>
      <div class="columns-1 md:columns-2 xl:columns-3 gap-7 ">
        <div class=" break-inside-avoid mb-8">
          <img
            class="h-auto max-w-full rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            src={usecensus2020}
            alt="Gallery image"
          />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img
            class="h-auto max-w-full rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            src={img9}
            alt="Gallery image"
          />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img
            class="h-auto max-w-full rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            src={img5}
            alt="Gallery image"
          />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img
            class="h-auto max-w-full rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            src={img7}
            alt="Gallery image"
          />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img
            class="h-auto max-w-full rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            src={distrippes}
            alt="Gallery image"
          />
        </div>
      </div>
    </>
  );
};

export default MiscGallery;
