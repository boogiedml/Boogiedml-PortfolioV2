import React from "react";
import { ButtonLink } from "../components";

const Navbar = () => {

  return (
    <div className="bg-[#4732D3] dark:bg-transparent w-full flex justify-between items-center py-8 px-6 sm:px-10 md:px-20">
      <div className="text-[#CCF381] dark:text-white">
        <h1 className="text-xl font-robotoCondensed cursor-default">
          <span className="text-2xl">S</span> herifdeen Ishola
        </h1>
      </div>
      <div className="hidden sm:block">
        <ButtonLink
          link="mailto:isholasherifdeen@gmail.com"
          text="Let's Talk"
          styles="bg-transparent border-[#CCF381] text-[#CCF381]"
        />
      </div>
    </div>
  );
};

export default Navbar;
