import React from "react";
import { CopyRight, Link } from "../components";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <section className="bg-[#3D155F] dark:bg-transparent">
      <div className="py-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36">
        <hr className="hidden dark:block border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-[#242424]" />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-end gap-20 sm:gap-40 md:gap-56 mx-4 sm:mx-8 md:mx-8]16 lg:mx-24 xl:mx-36 my-28">
        <div className="flex flex-col gap-6 w-fit">
          <h4 className="text-[#cbc9e2] dark:text-[#CCF381] text base md:text-md xl:text-lg leading-10 tracking-[0.25em] font-light">
            SAY HELLO
          </h4>
          <Link
            text="hello@boogiedml.dev"
            link="mailto:isholasherifdeen@gmail.com"
          />
          <Link
            text="t.me/boogiedml"
            link="mailto:isholasherifdeen@gmail.com"
          />
        </div>
        <div className="h-fit flex flex-col gap-6">
          {location.pathname === "/" ? (
            <Link text="My Work" link="/work/" />
          ) : (
            <Link text="Home" link="/" />
          )}
          <Link text="My Résumé" link="mailto:isholasherifdeen@gmail.com" />
        </div>
      </div>
      <div className="py-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36">
        <hr className="border-t-0 border-l-0 border-r-0 border-b-[0.5px] dark:border-b-[1.5px] border-[#CCF381] dark:border-[#242424]" />
      </div>
      <div className="py-4 mx-4 sm:mx-8 md:mx-8]16 lg:mx-24 xl:mx-36 flex flex-col-reverse md:flex-row justify-between">
        <CopyRight />
      </div>
    </section>
  );
};

export default Footer;
