import React from "react";
import "./TopBar.css";
import { FcCallback } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";

const TopBar = () => {
 return (
  <div className="container-fluid top-bar-border">
   <div className="container d-none d-md-flex justify-content-between py-2 top-bar-text">
    <div>
     <p className="top-bar-text-left my-0">Welcome to SoloTrip</p>
    </div>
    <div className="d-flex top-bar-text-right">
     <p className="my-0">
      <FcCallback /> 123-12345678
     </p>
     <p className="ms-4 my-0">
      <HiOutlineMail /> contact@solotrip.com
     </p>
    </div>
   </div>
  </div>
 );
};

export default TopBar;
