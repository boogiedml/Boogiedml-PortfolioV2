import React from "react";
import AppWrap from "../wrapper/AppWrap";
import { ProjectCard } from "../components";
import portfolioLogoD from "../assets/isholaG.svg";
import portfolioLogo from "../assets/isholaP.svg";
import { useSelector } from "react-redux";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiInfinity } from "react-icons/gi";
import monaco from "../assets/monaco.png";
import arktively from "../assets/Arktively.svg";
import posxenaDark from "../assets/posxena-dark.svg";
import posxenaLight from "../assets/posxena-light.svg";

const Projects = () => {
  const { theme } = useSelector((state) => state.theme);

  const projects = [
    {
      title: "My Portfolio",
      link: "http://boogiedml.onrender.com/",
      linkDisplay: "boogiedml.com",
      logoImg: theme === "dark" ? portfolioLogoD : portfolioLogo,
      detailPageLink: "http://boogiedml.onrender.com/",
    },
    {
      title: "Posxena",
      detailPageLink: "/work/posxena/",
      logoImg: theme === "dark" ? posxenaDark : posxenaLight,
    },
    {
      title: "Codeloopz",
      link: "https://codeloopz-portfolio-site.vercel.app/",
      linkDisplay: "codeloopz.dev",
      logoElement: (
        <span className="logo group flex items-center font-grotesk text-lg dark:text-white transition-all duration-300 cursor-pointer">
          Codel
          <GiInfinity className="text-3xl animate-spin antialiased group-hover:animate-none" />
          pz
        </span>
      ),
      detailPageLink: "https://codeloopz-portfolio-site.vercel.app/",
    },
    {
      title: "Monaco",
      link: "https://monacoemenu.online/",
      linkDisplay: "monaco.com",
      logoImg: monaco,
      detailPageLink: "https://monacoemenu.online/",
    },
    {
      title: "Arktively",
      link: "https://arktively.com",
      linkDisplay: "arktively.com",
      logoImg: arktively,
      detailPageLink: "https://arktively.com",
    },
    {
      title: "Pokemón",
      link: "https://pokemon-vetw.onrender.com/",
      linkDisplay: "pokemón.com",
      logoImg:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*O4T4S2yqbgOpm9hzC2CxzQ.png",
      detailPageLink: "https://pokemon-vetw.onrender.com/",
    },
  ];

  return (
    <section className="relative p-2 mt-6 md:mt-10 lg:mt-16">
      <div className="header pb-5 text-[#474747] text-center cursor-default">
        <h3 className="text-2xl xl:text-3xl max-w-2xl mx-auto font-semibold dark:text-white mb-6">
          <span className="opacity-70">/</span>
          work
          <span className="opacity-70">.</span>
        </h3>
        <p className="text-base lg:text-lg xl:text-xl font-outfit font-[350]">
          Selected work I've taken on in the past.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:my-20">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title + i}
            title={p.title}
            link={p.link}
            linkDisplay={p.linkDisplay}
            logoImg={p.logoImg}
            logoElement={p.logoElement}
            detailPageLink={p.detailPageLink}
          />
        ))}
      </div>
    </section>
  );
};

export default AppWrap(Projects, "projects", "min-h-screen bg-[#f5f4fc]");
