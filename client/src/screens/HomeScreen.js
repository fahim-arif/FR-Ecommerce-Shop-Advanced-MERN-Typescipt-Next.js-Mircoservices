import React from "react";
import Hero from "../components/home/Hero.jsx";
import DailyDealsSection from "../components/home/DailyDealsSection.jsx";
import FeaturedCategory from "../components/home/FeaturedCategory.jsx";
import OtherSections from "../components/home/OtherSections.jsx";
import Slider from "../components/common/Slider";

const HomeScreen = () => {
  return (
    <div>
      <Hero></Hero>
      <DailyDealsSection></DailyDealsSection>
      <FeaturedCategory></FeaturedCategory>
      <OtherSections></OtherSections>
      <Slider></Slider>
    </div>
  );
};

export default HomeScreen;
