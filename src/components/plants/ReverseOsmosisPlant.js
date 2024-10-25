import React, { useState } from "react";
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
import RO1 from "../../assets/plants/RO1.svg";
import RO2 from "../../assets/plants/ro2.svg";
import ModalForm from "../../components/ModalForm";
import { Dialog, DialogContent } from "../ui/dialog";

const ReverseOsmosisPlant = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full px-2 md:px-2 lg:px-28 mt-16">
      <section className="">
        <p className="font-bold text-3xl uppercase underline underline-offset-8 text-[#222222] mb-16">
          Reverse Osmosis Plant
        </p>
        <span className="font-normal text-xl text-justify leading-7 capitalize">
          A Reverse Osmosis (RO) plant from WTE is designed to remove dissolved
          solids from water. This technology is used in many industries and
          homes for water purification. The unit includes various components
          like membrane cleaners, inhibitors to prevent scaling, corrosion, and
          biological growth, as well as chemicals to remove chlorine and solid
          particles. This ensures high performance and reliability.
        </span>
        <p className="font-normal text-xl text-justify mt-8 leading-7 capitalize">
          With more than twelve years of experience, we're pioneers in our
          field. We're constantly seeking the latest, most cost-effective
          technologies to meet society's needs effortlessly.
        </p>
      </section>

      <main className="px-2 md:px-16 lg:px-20 2xl:px-60 2xl:mt-12">
        <Tabs defaultValue="The Process">
          <TabsList className="h-16 w-full justify-between mb-12">
            <TabsTrigger
              className="disabled:opacity-100 disabled:data-[state=active]:bg-[#E4F5FF] text-wrap md:text-nowrap text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="The Process"
            >
              Commercial/Institutional RO Plant
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Features"
            >
              Features
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Application"
            >
              Application
            </TabsTrigger>
          </TabsList>

          <TabsContent className="relative flex flex-col " value="The Process">
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg py-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>
                  Purpose: A Commercial/Institutional RO plant is designed to
                  provide purified drinking water for commercial or
                  institutional use
                </li>
                <li>
                  Capacity: These plants are available in various capacities to
                  suit the water demand of different establishments.
                </li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>
                  Installation: Can be installed in kitchens, break rooms, or
                  other suitable locations within commercial or institutional
                  buildings.
                </li>
                <li>
                  Maintenance: Requires regular maintenance, including replacing
                  filters and sanitizing the system to ensure water quality
                </li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button onClick={() => setShowForm(true)} className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Features"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg  py-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>Product and Reject Flow Meters</li>
                <li>Low & High pressure switch</li>
                <li>High rejection TFC membranes</li>
                <li>Heavy duty high pressure tubing</li>
                <li>Pressure gauges</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>Microprocessor based Control Panel</li>
                <li>Powder coated frame</li>
                <li>20 & 5 micron sediment pre-filter</li>
                <li>Stainless Steel Multistage High pressure pump</li>
                <li>FRP pressure vessel</li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button onClick={() => setShowForm(true)} className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Application"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg py-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>Industrial Facilities</li>
                <li>Commercial Buildings</li>
                <li>Residential Buildings</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>Municipal Water Treatment Plants</li>
                <li>Remote Locations</li>
                <li>Disaster Relief Operations</li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button onClick={() => setShowForm(true)} className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <div className="flex flex-col sm:flex-row p-2 md:p-0">
        <section className="w-full md:w-1/2">
          <p className="font-bold text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
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
                <img src={RO1} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={RO2} className="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="w-full md:w-1/2 md:pl-16">
          <p className="font-bold text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
            Benefits
          </p>
          <ul className="list-disc list-outside pl-5 text-2xl font-normal">
            <li>Removes Contaminants</li>
            <li>Improves Water Quality</li>
            <li>Cost-Effective</li>
            <li>Versatile Applications </li>
            <li>Easy Maintenance</li>
            <li>Saves Space</li>
            <li>Improves Taste</li>
            <li>Compliance</li>
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

export default ReverseOsmosisPlant;
