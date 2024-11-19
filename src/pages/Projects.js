import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ourProductsImages } from "../Constants";
import { Helmet } from "react-helmet";
import MapImage from "../assets/clients-map.jpg";
import ClientsList from "../assets/ClientsList.pdf";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/svg" href="/logo.svg" />
        <title>Projects | Ideal Systems & Services</title>
        <meta name="description" content={`Projects page with projects and clients information, testimonials, feedbacks, ratings`} />
        <meta name="keywords" content={`clients, projects, information, testimonials, feedbacks, ratings`} />
        <link rel="canonical" href={`https://ideal-systems.vercel.app/projects`} />
      </Helmet>
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
            ourProductsImages.map((i) => (
              <>
              <div class="snip1577">
                <img src={i.image} className="self-center h-[13rem] md:h-[11.5rem] w-[21rem] md:w-[23rem] lg:h-[13rem] lg:w-[21rem] 2xl:h-[13rem] 2xl:w-[32rem] thumbnail" />
                <figcaption>
                  <h3>{i.title}</h3>
                  <h4>{i.location}, {i.yr}</h4>
                  <h4>{i.plant} | {i.capacity}</h4>
                </figcaption>
                </div>
              </>
            ))}
        </div>
      </section>
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
      <Footer />
    </div>
  );
};

export default Projects;
