import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tab";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import ufp1 from "../../assets/plants/ufp1.svg";
import ufp2 from "../../assets/plants/ufp2.svg";
import ufp3 from "../../assets/plants/ufp3.svg";
import ufp4 from "../../assets/plants/ufp4.svg";
import ModalForm from "../../components/ModalForm";
import { Dialog, DialogContent } from "../ui/dialog";
import AOS from "aos";
import "aos/dist/aos.css";

const UltraFilteration = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);

  return (
    <div className="w-full px-4 md:px-2 lg:px-28 2xl:px-36  mt-16">
      <section className="" data-aos="fade-right"
                  data-aos-duration="2000">
        <p className="font-bold text-center md:text-left leading-10 text-3xl 2xl:text-4xl uppercase underline underline-offset-8 text-[#222222] mb-16">
          Ultra filtration plant
        </p>
        <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
          An Ultrafiltration (UF) plant is a filtration system that uses
          semi-permeable membranes to remove particles, bacteria, and viruses
          from water. It is used for water treatment and can be a standalone
          system or part of a larger treatment process. UF plants has an ability
          to operate at relatively low pressures compared to other membrane
          filtration processes. They are also easy to maintain and operate,
          making them suitable for a wide range of applications.
        </span>
        <p className="font-normal text-xl 2xl:text-[22px] text-justify mt-8 leading-7">
          With more than twelve years of experience, we're pioneers in our
          field. We're constantly seeking the latest, most cost-effective
          technologies to meet society's needs effortlessly.
        </p>
      </section>

      <main className="px-2 md:px-16 lg:px-20 2xl:px-60 lg:mt-10 2xl:mt-12">
        <Tabs defaultValue="The Process">
          <TabsList className="h-16 w-full justify-between mb-12">
            <TabsTrigger
              className="disabled:opacity-100 lg:text-[16px] 2xl:text-[22px] disabled:data-[state=active]:bg-[#E4F5FF] text-wrap md:text-nowrap text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="The Process"
            >
              The Process
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 lg:text-[16px] 2xl:text-[22px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Features"
            >
              Features
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 lg:text-[16px] 2xl:text-[22px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Application"
            >
              Application
            </TabsTrigger>
          </TabsList>

          <TabsContent className="relative flex flex-col " value="The Process">
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[20px] py-10 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>
                  Membrane: Semi-permeable membranes with pore sizes ranging
                  from 0.01 to 0.1 microns are used to separate contaminants
                  from water
                </li>
                <li>
                  Feed Pump: A pump is used to apply pressure to the feed water,
                  forcing it through the membrane.
                </li>
                <li>
                  Pressure Vessel: The membrane is housed in a pressure vessel,
                  which contains the feed water and directs the flow through the
                  membrane.
                </li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>
                  Permeate Collection System: The purified water, or permeate,
                  that passes through the membrane is collected for use.
                </li>
                <li>
                  Concentrate/Reject Collection System: The rejected particles
                  and contaminants are collected and discharged as waste.
                </li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-center md:justify-end">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#0231A8] w-48 p-2 rounded-lg self-center text-white header-button px-6 py-2.5 font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Features"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[20px] py-10 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>High Efficiency Filtration: Removes particles, bacteria, viruses, and other contaminants with precision, providing high-quality purified water.</li>
                <li>Low Operating Pressure: Functions effectively at lower pressures than other membrane systems, reducing energy and operational costs.</li>
                <li>Durable and Long-lasting: Made with high-quality materials designed to withstand rigorous use over time with minimal maintenance.</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
              <li>Easy to Maintain: Simple setup and maintenance requirements make it a reliable solution for various filtration needs.</li>
              <li>Environmentally Friendly: Minimal chemical usage and waste production ensure a sustainable water treatment solution.</li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-center md:justify-end">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#0231A8] w-48 p-2 rounded-lg self-center text-white header-button px-6 py-2.5 font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Application"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[20px] py-10 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>Drinking Water Purification: Ideal for providing safe drinking water by removing harmful contaminants.</li>
                <li>Wastewater Treatment: Effectively treats and recycles wastewater, reducing the environmental impact of discharge.</li>
                <li>Pre-treatment for Reverse Osmosis: Acts as an effective pre-treatment step for RO systems, improving efficiency and extending RO membrane life.</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>Industrial Process Water: Ensures clean and safe water for use in various industrial processes.</li>
                <li>Swimming Pools and Recreational Water</li>
                <li>Disaster Relief Operations</li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-center md:justify-end">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#0231A8] w-48 p-2 rounded-lg self-center text-white header-button px-6 py-2.5 font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <div className="flex flex-col sm:flex-row p-2 md:p-0 gap-0 md:gap-10 2xl:mt-12">
        <section className="w-full md:w-1/2">
          <p data-aos="fade-right"
                  data-aos-duration="2000" className="font-bold text-center md:text-left text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
            Gallery
          </p>

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
                <img src={ufp1} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={ufp2} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={ufp3} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={ufp4} className="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="w-full md:w-1/2 md:pl-16" data-aos="fade-right"
                  data-aos-duration="2000">
          <p className="font-bold text-center md:text-left text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
            Benefits
          </p>
          <ul className="list-disc list-outside pl-5 text-2xl font-normal">
            <li>Effective Filtration</li>
            <li>Highly Efficient</li>
            <li>Cost-Effective</li>
            <li>Versatile Applications </li>
            <li>Easy to Operate</li>
            <li>Consistent Performance</li>
            <li>Removes Contaminants</li>
          </ul>
        </section>
      </div>

      {/* Add Form Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-[900px]">
          <ModalForm setShowForm={setShowForm} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UltraFilteration;
