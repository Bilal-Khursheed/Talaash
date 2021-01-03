import React, { Component } from "react";
import { Link } from "react-router-dom";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section id="services" class="services">
          <div class="container">
            <div class="section-title" data-aos="zoom-out">
              <h2>Services</h2>
              <p>Why Choose Us</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="icon-box" data-aos="zoom-in-left">
                 
                  <h4 class="title">
                    <Link to="">Create Account</Link>
                  </h4>
                  <p class="description">
                   <b>Simple and quick creation of account on TALAASH within seconds</b>
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
                <div
                  class="icon-box"
                  data-aos="zoom-in-left"
                  data-aos-delay="100"
                >
                  
                  <h4 class="title">
                    <Link to="">File Missing Report</Link>
                  </h4>
                  <p class="description">
                    <b>File Report for Missing Person online without any physical effort</b>
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mt-5 mt-lg-0 ">
                <div
                  class="icon-box"
                  data-aos="zoom-in-left"
                  data-aos-delay="200"
                >
                
                  <h4 class="title">
                    <Link to="">Share with a Click</Link>
                  </h4>
                  <p class="description">
                    <b>Share with Police Station, Hospital & Organization</b>
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-5">
                <div
                  class="icon-box"
                  data-aos="zoom-in-left"
                  data-aos-delay="300"
                >
                 
                  <h4 class="title">
                    <Link to="">Face Recognition</Link>
                  </h4>
                  <p class="description">
                  <b>Add image and match with recognized images</b>
                  </p>
                </div>
              </div>

             
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}
      </div>
    );
  }
}

export default Services;