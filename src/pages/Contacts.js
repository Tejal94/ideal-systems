import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";

const Contacts = () => {
  return (
    <div>
       <Helmet>
        <link rel="icon" type="image/svg" href="/logo.svg" />
        <title>Contact Us | Ideal Systems & Services</title>
        <meta name="description" content={`Contact us page with contact information, location, address , details about office`} />
        <meta name="keywords" content={`contact, phone number, telephone, map, information, location, address , details about office`} />
        <link rel="canonical" href={`https://ideal-systems.vercel.app/contact`} />
      </Helmet>
      <Navbar />
      {/* Hero Banner */}
      <section class="bg-[url('./assets/banner/ContactMobile.svg')] sm:bg-[url('./assets/banner/banner-contact.svg')] h-[403px] w-full bg-center p-10">
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
            <li class="font-medium text-base text-white">Contact Us</li>
          </ol>
        </nav>
      </section>
      <section className="flex px-10 md:px-20 2xl:px-36 py-10 flex-col 2xl:mt-20">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
