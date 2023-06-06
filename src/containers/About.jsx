import React from "react";

import AppWrap from "../wrapper/AppWrap";
import ux from "../assets/constants/ux.svg";
import app from "../assets/constants/app.svg";
import design from "../assets/constants/design.svg";
import dev from "../assets/constants/dev.svg";

const About = () => {
  return (
    <section className="relative p-2 mt-6 md:mt-10 lg:mt-16">
      <div className="pb-5 text-center">
        <h3 className="text-3xl max-w-2xl mx-auto font-outfit font-normal leading-tight bg-gradient-to-r from-[#9A9A9A] to-zinc-700 bg-clip-text text-transparent">
          Partnering with brands and agencies to deliver meaningful and
          impactful outcomes.
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div className="px-5 pt-40 pb-8 m-2 bg-[#1A1A1A] text-[#9A9A9A] border-[1px] border-[#242424]">
          <img src={ux} alt="" />
          <h3 className="text-lg my-4 font-outfit font-normal leading-tight bg-gradient-to-r from-[#9A9A9A] to-zinc-700 bg-clip-text text-transparent">
            UX
          </h3>
          <p className="text-sm font-outfit font-thin">
            Designing interfaces that are intuitive, efficient, and enjoyable to
            use.
          </p>
        </div>
        <div className="px-5 pt-40 pb-8 m-2 bg-[#1A1A1A] text-[#9A9A9A] border-[1px] border-[#242424]">
          <img src={app} alt="" />
          <h3 className="text-lg my-4 font-outfit font-normal leading-tight bg-gradient-to-r from-[#9A9A9A] to-zinc-700 bg-clip-text text-transparent">
            Web App
          </h3>
          <p className="text-sm font-outfit font-thin">
            Transforming ideas into exceptional web app experiences.
          </p>
        </div>
        <div className="px-5 pt-40 pb-8 m-2 bg-[#1A1A1A] text-[#9A9A9A] border-[1px] border-[#242424]">
          <img src={design} alt="" />
          <h3 className="text-lg my-4 font-outfit font-normal leading-tight bg-gradient-to-r from-[#9A9A9A] to-zinc-700 bg-clip-text text-transparent">
            Design & Creative
          </h3>
          <p className="text-sm font-outfit font-thin">
            Crafting visually stunning designs that connect with your audience.
          </p>
        </div>
        <div className="px-5 pt-40 pb-8 m-2 bg-[#1A1A1A] text-[#9A9A9A] border-[1px] border-[#242424]">
          <img src={dev} alt="" />
          <h3 className="text-lg my-4 font-outfit font-normal leading-tight bg-gradient-to-r from-[#9A9A9A] to-zinc-700 bg-clip-text text-transparent">
            Development
          </h3>
          <p className="text-sm font-outfit font-thin">
            Bringing your vision to life with the latest technology and design
            trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(About, "about", "min-h-screen");
