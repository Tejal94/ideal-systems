import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import TestimonialIcon from "../assets/icons/inverted-coma.svg";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-[#E4F5FF] to-[#E4F5FF] px-2 md:px-20 py-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        loop={true}
        breakpoints={{
            300: {
                slidesPerView: 1,
            spaceBetween: 0,
            },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row h-full md:h-72 bg-gradient-to-r from-[#eaf6fd] to-[#e5f5ff] shadow-xl p-5 mx-5">
            <img
              src={TestimonialIcon}
              className="mx-4 absolute -top-2 left-2 hidden md:block"
            />
            <article className="flex flex-col self-center gap-y-4 md:pl-32">
              <p className="font-bold text-[24px]">Pooja Thakur</p>
              <p className="font-normal text-[20px] text-justify capitalize">
                This company's operations are running smoothly and efficiently,
                water treatment plants performing well. High-quality work. Their
                dedication to excellence is commendable.
              </p>
            </article>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row shadow-xl bg-gradient-to-r from-[#eaf6fd] to-[#e5f5ff] md:h-72 p-5 mx-5">
            <img
              src={TestimonialIcon}
              className="mx-4 absolute scale-50 md:scale-100 -top-2 left-2  hidden md:block"
            />
            <article className="flex flex-col self-center gap-y-4 md:pl-32">
              <p className="font-bold text-[24px]">Rahul Prajapati</p>
              <p className="font-normal text-[20px] text-justify capitalize">
                Most reliable STP manufacturer with best quality. Mr. Nana
                Chaudhary and Mr.Pravin and other staff are very dedicated team
                ,very co-perative and excellent knowledge resulting a fast
                growing company.
              </p>
            </article>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#eaf6fd] to-[#e5f5ff] shadow-xl border md:h-72 p-5 mx-5">
            <img
              src={TestimonialIcon}
              className="mx-4 absolute scale-50 md:scale-100 -top-2 -left-1  hidden md:block"
            />
            <article className="flex flex-col self-center gap-y-4 md:pl-32">
              <p className="font-bold text-[24px]">
                Glotech fire equipments & services Pvt ltd.
              </p>
              <p className="font-normal text-[20px] text-justify capitalize">
                The plant is working satisfactorily & meeting the desired
                standards & targets. They really have a team of dedicated
                professionals. The fabrication and choice of equipment proves
                that they have expertise of the subject.
              </p>
            </article>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:h-72 bg-gradient-to-r from-[#eaf6fd] to-[#e5f5ff] shadow-xl p-5 mx-5 flex-col md:flex-row">
            <img
              src={TestimonialIcon}
              className="mx-4 absolute scale-50 md:scale-100 -top-2 left-2  hidden md:block"
            />
            <article className="flex flex-col self-center gap-y-4 md:pl-32">
              <p className="font-bold text-[24px]">Rakesh Thakurdesai</p>
              <p className="font-normal text-[20px] text-justify capitalize">
                They are very efficient , they are always committed for giving
                quality plants with perfect engineering. They stick to their
                delivery schedule.
              </p>
            </article>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
