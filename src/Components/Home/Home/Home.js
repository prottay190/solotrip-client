import React from "react";
import Headers from "../../Shared/Navbar/Headers";
import Slider from "../Carousel/Slider";
import KnowMore from "../Knowmore/KnowMore";
import "./Home.css";
import Hotels from "../hotels/Hotels";
import HomeAboutSection from "./HomeAboutSection";
import HomeConfused from "./HomeConfused";
import TopNotch from "./TopNotch";

const Home = () => {
  return (
    <div>
      <Headers />
      <TopNotch />
      <HomeAboutSection />
      <HomeConfused />
      <Hotels />
      <Slider />
      <div className="dual-tone">
        <KnowMore />
      </div>
    </div>
  );
};

export default Home;
