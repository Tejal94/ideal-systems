import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../assets/logo.svg";
import IconVision from "../assets/icons/vision-icon.svg"
import IconMission from "../assets/icons/mission-icon.svg"
import TeamMemberOne from "../assets/team-member-1.svg"
import TeamMemberTwo from "../assets/team-member-2.svg"
import Accreditation1 from "../assets/accreditation/acc1.svg"
import Accreditation2 from "../assets/accreditation/acc2.svg"
import Accreditation3 from "../assets/accreditation/acc3.svg"
import Accreditation4 from "../assets/accreditation/acc4.svg"
import Accreditation5 from "../assets/accreditation/acc5.svg"
import Accreditation6 from "../assets/accreditation/acc6.svg"
import Accreditation7 from "../assets/accreditation/acc7.svg"
import Accreditation8 from "../assets/accreditation/acc8.svg"
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);

  return (
    <div>
      <Navbar />
      {/* Hero Banner */}
      <section class="bg-[url('./assets/banner/banner-aboutus.svg')] h-[438px] w-full bg-cover bg-center p-10" >
        <nav class="w-full rounded-md">
          <ol class="list-reset flex">
            <li>
              <a
                href="/"
                class="font-medium text-base text-white transition duration-150 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <span class="mx-2 font-medium text-base text-white">&gt;</span>
            </li>
            <li class="font-medium text-base text-white">About Us</li>
          </ol>
        </nav>
      </section>

      {/* About */}
      <section className="flex px-10 md:px-28 2xl:px-36 my-16 flex-col-reverse md:flex-row gap-y-10 gap-x-10">
        <article className="flex flex-[1.5_1.5_0%] flex-col gap-y-10 2xl:pr-10" data-aos="fade-right"
                  data-aos-duration="2000">
          <span className="font-normal text-xl text-justify leading-7 capitalize">
            Established in 2012 in Pune, Maharashtra, India, we are a manufacturer, wholesaler, and retailer specializing in sewage treatment plants,
            water treatment plants, moving bed biofilm reactors, and more. Our products are known for their quality and affordability, making them
            accessible to a wide range of customers.
          </span>
          <span className="font-normal text-xl text-justify leading-7 capitalize">
            In addition to our core offerings, we provide services such as Erection Commissioning, Maintenance, and Rain Water Harvesting.
            Our manufacturing process employs highly skilled professionals and modern techniques. We offer customization to meet diverse
            client needs and are committed to ensuring timely delivery of services and facilities.
          </span>
        </article>
        <div data-aos="fade-left"
                  data-aos-duration="2000" className="flex flex-col flex-1 justify-center items-center shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[10px] bg-[#ECF8FF] gap-y-4 p-4">
          <img src={Logo} class="h-28 md:h-40 w-28 md:w-40" alt="Logo" />
          <span class="self-center text-xl md:text-[28px] font-bold whitespace-nowrap text-[#1A306B] underline underline-offset-2">
            IDEAL SYSTEMS & SERVICES
          </span>
          <span className="text-lg md:text-[24px] self-center text-[#08A031]">
            Green & Clean Solution
          </span>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="flex px-10 md:px-28 2xl:px-36 py-8 flex-col bg-gradient-to-r from-[#E4F5FF] to-[#E4F5FF] gap-y-5 ">
        <article data-aos="fade-right"
                  data-aos-duration="2000" className="flex flex-col shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[2px] justify-center bg-white p-8 lg:p-12 2xl:p-20 gap-y-3">
          <div className="flex flex-row gap-x-5 md:mb-4 2xl:mb-8 items-center">
            <img src={IconVision} className="h-16 w-20" alt="icon" />
            <span className="font-semibold text-[32px] 2xl:text-4xl text-[#1E1E1E]">OUR VISION</span>
          </div>
          <span className="font-medium text-base md:text-lg 2xl:text-xl text-[#2B2F3E] text-justify capitalize">
            Company's aim is to make a positive impact on society and the environment by implementing projects that are not
            only sustainable but also integrated, meaning they consider various aspects and stakeholders. This approach ensures
            that your projects not only benefit the environment but also have a positive impact on people's lives, such as
            creating jobs and improving living conditions. Additionally, your forward-looking vision means that you are proactive
            in anticipating future challenges and opportunities, ensuring that your projects remain relevant and impactful in the long run.
            Finally, your commitment to developing local economies shows that you prioritize empowering communities and fostering economic growth at the grassroots level.
          </span>
        </article>
        <article data-aos="fade-left"
                  data-aos-duration="2000" className="flex flex-col shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[2px] justify-center bg-white p-8 lg:p-12 2xl:p-20 gap-y-3">
          <div className="flex flex-row gap-x-5 md:mb-4 2xl:mb-8 items-center justify-end">
            <span className="font-semibold text-[32px] 2xl:text-4xl text-[#1E1E1E]">OUR MISSION</span>
            <img src={IconMission} className="h-16 w-20 " alt="icon" />
          </div>
          <span className="font-medium text-base md:text-lg 2xl:text-xl  text-[#2B2F3E] text-justify capitalize">
            Company focuses on creating a multidisciplinary approach, which means that you involve experts from various fields such as engineering,
            environmental science, economics, and social sciences. This approach allows you to consider different perspectives and expertise, ensuring
            that your projects are comprehensive and well-rounded. By striking the right balance between innovation and tradition, you aim to leverage
            cutting-edge technologies and ideas while also respecting and incorporating traditional practices and knowledge. This balance ensures that
            your projects are not only innovative and effective but also culturally and socially relevant, enhancing their overall impact and acceptance
            within the community.
          </span>
        </article>
      </section>

      {/* Leader and Team */}
      <section className="flex px-4 md:px-28 2xl:px-36 mt-16 flex-col">
        <p className="font-bold text-2xl md:text-3xl 2xl:text-4xl text-center md:text-left underline underline-offset-8 text-[#222222]">
          MEET THE LEADERS & TEAM
        </p>
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-5">
          <div data-aos="fade-right"
                  data-aos-duration="2000" className="flex flex-col md:flex-row md:col-start-1 md:col-span-3 md:ml-10 border rounded">
            <img src={TeamMemberOne} className="border rounded-l h-80" />
            <article className="flex flex-col bg-[#ECF8FF] p-5 md:p-10 gap-y-3">
              <span className="font-bold text-3xl">Mr. P. B. Chaudhary</span>
              <span className="font-normal text-3xl">CEO</span>
              <span className="font-normal text-2xl text-start capitalize">
                Highly professional Environmental Professional with experience
                of 17+ Year in water and wastewater treatment project
              </span>
            </article>
          </div>
          <div data-aos="fade-left"
                  data-aos-duration="2000" className="flex flex-col-reverse md:flex-row md:col-start-2 md:col-span-4 md:mr-10 border rounded">
            <article className="flex flex-col bg-[#ECF8FF] p-5 md:p-10 gap-y-3">
              <span className="font-bold text-3xl">Mr. Sandeep Bhosale</span>
              <span className="font-normal text-3xl">DIRECTOR</span>
              <span className="font-normal text-2xl text-start capitalize">
                With an experience of 16+ Year in water and wastewater treatment
                project responsible for Technical aspect
              </span>
            </article>
            <img src={TeamMemberTwo} className="border rounded-r h-80" />
          </div>

        </div>
      </section>

      {/* Accreditation */}
      <section className="flex px-10 md:px-28 2xl:px-36 py-10 flex-col">
        <p className="font-bold text-2xl md:text-3xl 2xl:text-4xl text-center md:text-left underline underline-offset-8 text-[#222222]">
          ACCREDITATION
        </p>
        <div class="grid grid-rows-3 grid-cols-3 gap-4 items-center">
          <div data-aos="fade-bottom"
                  data-aos-duration="2000" class="row-start-1 row-span-2 flex flex-row shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[5px] justify-center bg-white">
            <img src={Accreditation1} className="self-center p-2" />
          </div>
          <div data-aos="fade-bottom"
                  data-aos-duration="2000" class="row-start-2 row-span-2 flex flex-row shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[5px] justify-center bg-white">
            <img src={Accreditation2} className="self-center p-2" />
          </div>
          <div data-aos="fade-bottom"
                  data-aos-duration="2000" class="row-start-1 row-span-2 flex flex-row shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[5px] justify-center bg-white">
            <img src={Accreditation3} className="self-center p-2" />
          </div>
          <div data-aos="fade-bottom"
                  data-aos-duration="2000" class="row-end-4 row-span-1 flex flex-row shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[5px] justify-center bg-white">
            <img src={Accreditation4} className="self-center p-5" />
          </div>
          <div data-aos="fade-bottom"
                  data-aos-duration="2000" class="row-start-3 row-span-1 flex flex-row shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[5px] justify-center bg-white">
            <img src={Accreditation5} className="self-center p-5" />
          </div>
          <div data-aos="fade-bottom"
                  data-aos-duration="2000" class="row-start-6 row-span-2 flex flex-row shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[5px] justify-center bg-white">
            <img src={Accreditation6} className="self-center p-2" />
          </div>
          <div data-aos="fade-bottom"
                  data-aos-duration="2000" class="row-start-7 row-end-4 flex flex-row shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[5px] justify-center bg-white">
            <img src={Accreditation7} className="self-center p-5" />
          </div>
          <div data-aos="fade-bottom"
                  data-aos-duration="2000" class="row-start-9 row-end-6 flex flex-row shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[5px] justify-center bg-white">
            <img src={Accreditation8} className="self-center p-2" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
