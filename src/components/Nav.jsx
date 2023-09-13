import React, { useState } from "react";
import logo from "../assets/isholaP.svg";
import logoD from "../assets/isholaW.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { AnimatePresence } from "framer-motion";
import NavbarMenu from "./NavbarMenu";

const Nav = ({ styles }) => {
  const { theme } = useSelector((state) => state.theme);
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

  return (
    <>
      <div
        className={`dark:bg-transparent w-full flex justify-between items-center py-12 px-6 sm:px-10 md:px-20 ${styles}`}
      >
        <Link to="/">
          <img
            className="w-20 md:w-24 relative z-[150]"
            src={theme === "dark" ? logoD : logo}
            alt=""
          />
        </Link>
        <Hamburger
          color="bg-[#4732d3]"
          isNavMenuOpened={isNavMenuOpened}
          setIsNavMenuOpened={setIsNavMenuOpened}
        />
      </div>
      <AnimatePresence>
        {isNavMenuOpened && (
          <NavbarMenu
            menuOpen={isNavMenuOpened}
            setMenuOpen={setIsNavMenuOpened}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
