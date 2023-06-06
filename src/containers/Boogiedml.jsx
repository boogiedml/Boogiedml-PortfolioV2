import React from "react";
import { useSelector } from "react-redux";

import sherifdeen from "../assets/sherifdeen.JPG";
import sherifdeenLight from "../assets/sherifdeenLight.JPG";
import { ButtonLink } from "../components";
import resumePDF from "../../public/01SherifdeenIsholaResume.pdf";
import AppWrap from "../wrapper/AppWrap";

const Boogiedml = () => {
  const { theme } = useSelector((state) => state.theme);

  const handleResumeDownload = () => {
    // window.open(resumePDF, "_blank");
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "01SherifdeenIsholaResume.pdf";
    link.click();
  };

  return (
    <div className="relative flex flex-col gap-6 max-w-lg mx-auto my-0 md:my-8 text-center">
      <div className="mx-auto w-48 h-48 md:w-60 md:h-60">
        <img
          className="w-full rounded-full"
          src={theme === "dark" ? sherifdeen : sherifdeenLight}
          alt=""
        />
      </div>
      <div>
        <p className="text-[#9A9A9A] md:hidden">Hi, I’m Sherifdeen 👋🏾</p>
      </div>
      <div className="absolute hidden md:block -top-14 lg:-top-6 -left-32 lg:-left-64 w-72 lg:w-96 px-5 py-3 text-left font-outfit text-base bg-[#1A1A1A] text-[#9A9A9A] border-[1px] border-[#242424]">
        <p>
          Sherifdeen Ishola Web Developer Based in Nigeria. A Software Developer
          with entry- level experience, specializing in user interface design,
          application development, data security, and continuous improvement.
        </p>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-outfit font-normal leading-tight bg-gradient-to-r from-[#9A9A9A] to-zinc-700 bg-clip-text text-transparent">
          Creating exceptional digital products, brands, and user experiences.
        </h3>
      </div>
      <div className="mt-20 md:mt-4">
        <ButtonLink text="Download Resume" onClick={handleResumeDownload} styles="mx-auto" />
      </div>
    </div>
  );
};

export default AppWrap(Boogiedml, "Boogiedml");
