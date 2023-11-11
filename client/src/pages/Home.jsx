import React from "react";

import {
  About,
  Boogiedml,
  Contact,
  Footer,
  Navbar,
  Skills,
} from "../containers";
import { Clock, SkillsSlide } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Boogiedml />
      <About />
      <Skills />
      {/* <SkillsSlide /> */}
      <Contact />
      <Footer />
      {/* <Clock /> */}
    </div>
  );
};

export default Home;
