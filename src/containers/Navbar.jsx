import React from "react";
import { ButtonLink } from "../components";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 mx-20">
      <div className="text-black dark:text-white">
        <h1 className="text-xl font-robotoCondensed cursor-default">
          S herifdeen Ishola
        </h1>
      </div>
      <div>
        <ButtonLink link="/" n text="Let's Talk" />
      </div>
    </div>
  );
};

export default Navbar;
