import React, { Component } from "react";
import { Link } from "react-router-dom";
class Team extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="team" class="team">
          <div class="container">
            <div class="section-title" data-aos="zoom-out">
              <h2>Team</h2>
              <p>Our Hardworking Team</p>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up">
                  <div class="member-img">
                    <img
                      src="assets/img/team/team-1.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <Link to="">
                        <i class="icofont-twitter"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-facebook"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-instagram"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                  <div class="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <Link to="">
                        <i class="icofont-twitter"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-facebook"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-instagram"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="200">
                  <div class="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <Link to="">
                        <i class="icofont-twitter"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-facebook"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-instagram"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="300">
                  <div class="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <Link to="">
                        <i class="icofont-twitter"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-facebook"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-instagram"></i>
                      </Link>
                      <Link to="">
                        <i class="icofont-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Team Section --> */}
      </div>
    );
  }
}

export default Team;
