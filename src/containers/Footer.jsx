import React from "react";
import { ButtonLink, CopyRight } from "../components";
import { TbMail } from "react-icons/tb";

const Footer = () => {
  return (
    <section>
      <div className="py-4 mx-4 sm:mx-8 md:mx-8]16 lg:mx-24 xl:mx-36">
        <hr className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-[#242424]" />
      </div>
      <div className="mx-4 sm:mx-8 md:mx-8]16 lg:mx-24 xl:mx-36 my-28 text-center">
        <h3 className="text-4xl md:text-5xl lg:text-6xl max-w-lg mx-auto font-outfit font-normal leading-tight bg-gradient-to-r from-[#9A9A9A] to-zinc-700 bg-clip-text text-transparent">
          Tell me about your next project
        </h3>
        <div className="mt-16 mx-auto">
          <ButtonLink
            link="/"
            text="Get in touch"
            icon={<TbMail />}
            styles="mx-auto"
          />
        </div>
      </div>
      <div className="py-4 mx-4 sm:mx-8 md:mx-8]16 lg:mx-24 xl:mx-36">
        <hr className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-[#242424]" />
      </div>
      <div className="py-4 mx-4 sm:mx-8 md:mx-8]16 lg:mx-24 xl:mx-36 flex flex-col-reverse md:flex-row justify-between">
        <CopyRight />
      </div>
    </section>
  );
};

export default Footer;
