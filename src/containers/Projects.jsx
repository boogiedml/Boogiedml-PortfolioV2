import React from "react";
import AppWrap from "../wrapper/AppWrap";
import { ProjectCard, SectionHeader } from "../components";

const Projects = () => {
  return (
    <section className="relative p-2 mt-6 md:mt-10 lg:mt-16">
      <SectionHeader sectionTitle="Side Projects" idName="projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default AppWrap(Projects, "projects", "min-h-screen");
