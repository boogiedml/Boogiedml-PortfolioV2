import React from "react";
import { SocialMedia, ThemeToggle } from "../components";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`w-full relative ${className}`}>
        <SocialMedia />
        <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
          <Component />
        </div>
        <div className="hidden md:flex gap-3 absolute bottom-32 -right-16  lg:-right-12 xl:-right-8 transform rotate-90">
          <p className="text-sm font-outfit text-gray-600 dark:text-[#9A9A9A]">
            isholasherifdeen@gmail.com
          </p>
          <ThemeToggle />
        </div>
        {/* <ThemeToggle styles="md:hidden absolute bottom-32 right-8" /> */}
      </div>
    );
  };

export default AppWrap;
