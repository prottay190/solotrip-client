import React from "react";
import client1 from "../../../images/client-1.png";
import client2 from "../../../images/client-2.png";
import client3 from "../../../images/client-3.png";
import client4 from "../../../images/client-4.png";
import client5 from "../../../images/client-5.png";
import client6 from "../../../images/client-6.png";

const Partner = () => {
  return (
    <>
      <section class="slice">
        <div class="container">
          <div class="mb-md text-center">
            <h3 style={{ marginTop: "50px" }} class="heading h2">
              Trusted by over <span class="text-success">30k</span> clients
            </h3>
            <div class="fluid-paragraph mt-3">
              <p class="lead">Global Brands</p>
            </div>
          </div>
          <div class="row cols-xs-space cols-sm-space cols-md-space">
            <div class="col-md-2 col-6">
              <div class="px-4 py-4 rounded">
                <img src={client1} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-2 col-6">
              <div class="px-4 py-4 rounded">
                <img src={client2} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-2 col-6">
              <div class="px-4 py-4 rounded">
                <img src={client3} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-2 col-6">
              <div class="px-4 py-4 rounded">
                <img src={client4} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-2 col-6">
              <div class="px-4 py-4 rounded">
                <img src={client5} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-2 col-6">
              <div class="px-4 py-4 rounded">
                <img src={client6} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
