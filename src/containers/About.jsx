import React from "react";
import { useSelector } from "react-redux";

import AppWrap from "../wrapper/AppWrap";
import ux from "../assets/constants/ux.svg";
import uxL from "../assets/constants/uxLight.svg";
import app from "../assets/constants/app.svg";
import appL from "../assets/constants/appLight.svg";
import design from "../assets/constants/design.svg";
import designL from "../assets/constants/designLight.svg";
import dev from "../assets/constants/dev.svg";
import devL from "../assets/constants/devLight.svg";
import { SectionHeader } from "../components";

const About = () => {
  const { theme } = useSelector((state) => state.theme);

  const abtArr = [
    {
      title: "UX",
      text: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
      img: theme === "dark" ? ux : uxL,
    },
    {
      title: "Web App",
      text: "Transforming ideas into exceptional web app experiences.",
      img: theme === "dark" ? app : appL,
    }, 
    {
      title: "Design & Creative",
      text: "Crafting visually stunning designs that connect with your audience.",
      img: theme === "dark" ? design : designL,
    },
    {
      title: "Development",
      text: " Bringing your vision to life with the latest technology and design trends.",
      img: theme === "dark" ? dev : devL,
    },
  ];

  return (
    <section className="relative p-2 mt-6 md:mt-10 lg:mt-16">
      <SectionHeader
        sectionTitle="Partnering with brands and agencies to deliver meaningful and
          impactful outcomes."
        idName="about"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        {abtArr.map((a, i) => (
          <div
            key={`${a.title} ${i}`}
            className="px-5 pt-40 pb-8 m-2 bg-white dark:bg-[#1A1A1A] text-[#4732D3] dark:text-[#9A9A9A] border-b-2 dark:border-[1px] border-[#4732D3] dark:border-[#242424]"
          >
            <img style={{ color: "blue" }} src={a.img} alt={a.title} />
            <h3 className="text-lg my-4 font-outfit font-normal leading-tight bg-gradient-to-r from-[#4732D3] dark:from-[#9A9A9A] to-[#4732D3] dark:to-zinc-700 bg-clip-text text-transparent">
              {a.title}
            </h3>
            <p className="text-sm font-outfit font-thin">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppWrap(About, "about", "min-h-screen");
