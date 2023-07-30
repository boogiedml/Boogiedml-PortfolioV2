import React from "react";
import AppWrap from "../wrapper/AppWrap";
import {
  ProjectContactSection,
  ProjectDetails,
  ProjectImageSwipe,
} from "../containers";
import posL from "../assets/pos/pos.light.png";
import posD from "../assets/pos/pos.dark.png";
import pos1 from "../assets/pos/pos1.png";
import pos2 from "../assets/pos/pos2.png";
import pos3 from "../assets/pos/pos3.png";
import pos4 from "../assets/pos/pos4.png";
import pos5 from "../assets/pos/pos5.png";
import pos6 from "../assets/pos/pos6.png";
import pos7 from "../assets/pos/pos7.png";
import pos8 from "../assets/pos/pos8.png";
import pos9 from "../assets/pos/pos9.png";
import { ProjectName } from "../components";

const Pos = () => {
  return (
    <div className="project">
      <div>
        <ProjectName name="POS.com" />
        <ProjectImageSwipe
          imageArr={[
            posL,
            posD,
            pos1,
            pos2,
            pos3,
            pos4,
            pos5,
            pos6,
            pos7,
            pos8,
            pos9,
          ]}
        />
        <ProjectDetails
          paragraphArr={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias ut itaque quisquam laboriosam porro, alias illo accusantium exercitationem, numquam odit! Quas eius qui quae. Nulla libero sapiente eligendi eaque.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias ut itaque quisquam laboriosam porro, alias illo accusantium exercitationem, numquam odit! Quas eius qui quae. Nulla libero sapiente eligendi eaque.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias ut itaque quisquam laboriosam porro, alias illo accusantium exercitationem, numquam odit! Quas eius qui quae. Nulla libero sapiente eligendi eaque.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias ut itaque quisquam laboriosam porro, alias illo accusantium exercitationem, numquam odit! Quas eius qui quae. Nulla libero sapiente eligendi eaque.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias ut itaque quisquam laboriosam porro, alias illo accusantium exercitationem, numquam odit! Quas eius qui quae. Nulla libero sapiente eligendi eaque.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias ut itaque quisquam laboriosam porro, alias illo accusantium exercitationem, numquam odit! Quas eius qui quae. Nulla libero sapiente eligendi eaque.",
          ]}
        />
      </div>
      <ProjectContactSection />
    </div>
  );
};

export default AppWrap(Pos, "projects", "min-h-screen");
