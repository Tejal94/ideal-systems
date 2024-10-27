import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tab";
import PlantsGalleryItemOne from "../../assets/plants/plants-1.svg";
import PlantsGalleryItemTwo from "../../assets/plants/plants-2.svg";
import PlantsGalleryItemThree from "../../assets/plants/plants-3.svg";
import PlantsGalleryItemFour from "../../assets/plants/plants-4.svg";
import MBBR from "../../assets/mbbr.svg";
import SBR from "../../assets/SBR.svg";
import JTSTP from "../../assets/JTSTP.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import ModalForm from "../../components/ModalForm";
import { Dialog, DialogContent } from "../ui/dialog";
import AOS from "aos";
import "aos/dist/aos.css";

const SewageTreatmentPlant = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);

  return (
    <div className="w-full px-2 md:px-2 lg:px-28 2xl:px-36 mt-16">
      <section className="" data-aos="fade-right" data-aos-duration="2000">
        <p className="font-bold text-2xl md:text-3xl 2xl:text-4xl uppercase underline underline-offset-8 text-[#222222] mb-16">
          Sewage treatment plant
        </p>
        <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7 capitalize">
          These are facilities designed to treat sewage and wastewater from
          residential, commercial, and industrial sources before it is released
          back into the environment or reused. STPs use a combination of
          physical, chemical, and biological processes to remove contaminants
          and produce treated effluent that meets environmental regulations. The
          treated water can be discharged into water bodies or reused for
          purposes like irrigation or industrial processes.{" "}
        </span>
        <p className="font-normal text-xl text-justify 2xl:text-[22px] mt-8 leading-7 capitalize">
          With more than twelve years of experience, we're pioneers in our
          field. We're constantly seeking the latest, most cost-effective
          technologies to meet society's needs effortlessly.
        </p>
      </section>

      <p
        data-aos="fade-right"
        data-aos-duration="2000"
        className="font-bold text-2xl md:text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-16"
      >
        Sewage treatment plants we offer
      </p>

      <main className="px-2 md:px-16 lg:px-20 2xl:px-60 2xl:mt-12">
        <Tabs defaultValue="The Process">
          <TabsList className="h-24 md:h-16 w-full justify-between items-center mb-12">
            <TabsTrigger
              className="disabled:opacity-100 h-[100%] 2xl:text-[22px] disabled:data-[state=active]:bg-[#E4F5FF] text-black w-1/4 text-wrap md:text-nowrap py-2 disabled:data-[state=active]:text-primary-500"
              value="The Process"
            >
              Containerized STP
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 h-[100%] 2xl:text-[20px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/4 text-wrap md:text-nowrap  py-2 disabled:data-[state=active]:text-primary-500"
              value="Features"
            >
              Prefabricated STP
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 h-[100%] 2xl:text-[20px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/4 text-wrap md:text-nowrap  py-2 disabled:data-[state=active]:text-primary-500"
              value="Application"
            >
              Civil STP
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 h-[100%] 2xl:text-[20px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/4 text-wrap md:text-nowrap  py-2 disabled:data-[state=active]:text-primary-500"
              value="Package"
            >
              Packege STP
            </TabsTrigger>
          </TabsList>

          <TabsContent className="relative flex flex-col " value="The Process">
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[22px] py-10 ">
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
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Features"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[22px] py-10">
              <p>
                Prefabricated sewage treatment plants, also known as modular or
                package plants, are built off-site in a controlled environment
                and then transported to the site for installation. This method
                offers several advantages over traditional on-site construction
              </p>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Application"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[22px] py-10">
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
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Package"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[22px] py-10">
              <p>
                A packaged sewage treatment plant (STP) is a compact,
                pre-engineered system used for the treatment of sewage and
                wastewater. Unlike traditional STPs that are built from scratch
                on-site, packaged STPs are factory-assembled and delivered to
                the site ready for installation.{" "}
              </p>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <div className="flex flex-col md:flex-row 2xl:mt-12">
        <section className="w-full md:w-1/2">
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="font-bold text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10"
          >
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
          className="w-full md:w-1/2 md:pl-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p className="font-bold text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
            Benefits
          </p>
          <ul className="list-disc list-outside pl-5 text-xl md:text-2xl font-normal">
            <li>Compact System</li>
            <li>Low investment Cost</li>
            <li>Modular Systems</li>
            <li>Low maintenance cost </li>
            <li>Requires less area</li>
            <li>No need of extensive civil work</li>
            <li>Can easily handle shock loads</li>
            <li>
              Disinfected water can be used for flushing & gardening Purpose.
            </li>
            <li>No bacteria cultivation & no secondary sludge.</li>
          </ul>
        </section>
      </div>

      <p
        data-aos="fade-right"
        data-aos-duration="2000"
        className="font-bold text-2xl md:text-3xl text-center md:text-left 2xl:text-4xl uppercase underline mt-10 md:mt-16 underline-offset-8 text-[#222222] mb-16"
      >
        Variants
      </p>

{/* MBBR-------------------------------------- */}
      <div>
        <hr />

        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="font-bold text-2xl md:text-2xl 2xl:text-3xl uppercase underline mt-8 md:mt-16 underline-offset-8 text-[#222222] mb-10 md:mb-16"
        >
          Moving Bed Biofilm Reactor
        </p>

        <section
          className="bg-[#E4F5FF] p-4 py-6 md:p-12 2xl:p-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            The Ecologix MBBR is a highly effective biological treatment process
            based on a combination of conventional activated sludge process and
            biofilm media. The MBBR process utilizes floating High Capacity
            MicroOrganism BioChips media within the aeration and anoxic tanks.
            The microorganisms consume organic material. The media provides
            increased surface area for the biological microorganisms to attach
            and grow. The increased surface area reduces the footprint of the
            tanks required to treat the wastewater. The treatment process can be
            aerobic and/or anaerobic and operates at high volume loads.
          </span>
        </section>

        <div className="flex flex-col md:flex-row mt-8 p-2 md:mt-16 2xl:mt-20">
          <section
            className="w-full md:w-1/2 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={MBBR} alt="mbbr-plant" />
          </section>
          <section
            className="w-full md:w-1/2 md:pl-16"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="font-bold text-2xl 2xl:text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
              MBBR Advantages
            </p>
            <ul className="list-disc list-outside pl-5 text-xl md:text-2xl font-normal">
              <li>Compact units with small size</li>
              <li>Increased treatment capacity</li>
              <li>Complete solids removal</li>
              <li>Improved settling characteristic </li>
              <li>Operation at higher suspended biomass</li>
              <li>Concentrations resulting in long sludge retention times</li>
              <li>Enhanced process stability</li>
              <li>Low head loss</li>
              <li>No filter channeling</li>
              <li>No need of periodic backwashing</li>
              <li>
                Reduced sludge production and no problems with sludge bulking
              </li>
            </ul>
          </section>
        </div>

        <section
          className="bg-[#E4F5FF] p-4 py-6 md:p-12 2xl:p-16 mt-4 md:mt-12 2xl:mt-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p className="font-bold text-2xl 2xl:text-3xl uppercase underline underline-offset-8 text-[#222222] mb-10">
            How MBBR Works
          </p>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            The MBBR process utilizes floating plastic carriers (media) within
            the aeration tank to increase the amount of microorganisms available
            to treat the wastewater. The microorganisms consume organic
            material. The media provides increased surface area for the
            biological microorganisms to attach to and grow in the aeration
            tanks. The increased surface area reduces the footprint of the tanks
            required to treat the wastewater. The media is continuously agitated
            by bubbles from the aeration system that adds oxygen at the bottom
            of the first compartment of the aeration tank. The microorganisms
            consume organic material. When compared to conventional secondary
            treatment it provides superior efficiency and value.
          </p>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            In fact the MBBR media or biochips utilized exclusively by Ecologix
            have an active surface area greater than 4000 m2/m3 which is up to
            six times greater than any competing media available on the market
            today.The MBBR is a complete mix, continuous flow through process
            which is based on the biofilms principle that combines the benefits
            of both the activated sludge process and conventional fixed film
            systems without their disadvantages.
          </p>
        </section>
      </div>

      {/* MBR-------------------------------------- */}
      <div className="mt-5">
        <hr />

        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="font-bold text-2xl md:text-2xl 2xl:text-3xl uppercase underline mt-8 md:mt-16 underline-offset-8 text-[#222222] mb-10 md:mb-16"
        >
          Membrane bio Reactor
        </p>

        <section
          className="bg-[#E4F5FF] p-4 py-6 md:p-12 2xl:p-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            Envirocube is an ultrafiltration membrane with uniform pore size and
            high rejection capacity. Envirocube modules consist of flat sheet
            PVDF ultrafiltration membrane cassettes, air diffusers and a product
            water manifold. Air scouring is provided by the diffusers installed
            at the bottom of the module which continuously scrubs the membrane
            surface.
          </span>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            A reverse diffusion process takes place at regular intervals by
            gravity flow of product water from an overhead backwash tank. Also,
            a cross flow of effluent is provided over the membrane surface.
            These characteristics result in lower transmembrane pressure and
            production of consistent water quality on continuous basis. The
            compact modular design provides the benefit of a higher membrane
            surface area and ease of membrane cartridge removal during assembly
            or replacement.
          </p>
        </section>

        <div className="flex flex-col md:flex-row mt-8 p-2 md:mt-16 2xl:mt-20">
          <section
            className="w-full md:w-1/2 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={MBBR} alt="mbbr-plant" />
          </section>
          <section
            className="w-full md:w-1/2 md:pl-16"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="font-bold text-2xl 2xl:text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
              MBR Advantages
            </p>
            <ul className="list-disc list-outside pl-5 text-xl md:text-2xl font-normal">
              <li>Combines Membrane Process with Activated Sludge Process </li>
              <li>Low Organic Constituents in Treated Wastewater</li>
              <li>Wide Acceptance as New Technology</li>
              <li>Superior Effluent Quality </li>
              <li>High MLSS Operation</li>
              <li>Low Sludge Yield</li>
              <li>Superior product water quality</li>
              <li>
                Easier operation compared to conventional activated sludge
                processes (ASP).
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Activated Sludge Process-------------------------------------- */}
      <div className="mt-5">
        <hr />

        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="font-bold text-2xl md:text-2xl 2xl:text-3xl uppercase underline mt-8 md:mt-16 underline-offset-8 text-[#222222] mb-10 md:mb-16"
        >
          Activated Sludge Process
        </p>

        <section
          className="bg-[#E4F5FF] p-4 py-6 md:p-12 2xl:p-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            The Activated Sludge Process (ASP) is a wastewater treatment method
            that leverages aeration and a biological floc composed of bacteria
            and protozoa to decompose organic matter in sewage and industrial
            wastewaters. This biological treatment method involves aerating the
            wastewater in a tank, which not only increases the oxygen
            concentration but also promotes the growth of microorganisms that
            consume the organic pollutants.{" "}
          </span>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            In this process, the mixture of wastewater and microorganisms,
            referred to as Mixed Liquor Suspended Solids (MLSS), is subjected to
            sufficient aeration to ensure aerobic digestion of organic matter.
            Following aeration, the mixture then flows to a settling tank or
            clarifier, where the biomass, also known as activated sludge,
            settles out from the treated water. To maintain a high concentration
            of microorganisms for effective treatment, some of the settled
            biomass is recirculated back to the aeration tank, while excess
            biomass is periodically removed from the system to maintain balance.{" "}
          </p>
        </section>

        <div className="flex flex-col md:flex-row mt-8 p-2 md:mt-16 2xl:mt-20">
          <section
            className="w-full md:w-1/2 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={MBBR} alt="mbbr-plant" />
          </section>
          <section
            className="w-full md:w-1/2 md:pl-16"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="font-bold text-2xl 2xl:text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
              ASP Advantages{" "}
            </p>
            <ul className="list-disc list-outside pl-5 text-xl md:text-2xl font-normal">
              <li>Effective Organic Matter Removal </li>
              <li>Nutrient Removal</li>
              <li>High-Quality Effluent</li>
              <li>Proven and Reliable </li>
              <li>Scalable</li>
              <li>Biological Phosphorus and Nitrogen Removal</li>
              <li>Energy Production Potential</li>
              <li>Adaptability to Advanced Treatment</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Sequential Batch Reactor-------------------------------------- */}
      <div  className="mt-5">
        <hr />

        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="font-bold text-2xl md:text-2xl 2xl:text-3xl uppercase underline mt-8 md:mt-16 underline-offset-8 text-[#222222] mb-10 md:mb-16"
        >
          Sequential Batch Reactor
        </p>

        <section
          className="bg-[#E4F5FF] p-4 py-6 md:p-12 2xl:p-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            The Sequential Batch Reactor (SBR) is a variation of the activated
            sludge process designed for wastewater treatment that operates in a
            fill-and-draw mode. Unlike continuous flow systems, the SBR
            processes wastewater in batches within a single reactor or a series
            of reactors. This approach combines various treatment phases &#45;
            fill, react, settle, and draw &#45; into a single tank, which
            sequentially undergoes periods of aeration and sedimentation.
          </span>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            A typical SBR cycle starts with the filling phase, where the reactor
            is loaded with wastewater. During this time, there may or may not be
            aeration, depending on the specific design and process needs.
            Following filling, the reactor enters the react phase, where
            aeration is provided to reduce the organic load through microbial
            action, similar to conventional activated sludge processes. This is
            also the stage where nitrification or denitrification can occur,
            depending on the aeration pattern and the presence of anoxic
            intervals.
          </p>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            After sufficient reaction time, the process moves to the settle
            phase, where aeration is stopped to allow solids to settle to the
            bottom of the tank, separating the clear effluent from the activated
            sludge. In the final draw phase, the clarified water is decanted
            from the top of the tank and discharged or sent for further
            treatment, while the settled biomass is either returned to the
            reactor to treat the next batch or wasted as necessary to control
            sludge age and concentration.{" "}
          </p>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            One of the key advantages of the SBR system is its flexibility. It
            can easily adapt to varying loads and treatment requirements, making
            it ideal for small to medium-sized wastewater treatment facilities
            or those with fluctuating influent characteristics. The SBR also
            simplifies design and operation by eliminating the need for separate
            clarifiers and allowing for a more straightforward control of
            biological processes, including nutrient removal.{" "}
          </p>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            However, SBRs require careful timing and control to optimize the
            treatment process and ensure that each phase is carried out
            effectively. This typically involves sophisticated control systems
            capable of managing the sequence of operations and responding to
            changes in wastewater characteristics. Despite these requirements,
            the SBR remains a popular choice for its efficiency, adaptability,
            and the high quality of effluent it can produce.
          </p>
        </section>

        <div className="flex flex-col md:flex-row mt-8 p-2 md:mt-16 2xl:mt-20">
          <section
            className="w-full md:w-1/2 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={SBR} alt="mbbr-plant" />
          </section>
          <section
            className="w-full md:w-1/2 md:pl-16"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="font-bold text-2xl 2xl:text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
              SBR Advantages
            </p>
            <ul className="list-disc list-outside pl-5 text-xl md:text-2xl font-normal">
              <li>Flexibility in Operation</li>
              <li>Compact Design</li>
              <li>Phased Operation</li>
              <li>High-Quality Effluent</li>
              <li>Nutrient Removal</li>
              <li>Energy Efficiency</li>
              <li>Cost-Effective</li>
              <li>Ease of Expansion</li>
              <li>Automated Control</li>
              <li>Versatility</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Johkasou technology for easy STP-------------------------------------- */}
      <div className="mt-5">
        <hr />

        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="font-bold text-2xl md:text-2xl 2xl:text-3xl uppercase underline mt-8 md:mt-16 underline-offset-8 text-[#222222] mb-10 md:mb-16"
        >
          Johkasou technology for easy STP
        </p>

        <section
          className="bg-[#E4F5FF] p-4 py-6 md:p-12 2xl:p-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            Johkasou technology refers to a compact, decentralized wastewater
            treatment system developed in Japan, designed to treat domestic
            wastewater efficiently and effectively at the source. The name
            "Johkasou" translates to "purification tank" in English, which aptly
            describes its function. This technology is particularly beneficial
            for areas without access to centralized sewage systems, including
            rural communities, remote locations, and rapidly urbanizing areas
            with inadequate infrastructure.
          </span>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            A typical Johkasou system operates on a small scale, serving
            individual households, small communities, or specific facilities. It
            incorporates several treatment stages within a single, contained
            unit, usually including anaerobic digestion, aerobic processing, and
            sometimes additional filtration or disinfection steps to polish the
            effluent. The anaerobic stage breaks down organic matter without
            oxygen, reducing the overall load. Subsequently, the aerobic stage
            introduces air into the system, fostering the growth of aerobic
            bacteria which further digest organic pollutants and nutrients.
          </p>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            One of the key features of Johkasou technology is its ability to
            provide a high level of treatment, often achieving effluent quality
            that meets or exceeds regulatory standards for discharge into the
            environment or for reuse in non-potable applications. This makes it
            an attractive option for regions aiming to protect water quality and
            public health without the extensive infrastructure required for
            conventional sewage treatment.
          </p>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            Additionally, Johkasou systems are designed to be low-maintenance
            and energy-efficient. Their compact nature allows for easy
            installation and integration into existing properties or
            developments without the need for extensive excavation or
            construction. The systems are often pre-fabricated and simply
            require connection to the wastewater source and, if necessary, the
            discharge point.
          </p>
          <p className="font-normal text-xl 2xl:text-[22px] text-justify leading-7">
            Johkasou technology has seen widespread adoption in Japan and is
            gaining recognition internationally, especially in areas facing
            challenges with water scarcity, infrastructure development, and
            environmental protection. Its modular design and scalability make it
            a versatile solution for sustainable wastewater management in both
            developed and developing regions.
          </p>
        </section>

        <div className="flex flex-col md:flex-row mt-8 p-2 md:mt-16 2xl:mt-20">
          <section
            className="w-full md:w-1/2 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={JTSTP} alt="mbbr-plant" />
          </section>
          <section
            className="w-full md:w-1/2 md:pl-16"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="font-bold text-2xl 2xl:text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
            Johkasou technology for easy STP Advantages
            </p>
            <ul className="list-disc list-outside pl-5 text-xl md:text-2xl font-normal">
              <li>Compact and Space-Saving</li>
              <li>Decentralized Treatment</li>
              <li>Low Maintenance and Operation Costs</li>
              <li>High-Quality Effluent</li>
              <li>Easy Installation and Scalability</li>
              <li>Energy Efficiency</li>
              <li>Cost-Effective</li>
              <li>Environmental Protection</li>
              <li>Regulatory Compliance</li>
              <li>Versatility</li>
              <li>Rapid Deployment</li>
            </ul>
          </section>
        </div>
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-[900px]">
          <ModalForm setShowForm={setShowForm} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SewageTreatmentPlant;
