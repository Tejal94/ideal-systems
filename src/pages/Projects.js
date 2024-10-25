import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ourProductsImages } from "../Constants";

const Projects = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Banner */}
      <section class="bg-[url('./assets/banner/banner-projects.svg')] h-[438px] w-full bg-cover bg-center p-10">
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
            <li class="font-medium text-base text-white">Projects</li>
          </ol>
        </nav>
      </section>
      <section className="flex px-10 md:px-20 my-16 flex-col">
        <p className="font-bold text-3xl underline underline-offset-8 text-[#222222]">
          OUR PROJECTS
        </p>
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-3 md:gap-10 mt-14">
          {ourProductsImages &&
            ourProductsImages.map((img) => (
              <>
              <div class="snip1577">
                <img src={img} className="self-center h-[13rem] md:h-[11.5rem] w-[21rem] md:w-[23rem] lg:h-[13rem] lg:w-[21rem] 2xl:h-[13rem] 2xl:w-[32rem] thumbnail" />
                <figcaption>
                  <h3>Project Name</h3>
                  <h4>Location</h4>
                </figcaption>
                </div>
              </>
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
