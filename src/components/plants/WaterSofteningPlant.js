import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tab";
import ModalForm from "../../components/ModalForm";
import { Dialog, DialogContent } from "../ui/dialog";
import AOS from "aos";
import "aos/dist/aos.css";

const WaterSofteningPlant = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);

  return (
    <div className="w-full px-2 md:px-2 lg:px-28 2xl:px-36 mt-16">
      <section className="" data-aos="fade-right"
                  data-aos-duration="2000">
        <p className="font-bold text-3xl 2xl:text-4xl uppercase underline underline-offset-8 text-[#222222] mb-16">
          Water Softening Plant
        </p>
        <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7 capitalize">
          A water softening plant is a system that uses a special resin bed to
          exchange ions in water, making it soft by removing minerals like
          calcium and magnesium. This resin bed needs to be regenerated
          periodically using a sodium chloride (salt) solution to maintain its
          effectiveness. Softened water does not form scales or deposits in
          pipes and tanks like hard water does. This process is crucial in many
          industries, and smaller versions are used in homes in some countries
          to improve water quality.
        </span>
        <p className="font-normal text-xl 2xl:text-[22px] text-justify mt-8 leading-7 capitalize">
          With more than twelve years of experience, we're pioneers in our
          field. We're constantly seeking the latest, most cost-effective
          technologies to meet society's needs effortlessly.
        </p>
      </section>

      <p className="font-bold text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-16" data-aos="fade-right"
                  data-aos-duration="2000">
        Water softening treatment plants we offer
      </p>
      <main className="px-2 md:px-16 lg:px-20 2xl:px-60 2xl:mt-12">
        <Tabs defaultValue="The Process">
          <TabsList className="h-16 w-full justify-between mb-12">
            <TabsTrigger
              className="disabled:opacity-100 2xl:text-[22px] disabled:data-[state=active]:bg-[#E4F5FF] text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="The Process"
            >
              The Process
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 2xl:text-[22px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Features"
            >
              Features
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 2xl:text-[22px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Application"
            >
              Application
            </TabsTrigger>
          </TabsList>

          <TabsContent className="relative flex flex-col " value="The Process">
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[20px] py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="font-bold mb-2 ">Methods:</p>
                <ul className="list-disc list-outside pl-5">
                  <li>
                    Ion Exchange: Replace Ca2+ and Mg2+ ions with sodium ions.
                  </li>
                  <li>
                    Precipitation: Convert Ca2+ and Mg2+ ions into insoluble
                    compounds that can be removed.
                  </li>
                </ul>
                <p className="mt-4 font-bold mb-2">Components:</p>
                <ul className="list-disc list-outside pl-5">
                  <li>
                    Mineral Tank: Contains ion exchange resin or precipitating
                    agents.
                  </li>
                  <li>
                    Brine Tank: Contains a salt (often sodium chloride) solution
                    used to regenerate the ion exchange resin.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Commonly used in:</p>
                <ul className="list-disc list-outside pl-5">
                  <li>Residential and commercial water softening systems.</li>
                  <li>
                    Industrial applications where hard water can cause issues.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Features"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[20px] py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>Automatic regeneration</li>
                <li>User friendly</li>
                <li>Require less space</li>
                <li>Low power consumption</li>
                <li>Reduction of scales</li>
                <li>Clogging from pipes and vessels</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>
                  Increases the efficiency of appliances and the plumbing
                  Systems.
                </li>
                <li>Enhances service life</li>
                <li>Light weight & compact</li>
                <li>Anticorrosive parts</li>
                <li>Efficaciously cleanses the harmful particles</li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Application"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[20px] py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>Water power plants.</li>
                <li>Ice plant</li>
                <li>Dyeing processes"</li>
                <li>Pharmaceutical industries</li>
                <li>Product finishing</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>Boiler Feed.</li>
                <li>Cooling Tower Make-Up.</li>
                <li>Air Conditioning Plant.</li>
                <li>Textile Processing</li>
                <li>Chemical & textile.</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>Beverage Production.</li>
                <li>Hospitals, Hotels, Laundries etc</li>
                <li>Food processing.</li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button onClick={() => setShowForm(true)} className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <p data-aos="fade-right"
                  data-aos-duration="2000" className="font-bold text-3xl 2xl:text-4xl 2xl:mt-12 uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10">
        Benefits
      </p>
      <ul data-aos="fade-right"
                  data-aos-duration="2000" className="list-disc list-outside pl-5 text-2xl font-normal">
        <li>Prevents Scale Buildup</li>
        <li>Improved Soap Efficiency</li>
        <li>Reduced Soap Scum </li>
        <li>Better Water Heating Efficiency </li>
        <li>Preserves Fabrics </li>
        <li>Reduced Plumbing Maintenance </li>
        <li>Healthier Skin and Hair </li>
        <li>Improved Appliance Performance </li>
        <li>Environmentally Friendly </li>
        <li>Cost Savings</li>
      </ul>

      {/* Add Form Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-[900px]">
          <ModalForm setShowForm={setShowForm} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WaterSofteningPlant;
