import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    const lightBgColor =
      idName === "boogiedml" || idName === "skills"
        ? "bg-[#4732D3]"
        : idName === "about" || idName === "projects"
        ? "bg-[#F9F9F9]"
        : "";

    const lightTextColor =
      idName === "boogiedml" || idName === "skills"
        ? "text-[#CCF381]"
        : idName === "about" || idName === "projects"
        ? "text-[#4732D3]"
        : "";

    return (
      <div
        id={idName}
        className={`w-full relative ${lightBgColor} dark:bg-transparent ${className}`}
      >
        <SocialMedia idName={idName} />
        <div
          className={`${
            idName === "boogiedml" ? "py-12" : "py-16"
          } px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36`}
        >
          <Component />
        </div>
        {/* <div className="hidden md:flex gap-3 absolute bottom-32 -right-16 lg:-right-12 xl:-right-8 transform rotate-90">
          <p
            className={`text-sm font-outfit ${lightTextColor} dark:text-[#9A9A9A]`}
          >
            isholasherifdeen@gmail.com
          </p>
        </div> */}
        {/* <NavigationDots active={idName} /> */}
      </div>
    );
  };

export default AppWrap;
