import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import LeatherCollection from "@/components/sections/LeatherSection";
import LookbookHighlight from "@/components/sections/LookBook";
import NewCollectionBanner from "@/components/sections/NewCollec";
import SocksCollection from "@/components/sections/ProductSection";
import EditorialSpotlight from "@/components/sections/Spotlight";
import CategoryShowcase from "@/components/sections/CateSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SocksCollection />
      <NewCollectionBanner />
      <EditorialSpotlight />
      <LeatherCollection />
      <CategoryShowcase />
      <LookbookHighlight />
    </>
  );
};

export default Home;