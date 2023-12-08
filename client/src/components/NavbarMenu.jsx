import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import resumePDF from "../assets/01SherifdeenIsholaResume.pdf";

const NavbarMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const screenWidth = window.innerWidth;
  const smallScreen = screenWidth < 640;
  const menuRef = useRef(null);
  const handleResumeView = () => {
    window.open(resumePDF, "_blank");
  };

  const menu = [
    {
      name: location.pathname === "/" ? "My Work" : "Home",
      link: location.pathname === "/" ? "/work/" : "/",
    },
    { name: "My Résumé", onClick: handleResumeView },
  ];

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [menuOpen]);

  return (
    <motion.div
      ref={menuRef}
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
      className="nav__menu dark:shadow-none fixed right-0 top-0 sm:right-6 md:right-14 sm:top-6 bg-white dark:bg-[#1A1A1A] w-full sm:w-[300px] md:w-[350px] h-screen sm:h-auto p-14 sm:p-10 md:p-12 pt-40 sm:pt-16 z-[100] dark:border-[1px] dark:border-[#242424]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
        className="flex flex-col gap-4 mb-20 sm:mb-8"
      >
        {menu.map((m, i) => (
          <Link
            key={i}
            to={m.link}
            onClick={m.onClick && m.onClick}
            className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] text-[#4732D3] dark:text-[#9A9A9A] w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
          >
            {m.name}
          </Link>
        ))}
      </motion.div>
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", delay: 0.5, duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h4 className="text-[#cbc9e2] dark:text-[#CCF381] text-base leading-10 tracking-[0.25em] font-[400]">
            SAY HELLO
          </h4>
          <a
            className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] text-[#4732D3] dark:text-[#9A9A9A] w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
            href="mailto:isholasherifdeen@gmail.com"
          >
            hello@boogiedml.dev
          </a>
          <a
            className="text-lg sm:text-base font-[400] relative cursor-pointer tracking-[1px] text-[#4732D3] dark:text-[#9A9A9A] w-fit hover:transform hover:-translate-x-2 transition-all duration-300"
            href="https://t.me/boogiedml"
          >
            t.me/boogiedml
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", delay: 1, duration: 0.5 }}
          className="text-lg sm:text-[15px] text-[#4732D3] dark:text-[#9A9A9A] font-outfit flex gap-10 mt-20 sm:mt-8"
        >
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
            href="https://www.linkedin.com/in/sherifdeen-ishola-mern-stack-web-developer/"
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", delay: 1, duration: 0.5 }}
          className="flex justify-between items-center gap-5 mt-10 sm:mt-4"
        >
          <p className="ext-lg sm:text-base text-[#4732D3] dark:text-[#9A9A9A]">
            Dark mode
          </p>
          <ThemeToggle />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavbarMenu;
