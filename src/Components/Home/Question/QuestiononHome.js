import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuestiononHome = () => {
  return (
    <>
      <section class="slice bg-warning">
        <div class="container">
          <div class="row align-items-center cols-xs-space cols-sm-space cols-md-space text-center text-lg-left">
            <div class="col-lg-7">
              <h1 class="heading h2 text-white strong-500">Want to Connect?</h1>
              <p class="lead text-white">
                Take your time & just call right away to or email us for any
                queries
              </p>
            </div>
            <div class="col-lg-3 ml-lg-auto">
              <div class="text-center text-md-right">
                <Link to="/contactus">
                  <Button class="btn btn-danger btn-rounded my-3 px-5">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuestiononHome;
