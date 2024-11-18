import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tab";
import ModalForm from "../../components/ModalForm";
import { Dialog, DialogContent } from "../ui/dialog";
import AOS from "aos";
import "aos/dist/aos.css";

const DemineralizationPlant = () => {

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);

  return (
    <div className="w-full px-4 md:px-2 lg:px-28 mt-16">
      <section className="" data-aos="fade-right"
                  data-aos-duration="2000">
        <p className="font-bold text-center leading-10 md:text-left text-3xl uppercase underline underline-offset-8 text-[#222222] mb-16">
          Demineralization Plant
        </p>
        <span className="font-normal text-xl text-justify leading-7">
          Demineralization is the process of removing mineral salts from water,
          typically done through ion exchange. This process results in
          demineralized water, which is free of dissolved minerals. Many
          industries, such as laboratories, steam, power, process, and cooling,
          use demineralization plants for various purposes. These plants employ
          ion exchange resins that selectively remove ions like calcium,
          magnesium, and sodium from the water, replacing them with hydrogen or
          hydroxide ions. Demineralized water is used in industries where the
          presence of minerals can cause scaling or other issues in equipment.
        </span>
        <p className="font-normal text-xl text-justify mt-8 leading-7">
          With more than twelve years of experience, we're pioneers in our
          field. We're constantly seeking the latest, most cost-effective
          technologies to meet society's needs effortlessly.
        </p>
      </section>

      <main className="px-2 md:px-16 lg:px-20 2xl:px-60 lg:mt-10 2xl:mt-12">
        <Tabs defaultValue="The Process">
          <TabsList className="h-16 w-full justify-between mb-12">
            <TabsTrigger
              className="disabled:opacity-100 lg:text-[16px] 2xl:text-[22px] disabled:data-[state=active]:bg-[#E4F5FF] text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="The Process"
            >
              The Process
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 lg:text-[16px] 2xl:text-[22px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Features"
            >
              Features
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 lg:text-[16px] 2xl:text-[22px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Application"
            >
              Application
            </TabsTrigger>
          </TabsList>

          <TabsContent className="relative flex flex-col " value="The Process">
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg py-10 grid grid-cols-1 md:grid-cols-2 md:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>
                  Ion Exchange: Demineralization plants use ion exchange resins
                  to remove mineral ions from water.
                </li>
                <li>
                  Selective Absorption: Resins selectively absorb ions like
                  calcium, magnesium, and sodium, replacing them with hydrogen
                  or hydroxide ions.
                </li>
                <li>
                Regeneration: When the resin becomes saturated with minerals, it is regenerated using a salt solution to restore its ion exchange capacity.
                </li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>
                Final Polishing: The treated water may undergo a final polishing step to ensure it meets the required purity standards.
                </li>
                <li>
                Applications: Demineralized water is used in industries where mineral-free water is essential, such as in boilers, cooling systems, and laboratories.
                </li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-center md:justify-end">
              <button onClick={() => setShowForm(true)} className="bg-[#0231A8] w-48 p-2 rounded-lg self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Features"
          >
            <div className="w-full h-auto px-8 sm:px-10 md:px-16 text-lg  py-10 grid grid-cols-1 md:grid-cols-2 md:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>Ion Exchange Resins</li>
                <li>Selective Absorption</li>
                <li>Regeneration System</li>
                <li>Multi-Stage Process</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>Final Polishing</li>
                <li>Automatic Operation</li>
                <li>Customizable Design</li>
                <li>Cost-Effective</li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-center md:justify-end">
              <button onClick={() => setShowForm(true)}  className="bg-[#0231A8] w-48 p-2 rounded-lg self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Application"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg py-10 grid grid-cols-1 md:grid-cols-2 md:gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>Oil and Gas Industries</li>
                <li>Municipal Water Treatment Plants</li>
                <li>Cooling Tower Makeup Water</li>
                <li>Boiler Feed Water Treatment</li>
                <li>Electronics Industries</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>Hospitals and Laboratories</li>
                <li>Food and Beverage Industries</li>
                <li>Textile Industries</li>
                <li>Chemical Industries</li>
                <li>Power Plants</li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-center md:justify-end">
              <button onClick={() => setShowForm(true)}  className="bg-[#0231A8] w-48 p-2 rounded-lg self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <p className="font-bold text-center md:text-left text-3xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10" data-aos="fade-right"
                  data-aos-duration="2000">
        Benefits
      </p>
      <ul className="list-disc list-outside pl-5 text-2xl font-normal" data-aos="fade-right"
                  data-aos-duration="2000">
        <li>Removes Mineral Salts</li>
        <li>Prevents Scaling</li>
        <li>Improves Efficiency</li>
        <li>High Purity Water </li>
        <li>Cost-Effective</li>
        <li>Environmentally Friendly</li>
        <li>Versatile Applications</li>
        <li>Regulatory Compliance</li>
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

export default DemineralizationPlant;
