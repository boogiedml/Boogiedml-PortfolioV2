import React from "react";
import { ButtonLink } from "../components";
import logo from "../assets/isholaG.svg";
import logoD from "../assets/isholaW.svg";
import { useDispatch, useSelector } from "react-redux";
import { openSetting } from "../redux/features/appSettingSlice";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#4732D3] dark:bg-transparent w-full flex justify-between items-center py-8 px-6 sm:px-10 md:px-20">
      <img
        className="w-20 md:w-24"
        src={theme === "dark" ? logoD : logo}
        alt=""
      />
      <div className="hidden sm:block">
        <ButtonLink
          link="mailto:isholasherifdeen@gmail.com"
          text="Let's Talk"
          styles="bg-transparent border-[#CCF381] text-[#CCF381]"
        />
      </div>
      <div
        onClick={() => dispatch(openSetting())}
        className="block md:hidden border-[2px] bg-transparent border-[#CCF381] dark:border-[#A1A3A5] text-[#CCF381] dark:text-[#A1A3A5] p-2 rounded-full cursor-pointer text-lg hover:transform hover:rotate-90 transition-all duration-500"
      >
        <FiSettings />
      </div>
    </div>
  );
};

export default Navbar;
