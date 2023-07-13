import React from "react";
import logo from "../assets/isholaP.svg";
import logoD from "../assets/isholaW.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { openSetting } from "../redux/features/appSettingSlice";

const Nav = ({ styles }) => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`dark:bg-transparent w-full flex justify-between items-center py-8 px-6 sm:px-10 md:px-20 ${styles}`}
    >
      <Link to="/">
        <img
          className="w-20 md:w-24"
          src={theme === "dark" ? logoD : logo}
          alt=""
        />
      </Link>
      <div
        onClick={() => dispatch(openSetting())}
        className="block md:hidden border-[2px] bg-transparent text-[#4732D3] border-[#4732D3] dark:border-[#A1A3A5] dark:text-[#A1A3A5] p-2 rounded-full cursor-pointer text-lg hover:transform hover:rotate-90 transition-all duration-500"
      >
        <FiSettings />
      </div>
    </div>
  );
};

export default Nav;
