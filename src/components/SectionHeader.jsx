import React from "react";

const SectionHeader = ({ sectionTitle, idName }) => {
  const textColor =
    idName === "about" || idName === "projects"
      ? "from-[#4732D3] to-[#4732D3]"
      : idName === "skills"
      ? "from-[#CCF381] to-[#CCF381]"
      : "";

  return (
    <div className="pb-5 text-center">
      <h3
        className={`text-3xl max-w-2xl mx-auto font-outfit font-normal leading-tight bg-gradient-to-r ${textColor} dark:from-[#9A9A9A] dark:to-zinc-700 bg-clip-text text-transparent`}
      >
        {sectionTitle}
      </h3>
    </div>
  );
};

export default SectionHeader;
