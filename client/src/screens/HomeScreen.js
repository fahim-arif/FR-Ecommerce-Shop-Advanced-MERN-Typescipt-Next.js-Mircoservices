import React from "react";
import TopBar from "../components/common/TopBar.jsx";
import Header from "../components/common/Header.jsx";
import HeaderBottom from "../components/common/HeaderBottom.jsx";
import Hero from "../components/home/Hero.jsx";
import DailyDealsSection from "../components/home/DailyDealsSection.jsx";
import FeaturedCategory from "../components/home/FeaturedCategory.jsx";
import OtherSections from "../components/home/OtherSections.jsx";

const HomeScreen = () => {
  return (
    <div>
      <TopBar></TopBar>
      <Header></Header>
      <HeaderBottom></HeaderBottom>
      <Hero></Hero>
      <DailyDealsSection></DailyDealsSection>
      <FeaturedCategory></FeaturedCategory>
      <OtherSections></OtherSections>
    </div>
  );
};

export default HomeScreen;
