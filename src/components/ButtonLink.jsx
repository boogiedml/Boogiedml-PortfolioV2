import React from "react";

const ButtonLink = ({ link, text, onClick }) => {
  return (
    <a
      href={link}
      className="font-outfit text-base bg-[#1A1A1A] text-[#9A9A9A] border-[1px] border-[#242424] py-3 px-10"
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default ButtonLink;
