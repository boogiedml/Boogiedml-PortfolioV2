import React from "react";
import { ButtonLink } from "../components";

const Navbar = () => {

  return (
    <div className="flex justify-between items-center py-8 mx-6 sm:mx-10 md:mx-20">
      <div className="text-black dark:text-white">
        <h1 className="text-xl font-robotoCondensed cursor-default">
          S herifdeen Ishola
        </h1>
      </div>
      <div className="hidden sm:block">
        <ButtonLink
          link="mailto:isholasherifdeen@gmail.com"
          text="Let's Talk"
        />
      </div>
    </div>
  );
};

export default Navbar;
