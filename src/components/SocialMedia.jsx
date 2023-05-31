import React from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";

const SocialMedia = () => (
  <div className="w-fit hidden md:flex flex-col gap-6 text-gray-600 dark:text-[#9A9A9A] absolute bottom-10 left-16">
    <a
      href="https://github.com/boogiedml"
      className="hover:text-white transition-all duration-300"
      target="_blank"
    >
      <div>
        <TbBrandGithub size={20} />
      </div>
    </a>
    <a
      href="https://www.instagram.com/boogiedml/"
      className="hover:text-white transition-all duration-300"
      target="_blank"
    >
      <div>
        <TbBrandInstagram size={20} />
      </div>
    </a>
    <a
      href="https://twitter.com/boogiedml"
      className="hover:text-white transition-all duration-300"
      target="_blank"
    >
      <div>
        <TbBrandTwitter size={20} />
      </div>
    </a>
    <a
      href="https://facebook.com/sherifdeen.ishola.3"
      className="hover:text-white transition-all duration-300"
      target="_blank"
    >
      <div>
        <FiLinkedin size={20} />
      </div>
    </a>
  </div>
);

export default SocialMedia;
