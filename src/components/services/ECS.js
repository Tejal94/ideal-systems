import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import ecs1 from "../../assets/plants/ecs1.webp";
import ecs2 from "../../assets/plants/ecs2.webp";
import ecs3 from "../../assets/plants/ecs3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dialog, DialogContent } from "../ui/dialog";
import ModalForm from "../../components/ModalForm";

const ECS = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row mt-8 lg:mt-12 2xl:mt-12">
        <section className="w-full mt-0 md:mt-12 md:w-1/2">
          <div className="w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              loop={true}
            >
              <SwiperSlide className="rounded-lg ">
                <img src={ecs1} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={ecs2} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={ecs3} className="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section
          className="w-full md:w-1/2 md:pl-16 pr-4"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <p className="font-bold text-3xl mt-2 text-[#222222]">
            Erection Commissioning Service
          </p>
          {/* <p className='font-normal text-lg mt-2'>Approx. price: <span className='font-bold text-[#0231A8]'>&#8377; 7 Lakhs/plant</span></p> */}

          <p className="font-semibold text-lg mt-4">Product details</p>
          <table className="text-gray-500 mt-2 w-full">
            <tr className="border border-gray-300">
              <td className="p-2">Work Location</td>
              <td>Pan India</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Capacity / Size</td>
              <td>10 KLD TO 100 MLD</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Type</td>
              <td>All types of Water Treatment Plants</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Applications</td>
              <td>Commercial, Industrial</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Type</td>
              <td>Erection Commissioning Service</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Location</td>
              <td>On-Site</td>
            </tr>
          </table>
          <p className="my-5 text-lg">
            Backed by a team of qualified professionals, we are engaged in
            providing our clients Erection Commissioning Service. We are backed
            by skilled professionals who have rich industry and excellent domain
            knowledge. These professionals are responsible and understand the
            varied requirements of our clients and endeavor to meet the same. In
            addition to this, these services are rendered for different items
            such as Turbines, Generators, Compressors, Gear Boxes & Pumps,
            Fertilizers, Refineries and other industries.
          </p>

          <div className="w-full mt-4 flex justify-start">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#0231A8] w-48 p-2 rounded-lg self-center text-white header-button px-6 py-2.5 font-semibold text-center"
            >
              Get a Quote
            </button>
          </div>
        </section>
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-[900px]">
          <ModalForm setShowForm={setShowForm} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ECS;
