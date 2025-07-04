"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../../../public/electronics.jpg";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Slide = ({ src }: { src: string }) => {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src={src}
        alt="Carousel slide image"
        fill
        className="h-full w-full object-cover"
      ></Image>
    </AspectRatio>
  );
};

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
          {/* <Image src={img1} alt="carousel slide image" /> */}
        <SwiperSlide>
          <Slide src={"/electronics.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={"/electronics.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={"/electronics.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={"/electronics.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={"/electronics.jpg"} />
        </SwiperSlide>
     
      </Swiper>
    </>
  );
};

export default Carousel;
