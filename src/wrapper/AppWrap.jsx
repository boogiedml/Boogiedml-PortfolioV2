import React from "react";
import { SocialMedia, ThemeToggle } from "../components";

const AppWrap = (Component) =>
  function HOC() {
    return (
      <div className="w-full min-h-screen">
        <SocialMedia />
        <div className="py-16 px-8">
          <Component />
        </div>
        <div className="hidden md:flex gap-3 absolute bottom-32 -right-8 transform rotate-90">
          <p className="text-sm font-outfit text-gray-600 dark:text-[#9A9A9A]">
            isholasherifdeen@gmail.com
          </p>
          <ThemeToggle />
        </div>
      </div>
    );
  };

export default AppWrap;
