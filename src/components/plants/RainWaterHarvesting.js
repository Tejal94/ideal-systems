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

const RainWaterHarvesting = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);

  return (
    <div className="w-full px-4 md:px-2 lg:px-28 2xl:px-36 mt-16">
      <section className="" data-aos="fade-right"
                  data-aos-duration="2000">
        <p className="font-bold text-center leading-10 md:text-left text-3xl 2xl:text-4xl uppercase underline underline-offset-8 text-[#222222] mb-16">
          Rain Water Harvesting
        </p>
        <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
          A Rainwater Harvesting System is a sustainable solution for
          collecting, storing, and using rainwater for various purposes. It
          captures rain from rooftops or other surfaces, stores it in a tank or
          cistern, and uses it as an alternative water source. This system is
          designed to reduce reliance on conventional water sources, lower
          utility costs, and contribute to water conservation efforts. It is
          ideal for both residential and commercial applications, providing a
          clean, eco-friendly water supply.
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
                  Catchment Area: Rainwater is collected from surfaces like
                  rooftops or specially designed catchment areas that channel
                  water toward storage.
                </li>
                <li>
                  Gutters and Downspouts: Water is directed through gutters and
                  downspouts, filtering out large debris before it reaches the
                  storage tank.
                </li>
                <li>
                  First Flush Diverter: Initial rainwater, which may contain
                  impurities, is diverted to ensure only cleaner water enters
                  the storage.
                </li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>
                  Storage Tank/Cistern: Filtered rainwater is stored in a
                  durable tank or cistern made of materials like plastic,
                  concrete, or metal.
                </li>
                <li>
                  Distribution System: A pump or gravity-based system
                  distributes stored water for various applications, from
                  irrigation to domestic use.
                </li>
                <li>
                  Filtration and Treatment (Optional): Additional filtration and
                  treatment can be applied for potable uses, such as drinking or
                  cooking.{" "}
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
                <li>
                  Efficient Water Collection: Captures and stores rainwater from
                  rooftops and other surfaces, optimizing water conservation.
                </li>
                <li>
                  Cost-effective: Reduces reliance on municipal water supply,
                  leading to lower water bills and less strain on public
                  resources.
                </li>
                <li>
                  Low Maintenance: Designed with durable materials and simple
                  components, making it easy to maintain over time.
                </li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>
                  Eco-friendly: Helps in groundwater recharge and reduces
                  surface runoff, supporting sustainable water management.
                </li>
                <li>
                  Versatile Installation: Adaptable to various building types
                  and sizes, from residential homes to large commercial
                  buildings.
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
            value="Application"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[20px] py-10 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>
                Domestic Water Supply
                </li>
                <li>
                Agricultural Use
                </li>
                <li>
                Industrial Processes:
                </li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>
                Groundwater Recharge
                </li>
                <li>Landscape Irrigation</li>
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
                  data-aos-duration="2000" className="font-bold text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
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
          <p className="font-bold text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
            Benefits
          </p>
          <ul className="list-disc list-outside pl-5 text-2xl font-normal">
            <li>Reduces Water Bills</li>
            <li>Supports Water Conservation</li>
            <li>Mitigates Flooding and Erosion</li>
            <li>Enhances Groundwater Levels </li>
            <li>Easy to Operate</li>
            <li>Eco-friendly and Sustainable</li>
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

export default RainWaterHarvesting;
