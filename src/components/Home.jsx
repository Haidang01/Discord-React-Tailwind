import React from "react";
import Discover from "./Discover";
import Groups from "./Grounds";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div className="flex bg-[#393943] ">
      {/* Friends + Groups */}
      <Groups />
      {/* Discover */}
      <Discover />
      {/* Main Content */}
      <MainContent />
      {/* Hero */}
    </div>
  );
};

export default Home;