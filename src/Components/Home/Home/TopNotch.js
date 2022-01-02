import React from "react";
import video from "../../../Video/smooth.mp4";
import "./TopNotch.css";

const TopNotch = () => {
  return (
    <div>
      <video src={video} autoPlay loop muted></video>
      <div className="text">
        <h2>Adventure Awaits</h2>
      </div>
    </div>
  );
};

export default TopNotch;
