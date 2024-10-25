import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tab";
import PlantsGalleryItemOne from "../../assets/plants/plants-1.svg"
import PlantsGalleryItemTwo from "../../assets/plants/plants-2.svg"
import PlantsGalleryItemThree from "../../assets/plants/plants-3.svg"
import PlantsGalleryItemFour from "../../assets/plants/plants-4.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay"; 
import "swiper/css";
import "swiper"
import "swiper/css/navigation";
import "swiper/swiper-bundle.css"
import "swiper/react"
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import ModalForm from "../../components/ModalForm";
import { Dialog, DialogContent} from  "../ui/dialog"

const SewageTreatmentPlant = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full px-2 md:px-2 lg:px-28 mt-16">
      <section className="">
        <p className="font-bold text-2xl md:text-3xl uppercase underline underline-offset-8 text-[#222222] mb-16">
          Sewage treatment plant
        </p>
        <span className="font-normal text-xl text-justify leading-7 capitalize">
          These are facilities designed to treat sewage and wastewater from
          residential, commercial, and industrial sources before it is released
          back into the environment or reused. STPs use a combination of
          physical, chemical, and biological processes to remove contaminants
          and produce treated effluent that meets environmental regulations. The
          treated water can be discharged into water bodies or reused for
          purposes like irrigation or industrial processes.{" "}
        </span>
        <p className="font-normal text-xl text-justify mt-8 leading-7 capitalize">
          With more than twelve years of experience, we're pioneers in our
          field. We're constantly seeking the latest, most cost-effective
          technologies to meet society's needs effortlessly.
        </p>
      </section>

      <p className="font-bold text-2xl md:text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-16">
        Sewage treatment plants we offer
      </p>

      <main className="px-2 md:px-16 lg:px-20 2xl:px-60 2xl:mt-12">
        <Tabs defaultValue="The Process">
          <TabsList className="h-24 md:h-16 w-full justify-between items-center mb-12">
            <TabsTrigger
              className="disabled:opacity-100 h-[100%] disabled:data-[state=active]:bg-[#E4F5FF] text-black w-1/4 text-wrap md:text-nowrap py-2 disabled:data-[state=active]:text-primary-500"
              value="The Process"
            >
              Containerized Sewage treatment plant
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 h-[100%] disabled:data-[state=active]:border-b-primary-500 text-black w-1/4 text-wrap md:text-nowrap  py-2 disabled:data-[state=active]:text-primary-500"
              value="Features"
            >
              Prefabricated Sewage treatment plant
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 h-[100%] disabled:data-[state=active]:border-b-primary-500 text-black w-1/4 text-wrap md:text-nowrap  py-2 disabled:data-[state=active]:text-primary-500"
              value="Application"
            >
              Civil Sewage treatment plant
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 h-[100%] disabled:data-[state=active]:border-b-primary-500 text-black w-1/4 text-wrap md:text-nowrap  py-2 disabled:data-[state=active]:text-primary-500"
              value="Package"
            >
              Packege Sewage treatment plant
            </TabsTrigger>
          </TabsList>

          <TabsContent className="relative flex flex-col " value="The Process">
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg py-10 ">
              <p>
                Containerized sewage treatment plants are essentially standard
                shipping containers that have been modified to house a complete
                sewage treatment system inside. These systems are designed to be
                easily transportable, making them ideal for situations where
                temporary or mobile wastewater treatment solutions are needed,
                such as construction sites, mining camps, military camps, or
                disaster relief operations.
              </p>
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
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg  py-10">
              <p>
                Prefabricated sewage treatment plants, also known as modular or
                package plants, are built off-site in a controlled environment
                and then transported to the site for installation. This method
                offers several advantages over traditional on-site construction
              </p>
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
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg py-10">
              <p>
                Civil sewage treatment plants (STPs) refer to sewage treatment
                systems that are primarily constructed using civil engineering
                materials and techniques. These plants are designed to treat
                wastewater from various sources, such as residential,
                commercial, and industrial buildings, before it is discharged
                back into the environment.
              </p>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button onClick={() => setShowForm(true)} className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Package"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg py-10">
              <p>
                A packaged sewage treatment plant (STP) is a compact,
                pre-engineered system used for the treatment of sewage and
                wastewater. Unlike traditional STPs that are built from scratch
                on-site, packaged STPs are factory-assembled and delivered to
                the site ready for installation.{" "}
              </p>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button onClick={() => setShowForm(true)} className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <div className="flex flex-col sm:flex-row">
        <section className="w-1/2">
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
        
            <SwiperSlide
              className="rounded-lg "
            >
              <img src={PlantsGalleryItemOne} className="" />
            </SwiperSlide>
            <SwiperSlide
              className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]"
            >
              <img src={PlantsGalleryItemTwo} className="" />
            </SwiperSlide>
            <SwiperSlide
              className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]"
            >
              <img src={PlantsGalleryItemThree} className="" />
            </SwiperSlide>
            <SwiperSlide
              className="ounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]"
            >
              <img src={PlantsGalleryItemFour} className="" />
            </SwiperSlide>
  
      </Swiper>
      </div>
            

        </section>
        <section className="w-1/2 md:pl-16">
      <p className="font-bold text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
        Benefits
      </p>
      <ul className="list-disc list-outside pl-5 text-2xl font-normal">
        <li>Compact System</li>
        <li>Low investment Cost</li>
        <li>Modular Systems</li>
        <li>Low maintenance cost </li>
        <li>Requires less area</li>
        <li>No need of extensive civil work</li>
        <li>Can easily handle shock loads</li>
        <li>Disinfected water can be used for
        flushing & gardening Purpose.</li>
        <li>No bacteria cultivation & no 
        secondary sludge.</li>
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

export default SewageTreatmentPlant;
