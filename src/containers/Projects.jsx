import React from "react";
import AppWrap from "../wrapper/AppWrap";
import { ProjectCard } from "../components";
import portfolioLogoD from "../assets/isholaG.svg";
import portfolioLogo from "../assets/isholaP.svg";
import { useSelector } from "react-redux";
import { RiSecurePaymentLine } from "react-icons/ri";

const Projects = () => {
  const { theme } = useSelector((state) => state.theme);

  const projects = [
    {
      title: "My Portfolio",
      link: "http://boogiedml.onrender.com/",
      linkDisplay: "boogiedml.com",
      logoImg: theme === "dark" ? portfolioLogoD : portfolioLogo,
    },
    {
      title: "POS.com",
      logoElement: (
        <div className="flex gap-4 items-center dark:text-white">
          <RiSecurePaymentLine size={27} />
          <h2 className="text-lg">POS.com</h2>
        </div>
      ),
    },
  ];

  return (
    <section className="relative p-2 mt-6 md:mt-10 lg:mt-16">
      <div className="header pb-5 text-[#474747] text-center cursor-default">
        <h3 className="text-2xl lg:text-3xl max-w-2xl mx-auto font-semibold dark:text-white mb-6">
          <span className="opacity-70">/</span>
          work
          <span className="opacity-70">.</span>
        </h3>
        <p className="text-base md:text-lg lg:text-xl font-outfit font-[350]">
          Selected work I've taken on in the past.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title + i}
            title={p.title}
            link={p.link}
            linkDisplay={p.linkDisplay}
            logoImg={p.logoImg}
            logoElement={p.logoElement}
          />
        ))}
      </div>
    </section>
  );
};

export default AppWrap(Projects, "projects", "min-h-screen bg-[#f5f4fc]");
