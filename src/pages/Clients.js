import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MapImage from "../assets/clients-map.jpg"
import ClientGrid2 from "../components/ClientGrid2";
import ClientsList from "../assets/ClientsList.pdf";
import { Helmet } from "react-helmet";

const Clients = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/svg" href="/logo.svg" />
        <title>Clients | Ideal Systems & Services</title>
        <meta name="description" content={`Clients page with projects and clients information, testimonials, feedbacks, ratings`} />
        <meta name="keywords" content={`clients information, testimonials, feedbacks, ratings`} />
        <link rel="canonical" href={`https://ideal-systems.vercel.app/clients`} />
      </Helmet>
      <Navbar />
      {/* Hero Banner */}
      <section class="bg-[url('./assets/banner/ClientsMobile.svg')] sm:bg-[url('./assets/banner/banner-clients.svg')] h-[438px] w-full bg-cover bg-center p-10">
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
            <li class="font-medium text-base text-white">Clients</li>
          </ol>
        </nav>
      </section>
      <section className="flex mt-10 flex-col">
        <p className="font-bold text-3xl 2xl:text-4xl 2xl:mb-12 underline underline-offset-8 text-[#222222] px-10 md:px-20 mb-2 md:mb-5">
          WE HAVE WORKED WITH...
        </p>
        <div className="bg-[#ECF8FF] py-10 px-2 md:px-14">
          <ClientGrid2 />
        </div>
        <section className="flex flex-col md:flex-row items-center gap-y-2 md:gap-y-5 mb-0 md:mb-5 2xl:px-36">
          <img src={MapImage} className="md:max-w-3xl md:ml-10" />
          <div className="flex flex-col md:ml-16 gap-y-3 flex-1 mt-4 md:mt-0 content-center items-center">
            <p className="font-medium text-3xl text-center">250+ Clients</p>
            <a href={ClientsList} download="Client_List.pdf">
            <button className="bg-[#0231A8] w-48 p-2 rounded-lg self-center text-white header-button px-6 py-2.5 font-semibold text-center">
            View All
            </button>
            </a>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Clients;
