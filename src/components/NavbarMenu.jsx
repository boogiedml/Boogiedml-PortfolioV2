import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavbarMenu = () => {
  const location = useLocation();
  const screenWidth = window.innerWidth;
  const smallScreen = screenWidth < 640;

  const menu = [
    {
      name: location.pathname === "/" ? "My Work" : "Home",
      link: location.pathname === "/" ? "/work/" : "/",
    },
    { name: "My Résumé", link: "mailto:isholasherifdeen@gmail.com" },
  ];

  return (
    <motion.div
      initial={
        smallScreen
          ? { opacity: 0 }
          : {
              scaleX: 0,
              scaleY: 0,
              transformOrigin: "top right",
              opacity: 0,
            }
      }
      animate={
        smallScreen ? { opacity: 1 } : { scaleX: 1, scaleY: 1, opacity: 1 }
      }
      exit={smallScreen ? { opacity: 0 } : { scaleX: 0, scaleY: 0, opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className="nav__menu fixed right-0 top-0 sm:right-6 md:right-14 sm:top-6 bg-white dark:bg-[#1A1A1A] w-full sm:w-[300px] md:w-[350px] h-screen sm:h-auto p-14 sm:p-10 md:p-12 pt-40 sm:pt-16 z-[100]"
    >
      <div className="flex flex-col gap-4 mb-20 sm:mb-8">
        {menu.map((m, i) => (
          <Link
            key={i}
            to={m.link}
            className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] text-[#4732D3] dark:text-[#9A9A9A] w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
          >
            {m.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-[#cbc9e2] dark:text-[#CCF381] text-base leading-10 tracking-[0.25em] font-[400]">
          SAY HELLO
        </h4>
        <Link
          className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] text-[#4732D3] dark:text-[#9A9A9A] w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
          to="mailto:isholasherifdeen@gmail.com"
        >
          hello@boogiedml.dev
        </Link>
        <Link
          className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] text-[#4732D3] dark:text-[#9A9A9A] w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
          to="mailto:isholasherifdeen@gmail.com"
        >
          t.me/boogiedml
        </Link>
        <div className="text-lg sm:text-[15px] text-[#4732D3] dark:text-[#9A9A9A] font-outfit flex gap-10 mt-20 sm:mt-8">
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href="https://twitter.com/boogiedml"
            target="_blank"
          >
            TW
          </a>
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href="https://github.com/boogiedml"
            target="_blank"
          >
            GH
          </a>
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href=""
            target="_blank"
          >
            LN
          </a>
          <a
            className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
            href="https://www.instagram.com/boogiedml/"
            target="_blank"
          >
            IG
          </a>
        </div>
        <div className="flex justify-between items-center gap-5 mt-10 sm:mt-4">
          <p className="ext-lg sm:text-base text-[#4732D3] dark:text-[#9A9A9A]">
            Dark mode
          </p>
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarMenu;
