import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contacts = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Banner */}
      <section class="bg-[url('./assets/banner/banner-contact.svg')] h-[403px] w-full bg-center p-10">
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
      <section className="flex px-10 md:px-20 py-10 flex-col">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
