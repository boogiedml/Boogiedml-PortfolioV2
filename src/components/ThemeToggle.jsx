import React, { useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../redux/features/themeSlice";
import PropTypes from "prop-types";

const ThemeToggle = ({ styles }) => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    theme === "light" ? dispatch(darkMode()) : dispatch(lightMode());
  };

  return (
    <div
      onClick={handleToggleTheme}
      className={`${styles} cursor-pointer text-[#4732D3] dark:text-white hover:rotate-45 transition-all duration-500 transform`}
    >
      {theme === "dark" ? <HiSun size={23} /> : <HiMoon size={23} />}
    </div>
  );
};

ThemeToggle.propTypes = {
  styles: PropTypes.string,
};

export default ThemeToggle;
