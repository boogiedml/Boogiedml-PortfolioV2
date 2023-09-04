import React, { useState } from "react";
import { Hamburger, NavbarMenu } from "../components";
import logo from "../assets/isholaG.svg";
import logoD from "../assets/isholaW.svg";
import logoP from "../assets/isholaP.svg";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const screenWidth = window.innerWidth;
  const smallScreen = screenWidth < 640;

  return (
    <>
      <div className="bg-[#4732D3] dark:bg-transparent w-full flex justify-between items-center py-12 px-6 sm:px-10 md:px-20">
        <img
          className="w-20 md:w-24 relative z-[150]"
          src={
            theme === "dark"
              ? logoD
              : theme === "light" && isNavMenuOpened && smallScreen
              ? logoP
              : logo
          }
          alt=""
        />
        <Hamburger
          isNavMenuOpened={isNavMenuOpened}
          setIsNavMenuOpened={setIsNavMenuOpened}
        />
      </div>
      <AnimatePresence>
        {isNavMenuOpened && (
          <NavbarMenu setIsNavMenuOpened={setIsNavMenuOpened} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
