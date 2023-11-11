import React from "react";
import { useSelector } from "react-redux";

import AppWrap from "../wrapper/AppWrap";
import { SectionHeader, SkillImg, WordCloud } from "../components";
import jsDark from "../assets/javascript-dark.svg";
import js from "../assets/javascript.svg";
import nodeDark from "../assets/node-dark.svg";
import node from "../assets/node.svg";
import reactDark from "../assets/react-dark.svg";
import react from "../assets/react.svg";
import htmlDark from "../assets/html-dark.svg";
import html from "../assets/html.svg";

const Skills = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <section className="relative p-2 mt-6 md:mt-10 lg:mt-16">
      <SectionHeader sectionTitle="My Skillsets" idName="skills" />
      <div className="flex justify-around items-center my-32">
        <SkillImg src={theme === "dark" ? htmlDark : html} alt="" />
        <SkillImg src={theme === "dark" ? jsDark : js} alt="" />
        <SkillImg src={theme === "dark" ? reactDark : react} alt="" />
        <SkillImg src={theme === "dark" ? nodeDark : node} alt="" />
      </div>
      <WordCloud />
    </section>
  );
};

export default AppWrap(Skills, "skills", "md:min-h-screen");
