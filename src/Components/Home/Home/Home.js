import React from "react";
import Headers from "../../Shared/Navbar/Headers";
import HomeAboutSection from "./HomeAboutSection";
import HomeConfused from "./HomeConfused";
import TopNotch from "./TopNotch";
import Hotels from "../hotels/Hotels";

const Home = () => {
  return (
    <div>
      <Headers />
      <TopNotch />
      <HomeAboutSection />
      <HomeConfused />
      <Hotels />
    </div>
  );
};

export default Home;
