import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperButtons } from "../components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ProjectImageSwipe = ({ imageArr }) => {
  const pagination = {
    clickable: true,
    // dynamicBullets: true,
  };

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 10000 }}
      pagination={pagination}
    >
      {imageArr?.map((image, i) => (
        <SwiperSlide key={i}>
          <img src={image} alt="project__img" />
        </SwiperSlide>
      ))}
      <SwiperButtons />
    </Swiper>
  );
};

export default ProjectImageSwipe;
