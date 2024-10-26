import React, { useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import OurSpecOne from "../assets/our-spec-1.png";
import OurSpecTwo from "../assets/our-spec-2.png";
import { reasonsToChooseData, companyStats } from "../Constants";
import TestimonialIcon from "../assets/icons/inverted-coma.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestCarousel from "../components/CustomCarousel";
import ClientGrid2 from "../components/ClientGrid2";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dialog, DialogContent } from  "../components/ui/dialog";
import ModalForm from "../components/ModalForm";
import Testimonials from "../components/Testimonials";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);

  return (
    <div>
      <Navbar />
      {/* Hero Banner */}
      <TestCarousel />

      {/* Reasons to choose us */}
      <section className="flex px-4 md:px-28 py-10 flex-col">
        <p className="font-bold text-2xl text-center md:text-left md:text-3xl underline underline-offset-8 text-[#222222]">
          REASONS TO CHOOSE US
        </p>
        <div className="flex flex-col md:flex-row gap-x-24 pt-10">
          {reasonsToChooseData.map((item) => (
            <div className="flex flex-row shadow-xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[30px] p-5 items-center">
              <img
                src={item.icon}
                alt="rtc1"
                className="h-20 w-20 self-center"
              />
              <div>
                <p className="px-5 pb-3 font-semibold text-base text-[#1A306B]">
                  {item.title}
                </p>
                <p className="px-5 font-normal text-base text-[#2B2F3E]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get Quote */}
      <section className="flex px-4 md:px-28 py-8 flex-col bg-gradient-to-r from-[#E4F5FF] to-[#E4F5FF] gap-y-5 ">
        <p className="font-bold text-2xl md:text-3xl text-center text-[#1A306B]">
          Over 12 years of experience & knowledge for providing clean & green
          environment
        </p>
        <button onClick={() => setShowForm(true)} className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button hidden md:block px-6 py-2.5 font-semibold text-center">
          Get A Quote
        </button>
      </section>

      {/* Our Speciality */}
      <section className="flex px-4 md:px-28 mt-16 flex-col">
        <p className="font-bold text-2xl text-center md:text-left md:text-3xl underline underline-offset-8 text-[#222222]">
          OUR SPECIALITY
        </p>
        <div className="py-5 mt-8 flex flex-col gap-5">
          <div className="flex flex-col md:flex-row">
            <div className="py-5 pr-5 flex-1" data-aos="fade-right"
                  data-aos-duration="2000" >
              <img
                src={OurSpecOne}
                className="w-[464px] h-[250px] border-[20px] border-[#ECF8FF]"
              />
            </div>
            <article className="flex flex-col justify-around text-wrap flex-1" data-aos="fade-left"
                    data-aos-duration="2000">
              <p className="font-bold text-[20px]">Sewage Treatment Plant</p>
              <p className="font-normal text-[20px] leading-8 capitalize">
                We specialize in designing, fabricating, supplying, and
                commissioning Sewage Treatment Plants for industries, large
                colonies, hotels, hospitals, IT parks, and commercial buildings.
                STPs are now a statutory requirement mandated by State Pollution
                Control Boards. We focus on providing economical, easy-to-install,
                and operate compact STPs, as the high cost of land makes large
                treatment units less feasible for many.
              </p>
            </article>
          </div>
          <div className="flex flex-col-reverse md:flex-row">
            <article className="flex flex-col justify-around text-wrap flex-1" data-aos="fade-right"
                  data-aos-duration="2000">
              <p className="font-bold text-[20px]">Effluent Treatment Plant</p>
              <p className="font-normal text-[20px] leading-8 capitalize">
                Our Effluent Treatment Plants (ETP) are designed to treat
                different types of wastewater by using advanced processes to
                remove organic and inorganic contaminants, oils, grease, heavy
                metals, and suspended solids. You create customized solutions
                based on the specific characteristics of the wastewater to meet
                government regulations and ensure the treated water meets
                permissible limits.
              </p>
            </article>
            <div className="py-5 md:pl-5 flex-1" data-aos="fade-left"
                    data-aos-duration="2000">
              <img
                src={OurSpecTwo}
                className="w-[464px] h-[250px] border-[20px] border-[#ECF8FF] ml-auto"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Our Customers */}
      <section className="flex px-4 md:px-20 mt-16 flex-col">
        <p className="font-bold text-2xl text-center md:text-left md:text-3xl underline underline-offset-8 text-[#222222] mb-16">
          OUR CUSTOMERS
        </p>
        <ClientGrid2 />
      </section>

      {/* Stats Sections */}
      <section className="flex px-10 md:px-20 py-5 mt-16 flex-col bg-gradient-to-r from-[#E4F5FF] to-[#E4F5FF] gap-y-5 ">
        <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 grid-rows-1 gap-5 md:gap-10">
          {companyStats.map((item) => (
            <div className="flex flex-col md:flex-row p-5">
              <img
                src={item.icon}
                alt="rtc1"
                className="h-20 w-20 self-center"
              />
              <article className="flex flex-col pl-5 text-wrap justify-evenly">
                <p className="font-bold text-[32px] leading-[58px] text-[#1A306B]">
                  {item.title}
                </p>
                <p className="font-normal text-base text-[#2B2F3E]">
                  {item.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* Contact forms*/}
      <section className="flex px-10 mt-8 md:px-28 py-10 flex-col">
        <ContactForm />
      </section>

      {/* Testimonials */}
      <section className="flex mb-5 flex-col gap-y-5 mt-10">
        <p className="font-bold text-3xl px-20 underline underline-offset-8 text-[#222222]">
          TESTIMONIALS
        </p>
        {/* <div className="bg-gradient-to-r from-[#E4F5FF] to-[#E4F5FF] px-10 md:px-20 py-10">
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={false}
            swipeable={true}
            itemClass="carousel-container"
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            <div className="flex shadow-lg p-5 mx-5 flex-row">
              <img
                src={TestimonialIcon}
                className="mx-4 absolute -top-2 left-5"
              />
              <article className="flex flex-col self-center gap-y-4 pl-32">
                <p className="font-bold text-[24px]">Pooja Thakur</p>
                <p className="font-normal text-[20px] text-justify capitalize">
                  This company's operations are running smoothly and
                  efficiently, water treatment plants performing well.
                  High-quality work. Their dedication to excellence is
                  commendable.
                </p>
              </article>
            </div>
            <div className="shadow-lg p-5 mx-5">
              <img
                src={TestimonialIcon}
                className="mx-4 absolute -top-2 left-5"
              />
              <article className="flex flex-col self-center gap-y-4 pl-32">
                <p className="font-bold text-[24px]">Rahul Prajapati</p>
                <p className="font-normal text-[20px] text-justify capitalize">
                  Most reliable STP manufacturer with best quality. Mr. Nana
                  Chaudhary and Mr.Pravin and other staff are very dedicated
                  team ,very co-perative and excellent knowledge resulting a
                  fast growing company.
                </p>
              </article>
            </div>
            <div className="shadow-lg p-5 mx-5">
              <img
                src={TestimonialIcon}
                className="mx-4 absolute -top-2 left-5"
              />
              <article className="flex flex-col self-center gap-y-4 pl-32">
                <p className="font-bold text-[24px]">Pooja Thakur</p>
                <p className="font-normal text-[20px] text-justify capitalize">
                  This company's operations are running smoothly and
                  efficiently, water treatment plants performing well.
                  High-quality work. Their dedication to excellence is
                  commendable.
                </p>
              </article>
            </div>
          </Carousel>
        </div> */}
        <Testimonials/>
      </section>

      {/* Footer Section */}
      <Footer />
      {/* Add Form Dialog */}
    <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-[900px]">
          <ModalForm setShowForm={setShowForm} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
