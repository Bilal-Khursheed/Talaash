import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signupOpt.css";
import Footer from "../Website/Footer";
class Options extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="container h-100">
          <div class="row align-middle">
            <div class="col-md-6 col-lg-4 column">
              <Link to="orgsignup">
                <div class="card gr-1">
                  <div class="txt">
                    <h1>
                      <strong>
                        {" "}
                        SIGNUP <br></br> AS ORGANIZATION
                      </strong>
                    </h1>
                    <strong>
                      <p>CLICK ON IT AND SIGNUP FOR ORGANIZATION.</p>
                    </strong>
                  </div>
                  <strong>
                    <a>more</a>
                  </strong>
                  <div class="ico-card">
                  <i class="ri-hand-heart-line"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-6 col-lg-4 column">
              <Link to="Policesignup">
                <div class="card gr-4">
                  <div class="txt">
                    <h1>
                      <strong>
                        {" "}
                        SIGNUP<br></br> AS POLICE
                      </strong>
                    </h1>
                    <strong>
                      <p>CLICK ON IT AND SIGNUP FOR POLICE.</p>
                    </strong>
                  </div>
                  <strong>
                    <a href="#">more</a>
                  </strong>
                  <div class="ico-card">
                  <i class="ri-police-car-fill"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-6 col-lg-4 column">
              <Link to="hosignup">
                <div class="card gr-2">
                  <div class="txt">
                    <h1>
                      <strong>
                        SIGNUP <br></br> AS HOSPITAL
                        
                      </strong>
                    </h1>

                    <strong>
                      <p>CLICK ON IT AND SIGNUP FOR HOSPITAL.</p>
                    </strong>
                  </div>
                  <strong>
                    {" "}
                    <a href="#">more</a>
                  </strong>
                  <div class="ico-card">
                    <i class="fa fa-hospital-o"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-6 col-lg-4 column">
              <Link to="signup">
                <div class="card gr-3">
                  <div class="txt">
                    <h1>
                      <strong>
                        SIGNUP AS <br></br> USER
                      </strong>
                    </h1>
                    <strong>
                      <p>CLICK ON IT AND SIGNUP FOR USER.</p>
                    </strong>
                  </div>
                  <strong>
                    {" "}
                    <a>more</a>
                  </strong>
                  <div class="ico-card">
                    <i class="fa fa-user"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Options;
