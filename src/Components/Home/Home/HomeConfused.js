import React from "react";
// import { FaTwitter } from "react-icons/fa";
import device from "../../../images/device-1.png";

const HomeConfused = () => {
  return (
    <>
      <section className="slice-lg mt-4">
        <div className="container">
          <div className="row align-items-center cols-xs-space cols-sm-space cols-md-space">
            <div className="col-lg-6 order-lg-2 ml-lg-auto">
              <div className="block block-image">
                <img
                  src={device}
                  alt="device"
                  className="img-fluid img-center"
                />
              </div>
            </div>
            <div className="col-lg-5 order-lg-1">
              <div className="row-wrapper">
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <div className="icon icon-lg">
                        <i className="fab fa-twitter"></i>
                      </div>
                      <div className="icon-text">
                        <h3 className="heading h4">searching for </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <div className="icon icon-lg">
                        <i></i>
                      </div>
                      <div className="icon-text">
                        <h3 className="heading h4">facilities</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <div className="icon icon-lg">
                        <i></i>
                      </div>
                      <div className="icon-text">
                        <h3 className="heading h4">changing stuff later</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeConfused;
