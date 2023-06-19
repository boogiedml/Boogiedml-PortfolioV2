import React from "react";

const ProjectCard = () => {
  return (
    <main className="cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-300 border-[1px] dark:border-[#242424]">
      <div className="w-full bg-[#f5f4fc] dark:bg-[#9A9A9A] h-[10em] flex items-center justify-center">
        <p className="text-xl text-[#4732D3] dark:text-[#242424] font-robotoCondensed cursor-default">
          <span className="text-2xl">S</span> herifdeen Ishola
        </p>
      </div>
      <div className="w-full p-[2em] bg-white dark:bg-[#242424]">
        <h5 className="text-[#474747] dark:text-[#9A9A9A] text-[1.125em] font-semibold leading-[1.15] tracking-[.1rem]">
          helloTax
        </h5>
        <a
          className="text-[#6b17e6] dark:text-[#CCF381] text-lg leading-10 font-outfit font-light whitespace-pre text-ellipsis"
          href="/"
        >
          app.mmm.com
        </a>
      </div>
    </main>
  );
};

export default ProjectCard;
