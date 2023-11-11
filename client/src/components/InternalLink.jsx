import React from "react";
import { Link } from "react-router-dom";

const InternalLink = ({ text, link }) => {
  return (
    <span className="w-fit hover:transform hover:-translate-x-2 transition-all duration-300">
      <Link
        className="text base md:text-md xl:text-lg font-[400] text-[#CCF381] dark:text-[#9A9A9A] font-outfit"
        to={link}
      >
        {text}
      </Link>
    </span>
  );
};

export default InternalLink;
