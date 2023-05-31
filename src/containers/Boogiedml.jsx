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
    <div className="relative flex flex-col gap-6 max-w-lg mx-auto my-20 text-center">
      <div className="mx-auto w-60 h-60">
        <img
          className="w-full rounded-full"
          src={theme === "dark" ? sherifdeen : sherifdeenLight}
          alt=""
        />
      </div>
      <div className="absolute -top-6 -left-64 w-96 px-5 py-3 text-left font-outfit text-base bg-[#1A1A1A] text-[#9A9A9A] border-[1px] border-[#242424]">
        <p>
          Sherifdeen Ishola Web Developer Based in Nigeria. A Software Developer
          with entry- level experience, specializing in user interface design,
          application development, data security, and continuous improvement.
        </p>
      </div>
      <div>
        <h3 className="text-4xl font-outfit font-normal leading-tight bg-gradient-to-r from-[#9A9A9A] to-zinc-700 bg-clip-text text-transparent">
          Creating exceptional digital products, brands, and user experiences.
        </h3>
      </div>
      <div className="mt-4">
        <ButtonLink
          link="/"
          text="Download Resume"
          onClick={handleResumeDownload}
        />
      </div>
    </div>
  );
};

export default AppWrap(Boogiedml);
