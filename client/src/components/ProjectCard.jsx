import React from "react";

const ProjectCard = ({
  title,
  link,
  linkDisplay,
  logoImg,
  logoElement,
  detailPageLink,
}) => {
  return (
    <a href={detailPageLink} className="cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-300 dark:border-[2px] dark:border-[#242424] rounded-[.2rem] shadow-sm">
      <div className="w-full bg-[#F7F7FC] dark:bg-[#161616] h-[10em] flex items-center justify-center rounded-t-[.2rem]">
        {logoElement && (
          <div className="text-base md:text-lg text-[#4732D3] dark:text-[#242424] font-robotoCondensed cursor-default">
            {logoElement}
          </div>
        )}
        {logoImg && (
          <img
            className="w-20 md:w-24 cursor-default"
            src={logoImg}
            alt={title}
          />
        )}
      </div>
      <div
        className={`w-full h-auto p-[2em] bg-white dark:bg-[#242424] rounded-b-[.2rem] ${
          !linkDisplay && "pb-[72px]"
        }`}
      >
        <h5 className="text-[#474747] dark:text-[#9A9A9A] text-[1.125em] font-semibold leading-[1.15] tracking-[.1rem]">
          {title}
        </h5>
        <a
          className="text-[#6b17e6] dark:text-[#CCF381] text-lg leading-10 font-outfit font-light whitespace-pre text-ellipsis"
          href={link}
        >
          {linkDisplay || ""}
        </a>
      </div>
    </a>
  );
};

export default ProjectCard;
