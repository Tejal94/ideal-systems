import React, { useState , useEffect} from "react";
import { plantsData } from "../../Constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tab";
import ModalForm from "../../components/ModalForm";
import { Dialog, DialogContent } from "../ui/dialog";
import AOS from "aos";
import "aos/dist/aos.css";

const PlantsDataComp = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 2500, overflow: "hidden" });
  }, []);

  return (
    <div className="w-full px-2 md:px-2 lg:px-28 mt-16">
      <section className="" data-aos="fade-right"
                  data-aos-duration="2000">
        <p className="font-bold text-3xl 2xl:text-4xl uppercase underline underline-offset-8 text-[#222222] mb-16">
          Effluent Treatment Plant
        </p>
        <span className="font-normal text-xl 2xl:text-[22px] text-justify leading-7 capitalize">
          Our Effluent Treatment Plants (ETP) are designed to treat different
          types of wastewater by using advanced processes to remove organic and
          inorganic contaminants, oils, grease, heavy metals, and suspended
          solids. You create customized solutions based on the specific
          characteristics of the wastewater to meet government regulations and
          ensure the treated water meets permissible limits.
        </span>
        <p className="font-normal text-xl 2xl:text-[22px] text-justify mt-8 leading-7 capitalize">
          With more than twelve years of experience, we're pioneers in our
          field. We're constantly seeking the latest, most cost-effective
          technologies to meet society's needs effortlessly.
        </p>
      </section>

      <p className="font-bold text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-16">
        Effluent treatment plants we offer
      </p>
      <main className="px-2 md:px-16 lg:px-20 2xl:px-60 2xl:mt-12" >
        <Tabs defaultValue="The Process">
          <TabsList className="h-16 w-full justify-between mb-12">
            <TabsTrigger
              className="disabled:opacity-100 2xl:text-[22px] disabled:data-[state=active]:bg-[#E4F5FF] text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="The Process"
            >
              Containerided ETP
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 2xl:text-[22px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Features"
            >
              Zero liquid dischrge treatment plant
            </TabsTrigger>

            <TabsTrigger
              className="disabled:opacity-100 2xl:text-[22px] disabled:data-[state=active]:border-b-primary-500 text-black w-1/3 py-2 disabled:data-[state=active]:text-primary-500"
              value="Application"
            >
              Grey water treatment plan
            </TabsTrigger>
          </TabsList>

          <TabsContent className="relative flex flex-col " value="The Process">
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[20px] py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>
                  Technology : Physical / Chemical / Biological / UlFiltration
                </li>
                <li>Features : Semi-automatic Operation</li>
                <li>Required less space as compared to conventional design.</li>
                <li>Very Compact and Great aesthetic.</li>
                <li>Reduced Installation and commissioning time on site.</li>
                <li>Plug and play operation.</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>Easy Dismantling and transportation.</li>
                <li>
                  Made to order product. Civil Work &#45; Collection Tank and
                  Container Foundation.
                </li>
                <li>
                  Typical Industries : Chemical, Pharmaceuticals, Automobiles,
                  etc
                </li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button onClick={() => setShowForm(true)}  className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
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
                <li>
                  Technology : Physical / Chemical / Advance Filtration / MEE
                  and ATFD
                </li>
                <li>Features : Advance Level of treatment for ZLD</li>
                <li>Types : Continuous</li>
                <li>
                  Atomization : Manual, Semi-automatic and Fully-automatic. Very
                  Compact and proven design.
                </li>
                <li>
                  Comprises of : regular ETP followed by UF and RO and final
                  treatment by MEE + ATFD
                </li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>
                  Water Recycle: Recycling of treated is possible with advanced
                  treatment methodology like UF and RO.
                </li>
                <li>
                  Water Recycle: Recycling of treated effluent is possible with
                  advanced treatment methodology like UF and RO / MEE and ATFD
                </li>
                <li>
                  Typical Industries : Chemicals, Pharmaceuticals, Hazardous
                  Effluent, Metal pre-treatment, etc.
                </li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button onClick={() => setShowForm(true)}  className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
          <TabsContent
            className="flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
            value="Application"
          >
            <div className="w-full h-auto px-2 sm:px-10 md:px-16 text-lg 2xl:text-[20px] py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <ul className="list-disc list-outside pl-5">
                <li>
                  Technology : Physical / Chemical / Biological / UlFiltration
                </li>
                <li>Features : Semi-automatic Operation.</li>
                <li>Required less space as compared to conventional design.</li>
                <li>Reduced Installation and commissioning time on site.</li>
                <li>Plug and play operation</li>
                <li>Easy Dismantling and transportation.</li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>
                  Made to order product. Civil Work &#45; Collection Tank and
                  Container Foundation
                </li>
                <li>
                  Typical Industries : Chemical, Pharmaceuticals, Automobiles,
                  etc
                </li>
              </ul>
            </div>
            <div className="w-full px-2 sm:px-10 md:px-16 pb-8 flex justify-end">
              <button onClick={() => setShowForm(true)}  className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button px-6 py-2.5 font-semibold text-center">
                Get a Quote
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <p className="font-bold text-3xl 2xl:text-4xl uppercase underline mt-16 underline-offset-8 text-[#222222] mb-10" data-aos="fade-right"
                  data-aos-duration="2000">
        Benefits
      </p>
      <ul className="list-disc list-outside pl-5 text-2xl font-normal" data-aos="fade-right"
                  data-aos-duration="2000">
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

export default PlantsDataComp;
