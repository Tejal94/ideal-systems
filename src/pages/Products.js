import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlantsDataComp from "../components/plants/PlantsDataComp";
import WaterSofteningPlant from "../components/plants/WaterSofteningPlant";
import ReverseOsmosisPlant from "../components/plants/ReverseOsmosisPlant";
import DemineralizationPlant from "../components/plants/DemineralizationPlant";
import SewageTreatmentPlant from "../components/plants/SewageTreatmentPlant";
import UltraFilteration from "../components/plants/UltraFilteration";
import RainWaterHarvesting from "../components/plants/RainWaterHarvesting";
import { useSearchParams } from "react-router-dom";

const Products = () => {

  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div>
      <Navbar />
      {/* Hero Banner */}
      <section class="bg-[url('./assets/banner/banner-aboutus.svg')] h-[438px] w-full bg-cover bg-center p-20" />

      {/* Title and About */}
      {tab === "STP" && <SewageTreatmentPlant />}
      {tab === "ETP" && <PlantsDataComp/>}
      {tab === "WSP" && <WaterSofteningPlant/>}
      {tab === "ROP" && <ReverseOsmosisPlant/>}
      {tab === "DP" &&<DemineralizationPlant/>}
      {tab === "UFP" && <UltraFilteration />}
      {tab === "RWH" && <RainWaterHarvesting />}

      <Footer />
    </div>
  );
};

export default Products;
