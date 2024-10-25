import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ourCustomersImagesOne, ourCustomersImagesTwo } from "../Constants";
import "swiper/css/autoplay"; 
import "swiper/css";
import "swiper"
import "swiper/css/navigation";
import "swiper/swiper-bundle.css"
import "swiper/react"
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";

const ClientsGrid1 = () => {
  return (
    <div className="w-[96%] ml-[2%] p-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {ourCustomersImagesOne &&
          ourCustomersImagesOne.map((img, index) => (
            <SwiperSlide
              key={index}
              className="shadow-md shadow-[rgba(2, 49, 168, 0.15)] rounded-[30px] p-5 items-center justify-center bg-white m-3 w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]"
            >
            <div className="w-100 h-[120px] flex pt-2 justify-center items-center">
              <img src={img} className="scale-[85%]" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {ourCustomersImagesTwo &&
          ourCustomersImagesTwo.map((img, index) => (
            <SwiperSlide
              key={index}
              className="shadow-md shadow-[rgba(2, 49, 168, 0.15)] rounded-[30px] p-5 justify-center bg-white m-3 w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]"
            >
            <div className="w-100 h-[120px] flex pt-2 justify-center items-center">
              <img src={img} className="scale-[85%]" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ClientsGrid1;
