import React from "react";
import { Nav } from "../src/components";
import { Footer } from "../src/containers";

const ProjectLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default ProjectLayout;
