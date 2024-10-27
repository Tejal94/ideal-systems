import React from 'react';
import { useEffect, useState, useRef } from 'react';
import HomeCarousel1 from "../assets/banner/banner-home-11.jpg";
import HomeCarousel2 from "../assets/banner/banner-home-21.jpg";
import HomeCarousel3 from "../assets/banner/banner-home-31.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";

const slides = [HomeCarousel1, HomeCarousel2, HomeCarousel3];

const HeroCarousel = () => {
  return (
    <div className="w-full ">
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}        
        speed={1000}     
        autoplay={{
          delay: 3000,            
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroCarousel