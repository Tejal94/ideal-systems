import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SocialMedia from "../components/SocialMedia";
import PhoneIcon from "../assets/icons/phone.svg";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#E4F5FF] hidden md:flex flex-wrap items-center justify-around p-4 h-[60px] gap-y-2">
        <article className="flex flex-row gap-x-2 items-center">
          <p className="font-normal text-sm text-[#2B2F3E]">
            Certified Company
          </p>
          <p className="font-normal text-lg text-[#1A306B]">ISO 9001:2015</p>
          <img src={PhoneIcon} alt="rtc1" className="h-6 w-6 self-center" />
          <p className="font-normal text-lg text-[#1A306B]">
            + 91 9665134392, + 91 9890805654
          </p>
        </article>
        <SocialMedia />
      </div>
      <div className="navbar md:justify-around my-3 bg-white">
        <div className="flex justify-between px-0 md:px-5 w-full">
        <a
            href="/home"
            class="flex items-center space-x-3 rtl:space-x-reverse gap-x-0 md:gap-x-3 ml-0 md:ml-5"
          >
            <img src={Logo} class="h-10 md:h-20 w-10 md:w-20" alt="Logo" />
            <article class="flex items-center flex-col">
              <span class="self-center text-[19px] md:text-[20px] font-bold whitespace-nowrap text-[#1A306B] underline underline-offset-2">
                IDEAL SYSTEMS & SERVICES
              </span>
              <span className="text-sm self-center text-[#08A031]">
                Green & Clean Solution
              </span>
            </article>
          </a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow rounded-box w-80 md:w-52 bg-white"
            >
              <li>
                <Link
                  to="/"
                  class="block py-2 font-normal text-sm text-black rounded"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  class="block py-2 font-normal text-sm text-black rounded"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <details className="z-[9] bg-white">
                  <summary className="p-2 rounded">PRODUCTS & SERVICES</summary>
                  {/* Mobile view */}
                  <div className="absolute flex flex-col bg-white">
                    <ul className="m-1">
                      <h1 className="p-1 mb-2 font-medium text-base">
                        Waste Water Treatment
                      </h1>
                      <li>
                        <Link
                          to={{
                            pathname: `/products`,
                            search: `?tab=STP`,  
                          }}
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Sewage Treatment Plant
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname: `/products`,
                            search: `?tab=ETP`,  
                          }}
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Effluent Treatment Plant
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname: `/products`,
                            search: `?tab=RWH`,  
                          }}
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Rain Water Harvesting
                        </Link>
                      </li>
                    </ul>
                    <ul className="m-1">
                      <h1 className="p-1 mb-2 font-medium text-base">
                        Water Treatment Plant
                      </h1>
                      <li>
                        <Link
                          to={{
                            pathname: `/products`,
                            search: `?tab=UFP`,  
                          }}
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Ultra Filtration Plant
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname: `/products`,
                            search: `?tab=WSP`,  
                          }}
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Water Softening Plant
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname: `/products`,
                            search: `?tab=DP`,  
                          }}
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Demineralization Plant
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname: `/products`,
                            search: `?tab=ROP`,  
                          }}
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Reverse Osmosis Plant
                        </Link>
                      </li>
                    </ul>
                    <ul className="m-1">
                      <h1 className="p-1 mb-1 font-medium text-base">
                        Services
                      </h1>
                      <li>
                        <Link
                          to=""
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Annual Maintenance service
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Plants Installation Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="px-1 font-normal text-sm text-black rounded"
                        >
                          Erection Commissioning Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
              <li>
                <Link
                  to="/clients"
                  class="block py-2 font-normal text-sm text-black rounded"
                >
                  CLIENTS
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  class="block py-2 font-normal text-sm text-black rounded"
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  class="block py-2 font-normal text-sm text-black rounded"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>





        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                class="block py-2 font-normal text-sm text-black rounded"
              >
                HOME
              </Link>
            </li>
            
            <li>
              <details className="z-[9]">
                <summary className="p-2 rounded">PRODUCTS & SERVICES</summary>
                <div className="absolute flex flex-row bg-white py-4">
                  <ul className="m-1">
                    <h1 className="p-1 mb-1 font-medium text-base">
                      Waste Water Treatment
                    </h1>
                    <li>
                      <Link
                          to={{
                            pathname: `/products`,
                            search: `?tab=STP`,  
                          }} className="px-1 font-normal text-sm text-black rounded"
                      >
                        Sewage Treatment Plant
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: `/products`,
                          search: `?tab=ETP`,  
                        }}
                        className="px-1 font-normal text-sm text-black rounded"
                      >
                        Effluent Treatment Plant
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: `/products`,
                          search: `?tab=RWH`,  
                        }}
                        className="px-1 font-normal text-sm text-black rounded"
                      >
                        Rain Water Harvesting
                      </Link>
                    </li>
                  </ul>
                  <ul className="m-1">
                    <h1 className="p-1 mb-1 font-medium text-base">
                      Water Treatment Plant
                    </h1>
                    <li>
                      <Link
                        to={{
                          pathname: `/products`,
                          search: `?tab=UFP`,  
                        }}
                        className="px-1 font-normal text-sm text-black rounded"
                      >
                        Ultra Filtration Plant
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: `/products`,
                          search: `?tab=WSP`,  
                        }}
                        className="px-1 font-normal text-sm text-black rounded"
                      >
                        Water Softening Plant
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: `/products`,
                          search: `?tab=DP`,  
                        }}
                        className="px-1 font-normal text-sm text-black rounded"
                      >
                        Demineralization Plant
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: `/products`,
                          search: `?tab=ROP`,  
                        }}
                        className="px-1 font-normal text-sm text-black rounded"
                      >
                        Reverse Osmosis Plant
                      </Link>
                    </li>
                  </ul>
                  <ul className="m-1">
                    <h1 className="p-1 mb-1 font-medium text-base">Services</h1>
                    <li>
                      <Link
                        to=""
                        className="px-1 font-normal md:text-nowrap text-sm text-black rounded"
                      >
                        Annual Maintenance service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="px-1 font-normal text-sm text-black rounded"
                      >
                        Plants Installation Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="px-1 font-normal text-sm text-black rounded"
                      >
                        Erection Commissioning Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </details>
            </li>

            <li>
              <Link
                to="/about"
                class="block py-2 font-normal text-sm text-black rounded"
              >
                ABOUT US
              </Link>
            </li>

            <li>
              <Link
                to="/clients"
                class="block py-2 font-normal text-sm text-black rounded"
              >
                CLIENTS
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                class="block py-2 font-normal text-sm text-black rounded"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                class="block py-2 font-normal text-sm text-black rounded"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
