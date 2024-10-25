import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import MapImage from "../assets/office-map.png";
import SocialMedia from "../components/SocialMedia";
import ModalForm from "./ModalForm";
import { Dialog, DialogContent} from  "./ui/dialog"
import { Link } from "react-router-dom";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className="mt-16">
      <article className="flex flex-col md:flex-row px-10 md:px-20 py-14 bg-gradient-to-r from-[#E4F5FF] to-[#E4F5FF] gap-x-1 md:gap-x-14 justify-center mb-5">
        <p className="font-bold text-2xl md:text-3xl text-[#1A306B]">
          Want to consult with our team
        </p>
        <button onClick={() => setShowForm(true)} className="bg-[#0231A8] mt-4 md:mt-0 w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
          Contact Us
        </button>
      </article>
      <article className="flex px-5 md:px-12 py-8 flex-col bg-gradient-to-r from-[#E4F5FF] to-[#E4F5FF] gap-y-5 divide-y-4">
        <div class="px-4 grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 grid-rows-1 md:divide-x divide-slate-700 gap-y-5">
          <div className="col-span-2 md:pr-10">
            <div className="flex flex-row justify-center">
              <img src={Logo} alt="rtc1" className="h-9 w-9 self-center" />
              <article className="flex flex-col pl-3">
                <p className="underline underline-offset-2 text-[#1A306B] decoration-[#1A306B] text-lg self-center">
                  IDEAL SYSTEMS & SERVICES
                </p>
                <p className="text-sm self-center text-[#08A031]">
                  Green & Clean solution
                </p>
              </article>
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 md:gap-x-5 pt-5">
              <div className="flex flex-row shadow-xl shadow-[rgba(2, 49, 168, 0.15)] rounded-5px] p-3">
                <div className="flex flex-col gap-y-2">
                  <p className="font-semibold text-base text-[#2B2F3E] underline underline-offset-2">
                    Office
                  </p>
                  <p className="font-normal text-base text-[#2B2F3E]">
                    Office No. B 15, 2 nd Floor, Kanchanjunga Apartment, Above
                    SBI Bank, Hadapsar, Pune-411028
                  </p>

                  <img src={MapImage} className="h-[100px] w-[220px]" />
                </div>
              </div>
              <div className="flex flex-row shadow-xl shadow-[rgba(2, 49, 168, 0.15)] rounded-5px] p-3">
                <div className="flex flex-col gap-y-2">
                  <p className="font-semibold text-base text-[#2B2F3E] underline underline-offset-2">
                    Office
                  </p>
                  <p className="font-normal text-base text-[#2B2F3E]">
                    Office No. B 15, 2 nd Floor, Kanchanjunga Apartment, Above
                    SBI Bank, Hadapsar, Pune-411028
                  </p>

                  <img src={MapImage} className="h-[100px] w-[220px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:pl-2">
            <div class="md:pl-4 grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 grid-rows-1 gap-y-5">
              <div className="flex flex-col gap-y-2 px-2">
                <p className="underline underline-offset-2 text-[22px] font-semibold">
                  Quick Links
                </p>
                <p className="text-[20px] font-normal text-[#2B2F3E]">
                 <Link to={"/contact"}> Contact Us</Link>
                </p>
                <p className="text-[20px] font-normal text-[#2B2F3E]">
                <Link to={"/clients"}> Clients </Link>
                </p>
                <p className="text-[20px] font-normal text-[#2B2F3E]">
                <Link to={"/about"}> About Us </Link>
                </p>
                <SocialMedia topMargin />
              </div>
              <div className="flex flex-col gap-y-2 col-span-2 pl-2">
                <p className="underline underline-offset-2 text-[22px] font-semibold">
                  We Are Specialized In
                </p>
                <p className="text-[20px] font-normal text-[#2B2F3E]">
                  Water treatment plant
                </p>
                <p className="text-[20px] font-normal text-[#2B2F3E]">
                  Waste Water treatment
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

    {/* Add Form Dialog */}
    <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-[900px]">
          <ModalForm setShowForm={setShowForm} />
        </DialogContent>
      </Dialog>


    </footer>
  );
};

export default Footer;
