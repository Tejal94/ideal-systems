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
import PlantsGalleryItemOne from "../../assets/plants/plants-1.svg";
import PlantsGalleryItemTwo from "../../assets/plants/plants-2.svg";
import PlantsGalleryItemThree from "../../assets/plants/plants-3.svg";
import PlantsGalleryItemFour from "../../assets/plants/plants-4.svg";
import btp1 from "../../assets/plants/btp1.webp";
import btp2 from "../../assets/plants/btp2.webp";
import btp3 from "../../assets/plants/btp3.webp";
import wtp1 from "../../assets/plants/wtp10.webp";
import wtp2 from "../../assets/plants/wtp11.webp";
import wtp3 from "../../assets/plants/wtp12.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dialog, DialogContent } from "../ui/dialog";
import ModalForm from "../../components/ModalForm";

const PIS = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-8 lg:mt-20">
        <section className="w-full md:w-1/2">
          <div className="w-full mt-4 md:mt-12">
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
              <SwiperSlide className="rounded-lg">
                <img src={wtp1} className="w-full 2xl:w-[600px] md:h-[350px]" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[250px] 2xl:w-[350px] md:min-h-[250px]">
                <img src={wtp2} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={wtp3} className="" />
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
            Water Treatment Plant Installation Services
          </p>
          {/* <p className='font-normal text-lg mt-2'>Approx. price: <span className='font-bold text-[#0231A8]'>&#8377; 7 Lakhs/plant</span></p> */}

          <p className="font-semibold text-lg mt-4">Product details</p>
          <table className="text-gray-500 mt-2 w-full">
            <tr className="border border-gray-300">
              <td className="p-2">Minimum Order Quantity</td>
              <td>1 Plant</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Location</td>
              <td>Pan India</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Plant Type</td>
              <td>Commercial</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Applications</td>
              <td>Commercial, Industrial</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Duration </td>
              <td>1 Month</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Mode</td>
              <td>On-Site</td>
            </tr>
          </table>
          <p className="my-5 text-lg">
            We are offering Plant Installation Services. Provide us with your
            raw water test report and the desired output water quality and we
            will design, supply, install and commission water treatment plant in
            time, with auto regeneration system, lasting you a life time. The
            water treatment solution provided by us is a cost effective service
            rendered within the client&#39;s specified time and budget
            constraints.
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

      <div className="flex flex-col md:flex-row mt-8 lg:mt-20">
        <section
          className="w-full md:w-1/2 pr-0 md:pr-8 order-2 md:order-none"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p className="font-bold text-3xl mt-2 text-[#222222]">
            Biological Treatment Plants
          </p>

          <p className="font-semibold text-lg mt-4">Product details</p>
          <table className="text-gray-500 w-full mt-2">
            <tr className="border border-gray-300">
              <td className="p-2">Minimum Order Quantity</td>
              <td>1 Plant</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Application Industry</td>
              <td>Pharmaceutical & Chemicals</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Treatment Technology</td>
              <td>Activated Sludge Process(ASP) </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Capacity </td>
              <td>upto 20 KLD</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Water Pump Power</td>
              <td>0.5 KW </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Automation Grade</td>
              <td>Automatic</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Impurities To Be Removed</td>
              <td>Oil & Grease</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Location</td>
              <td>On-Site</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Delivery Time</td>
              <td>3-4 weeks</td>
            </tr>
          </table>
          <p className="my-5 text-lg">
            We are providing the design, installation, commissioning of MBBR
            based technology, sewage treatment plant of different capacities in
            fabricated as well as in civil.
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
        <section className="w-full order-1 md:order-none p-4 md:w-1/2">
          <div className="w-full pl-0 lg:pl-8">
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
                <img src={btp1} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={btp2} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={btp3} className="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row mt-8 lg:mt-20">
      <section className="w-full p-4 md:w-1/2">
          <div className="w-full pl-0">
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
                <img src={PlantsGalleryItemOne} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={PlantsGalleryItemTwo} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={PlantsGalleryItemThree} className="" />
              </SwiperSlide>
              <SwiperSlide className="ounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={PlantsGalleryItemFour} className="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section
          className="w-full md:w-1/2 pl-0 md:pl-8"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <p className="font-bold text-3xl mt-2 text-[#222222]">
          Sewage Treatment Plant Installations
          </p>

          <p className="font-semibold text-lg mt-4">Product details</p>
          <table className="text-gray-500 w-full mt-2">
            <tr className="border border-gray-300">
              <td className="p-2">Plant Type</td>
              <td>MBBR SBR, ASP, RMBR, ECT</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Minimum Order Quantity</td>
              <td>1</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Industry Application</td>
              <td>Industrial, Commercial, Domestic</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Plant Capacity</td>
              <td>10 KLD TO 100 MLD</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Also Provides</td>
              <td>Water Treatment Plant Designing, Water Treatment Plant Installation, Sewage Treatment Plant Construction</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Location</td>
              <td>Pan India</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Delivery Time</td>
              <td>4 Week</td>
            </tr>
          </table>
          <p className="my-5 text-lg">
            We are offering Plant Installation Services. Provide us with your
            raw water test report and the desired output water quality and we
            will design, supply, install and commission water treatment plant in
            time, with auto regeneration system, lasting you a life time. The
            water treatment solution provided by us is a cost effective service
            rendered within the client&#39;s specified time and budget
            constraints.
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

export default PIS;
