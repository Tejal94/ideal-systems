import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
// import ModalForm from "../../components/ModalForm";
// import { Dialog, DialogContent } from "../ui/dialog";
import AOS from "aos";
import "aos/dist/aos.css";
import AMS from "../components/services/AMS";
import ECS from "../components/services/ECS";
import PIS from "../components/services/PIS";

const Services = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div>
      <Navbar />
      {/* Hero Banner */}
      <section class="bg-[url('./assets/banner/banner-aboutus.svg')] h-[438px] w-full bg-cover bg-center p-20" />

      <div className="px-10 md:px-28 2xl:px-36">
        <h2 className="font-bold text-2xl md:text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-16">Maintenance Services</h2>

        <p className="font-normal text-xl text-justify leading-7">
          With the support of our adept team of professionals, we are providing
          Maintenance Service. We provide these services for different
          industries for their water treatment plant and other machinery and
          components as per the need of the clients. Our offered services are
          rendered by a team of skilled professionals by using utmost quality
          basic material and contemporary technology. Moreover, these services
          are delivered at clients' end within promised timeframes.
        </p>

        {tab === "AMS" && <AMS />}
        {tab == "PIS" && <PIS />}
        {tab == "ECS" && <ECS />}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
