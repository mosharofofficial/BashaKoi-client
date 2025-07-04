"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
      slidesPerView={1}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-4xl h-[20rem]">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-4xl h-[20rem]">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-4xl h-[20rem]">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-4xl h-[20rem]">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-4xl h-[20rem]">Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-4xl h-[20rem]">Slide 6</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-4xl h-[20rem]">Slide 7</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-4xl h-[20rem]">Slide 8</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-4xl h-[20rem]">Slide 9</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
