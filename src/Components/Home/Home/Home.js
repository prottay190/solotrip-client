import React from "react";
import Headers from "../../Shared/Navbar/Headers";
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
    </div>
  );
};

export default Home;
