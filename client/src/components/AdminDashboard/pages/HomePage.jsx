import React from "react";
import LargeWidget from "../widgets/LargeWidget";
import SmallWidget from "../widgets/SmallWidget";
import Chart from "../charts/Chart";
import { DummyData } from "../DummyData";
import FeaturedInfo from "./FeaturedInfo";
import "./homepage.css";
const HomePage = () => {

  return (
    <div className='admin_home_page'>
      <FeaturedInfo />
      <Chart
        data={DummyData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='admin_home_widgets'>
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
};

export default HomePage;
