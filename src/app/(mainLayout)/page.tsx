import React from "react";
import AboutUs from "../../components/homePage/AboutUs";
import MordernBeautiful from "../../components/homePage/MordernBeautiful";
import Testimonial from "../../components/homePage/Testimonial";
import TravioSpecilas from "../../components/homePage/TravioSpecilas";
import MordenAndBeutiful from "../../components/homePage/MordenAndBeutiful";
import HeroSection from "../../components/homePage/HeroSection";
import PopularDestinations from "../../components/homePage/PopularDestinations";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TravioSpecilas />
      <MordernBeautiful />
      <MordenAndBeutiful />
      <PopularDestinations />
      <AboutUs />
      <Testimonial />
    </div>
  );
};

export default HomePage;
