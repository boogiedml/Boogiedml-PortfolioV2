import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import AppWrap from "../wrapper/AppWrap";
import { SkillImg, WordCloud } from "../components";
import jsDark from "../assets/javascript-dark.svg";
import nodeDark from "../assets/node-dark.svg";
import reactDark from "../assets/react-dark.svg";
import htmlDark from "../assets/html-dark.svg";

const Skills = () => {
  return (
    <>
      <section className="relative p-2 mt-6 md:mt-10 lg:mt-16">
        <div className="pb-5 text-center">
          <h3 className="text-3xl max-w-2xl mx-auto font-outfit font-normal leading-tight bg-gradient-to-r from-[#9A9A9A] to-zinc-700 bg-clip-text text-transparent">
            My Skillsets
          </h3>
        </div>
        <div className="flex justify-around items-center my-32">
          <SkillImg src={htmlDark} alt="" />
          <SkillImg src={jsDark} alt="" />
          <SkillImg src={reactDark} alt="" />
          <SkillImg src={nodeDark} alt="" />
        </div>
        <WordCloud />
      </section>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={3}
        className="lg:hidden font-outfit text-base text-center bg-[#9A9A9A] dark:bg-[#1A1A1A] dark:text-[#9A9A9A] border-[1px] border-[#242424]"
      >
        <SwiperSlide className="w-full h-full py-20">HTML5</SwiperSlide>
        <SwiperSlide className="w-full h-full py-20">SASS</SwiperSlide>
        <SwiperSlide className="w-full h-full py-20">CSS3</SwiperSlide>
        <SwiperSlide className="w-full h-full py-20">Redux</SwiperSlide>
        <SwiperSlide className="w-full h-full py-20">Tailwind</SwiperSlide>
        <SwiperSlide className="w-full h-full py-20">MongoDB</SwiperSlide>
        <SwiperSlide className="w-full h-full py-20">Bootstrap</SwiperSlide>
        <SwiperSlide className="w-full h-full py-20">EJS</SwiperSlide>
        <SwiperSlide className="w-full h-full py-20">ES6</SwiperSlide>
      </Swiper>
    </>
  );
};

export default AppWrap(Skills, "skills", "min-h-screen");
