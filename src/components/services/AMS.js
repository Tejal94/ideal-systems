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
import PlantsGalleryOne from "../../assets/plants/ETP10.webp";
import PlantsGalleryTwo from "../../assets/plants/ETP11.webp";
import PlantsGalleryThree from "../../assets/plants/ETP12.webp";
import ETPO1 from "../../assets/plants/etpo10.webp";
import ETPO2 from "../../assets/plants/etpo11.webp";
import STPC1 from "../../assets/plants/stpc1.webp";
import STPC2 from "../../assets/plants/stpc2.webp";
import STPC3 from "../../assets/plants/stpc3.webp";
import STPC4 from "../../assets/plants/stpc4.webp";
import AMC1 from "../../assets/plants/amc1.webp";
import AMC2 from "../../assets/plants/amc2.webp";
import AMC3 from "../../assets/plants/amc3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dialog, DialogContent } from "../ui/dialog";
import ModalForm from "../../components/ModalForm";

const AMS = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-8 lg:mt-12 2xl:mt-12">
        <section className="w-full md:w-1/2">
          <div className="w-full p-4">
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
              <SwiperSlide className="rounded-lg w-[100px] max-h-[150px] md:w-[200px] md:min-h-[400px]">
                <img
                  src={PlantsGalleryOne}
                  className="w-[250px] md:w-full md:h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[150px] md:w-[200px] md:min-h-[180px]">
                <img src={PlantsGalleryTwo} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[150px] md:w-[200px] md:min-h-[180px]">
                <img src={PlantsGalleryThree} className="" />
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
            Effluent Treatment Plant
          </p>
          {/* <p className='font-normal text-lg mt-2'>Approx. price: <span className='font-bold text-[#0231A8]'>&#8377; 7 Lakhs/plant</span></p> */}

          <p className="font-semibold text-lg mt-4">Product details</p>
          <table className="text-gray-500 mt-2">
            <tr className="border border-gray-300">
              <td className="p-2">Plant Type</td>
              <td>ETP Water Treatment</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Water Source</td>
              <td>Industrial Effluent</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Usage</td>
              <td>
                Sugar Industry,Pharma Industry,Textile Industry,Manufacturing
                Unit
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Capacity</td>
              <td>10 KLD TO 100MLD</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Tank Dimensions</td>
              <td>Customised</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Treatment Technique</td>
              <td>Mixed Bed Bio Reactor</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Type</td>
              <td>Corrective Maintenance</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Location</td>
              <td>On-Site</td>
            </tr>
          </table>
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
            Sewage Treatment Plant
          </p>

          <p className="font-semibold text-lg mt-4">Product details</p>
          <table className="text-gray-500 w-full mt-2">
            <tr className="border border-gray-300">
              <td className="p-2">Plant Type</td>
              <td>STP Water Treatment</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Plant Services</td>
              <td>All</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Maintenance Part</td>
              <td>All</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Size/Area</td>
              <td>2000 to 5000 Square Feet</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Type Of Plant</td>
              <td>Water Treatment</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Type</td>
              <td>Corrective Maintenance</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Location</td>
              <td>On-Site</td>
            </tr>
          </table>
          <p className="my-5 text-lg">
            We are a unique entity in this industry, actively committed to
            offering a premium quality range of STP Maintenance Service . Our
            quality team experts check this operation service to fulfill the
            requirements of clients. Moreover, we offer this operation service
            at market leading prices.
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
        <section className="w-full p-4 md:w-1/2 order-1 md:order-none">
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
      </div>

      <div className="flex flex-col md:flex-row mt-8 lg:mt-20">
        <section className="w-full md:w-1/2">
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
                <img src={ETPO1} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={ETPO2} className="" />
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
            ETP Operation Maintenance Services
          </p>

          <p className="font-semibold text-lg mt-4">Product details</p>
          <table className="text-gray-500 mt-2 w-full">
            <tr className="border border-gray-300">
              <td className="p-2">Type Of Maintenance</td>
              <td>Preventive Maintenance</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Water Source</td>
              <td>Industrial Effluent</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Frequency</td>
              <td>Yearly</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Type Of Plant</td>
              <td>Generator</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Layout Size</td>
              <td> &#62;2500 Square Feet</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Treatment Technique</td>
              <td>Mixed Bed Bio Reactor</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Type</td>
              <td>Corrective Maintenance</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Location</td>
              <td>On-Site</td>
            </tr>
          </table>
          <p className="my-5 text-lg">
            We are offering ETP Operation Maintenance Services . Provide us with
            your raw water test report and the desired output water quality and
            we will design, supply, install and commission water treatment plant
            in time, with auto regeneration system, lasting you a life time. The
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
            Sewage Treatment Plant Construction
          </p>

          <p className="font-semibold text-lg mt-4">Product details</p>
          <table className="text-gray-500 w-full mt-2">
            <tr className="border border-gray-300">
              <td className="p-2">Service Duration</td>
              <td>1-2 weeks</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Min. Order Quantity</td>
              <td>1 plant</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Location</td>
              <td>Commercial</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Water Tank Type</td>
              <td>fabricated</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Work Location</td>
              <td>Talwade, hadapsar</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Capacity / Size</td>
              <td>10-50 KLD</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Delivery Time</td>
              <td>3-4 weeks</td>
            </tr>
          </table>
          <p className="my-5 text-lg">
            We are providing the design, installation, commissioning of sewage
            treatment plant of different capacities in fabricated as well as in
            civil.{" "}
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
        <section className="w-full p-4 md:w-1/2 order-1 md:order-none">
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
              <SwiperSlide className="rounded-lg max-h-[170px] md:min-h-[280px] 2xl:min-h-[350px]">
                <img src={STPC1} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[280px] 2xl:min-h-[350px]">
                <img src={STPC2} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[280px] 2xl:min-h-[350px]">
                <img src={STPC3} className="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[280px] 2xl:min-h-[350px]">
                <img src={STPC4} className="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row mt-8 lg:mt-20">
        <section className="w-full md:w-1/2">
          <div className="w-full p-4">
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
                <img src={AMC1} className="w-[100%] h-[180px] md:h-[350px]" />
              </SwiperSlide>
              {/* <SwiperSlide className="rounded-lg w-[100px] max-h-[90px] md:w-[200px] md:min-h-[180px]">
                <img src={AMC2} className="" />
              </SwiperSlide> */}
              <SwiperSlide className="rounded-lg w-[100px] max-h-[180px] md:w-[200px] md:min-h-[180px]">
                <img src={AMC3} className="" />
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
            AMC and Facility Management Services for ETP And STP Plant
          </p>

          <p className="font-semibold text-lg mt-4">Product details</p>
          <table className="text-gray-500 mt-2 w-full">
            <tr className="border border-gray-300">
              <td className="p-2">Type Of Maintenance</td>
              <td>Corrective Maintenance</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Type Of Service</td>
              <td>Mechanical & Electrical Support</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Frequency</td>
              <td>Yearly</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Location</td>
              <td>PAN INDIA</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Service Mode</td>
              <td> Onsite</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Maintenance Type</td>
              <td>Annual Maintenance Service (AMS)</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">Type of Property</td>
              <td>Industrial</td>
            </tr>
          </table>
          <p className="my-5 text-lg">
            Being the leading names in the industry we are involved in offering
            AMC and Facility Management Services to our clients. These services
            are provided by our highly skilled professionals. These services are
            highly appreciated among our clients due to their reliable nature.
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

export default AMS;
