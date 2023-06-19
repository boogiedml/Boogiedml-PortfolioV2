import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const SkillsSlide = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 1500,
      }}
      spaceBetween={50}
      slidesPerView={3}
      className="lg:hidden font-outfit text-base text-center bg-[#CCF381] dark:bg-[#1A1A1A] text-[#4732D3] dark:text-[#9A9A9A] border-t-[1px] border-b-[1px] border-[#3D155F] dark:border-[#242424]"
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
  );
};

export default SkillsSlide;
