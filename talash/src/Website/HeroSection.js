import React, { Component } from "react";
import { Link } from "react-router-dom";
class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        {/* <!-- ======= Hero Section ======= --> */}
        <section
          id="hero"
          class="d-flex flex-column justify-content-end align-items-center"
        >
          <div
            id="heroCarousel"
            class="container carousel carousel-fade"
            data-ride="carousel"
          >
            {/* <!-- Slide 1 --> */}
            <div class="carousel-item active">
              <div class="carousel-container">
                <h2 class="animate__animated animate__fadeInDown">
                  Welcome to <span>TALAASH</span>
                </h2>
                <h2 class="animate__animated fanimate__adeInUp">
                TALAASH will help you find your loved ones.
                </h2>
                <Link
                  to="about"
                  class="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* <!-- Slide 2 --> */}
            <div class="carousel-item">
              <div class="carousel-container">
                <h2 class="animate__animated animate__fadeInDown">
                  Our Mission
                </h2>
                <p class="animate__animated animate__fadeInUp">
                  Our mission is to provide facilities to finder in finding their loved ones 
                  by providing online reporting system that will share to hospital, police and
                  organization by just one click.
                </p>
                <Link
                  to="about"
                  class="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* <!-- Slide 3 --> */}
            <div class="carousel-item">
              <div class="carousel-container">
                <h2 class="animate__animated animate__fadeInDown">
                  Technology
                </h2>
                <p class="animate__animated animate__fadeInUp">
                  TALAASH  provide online reporting, automated poster creation, search by image 
                  facilities to resolve missing person cases.
                </p>
                <Link
                  to="#about"
                  class="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </Link>
              </div>
            </div>

            <Link
              class="carousel-control-prev"
              to="#heroCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bx bx-chevron-left"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </Link>

            <Link
              class="carousel-control-next"
              to="#heroCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon bx bx-chevron-right"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </Link>
          </div>

          {/* <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="wave1">
            <use xlink:to="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
          </g>
          <g class="wave2">
            <use xlink:to="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
          </g>
          <g class="wave3">
            <use xlink={to="#wave-path", x="50" y="9", fill="#fff"}/>
          </g>
        </svg> */}
        </section>
        {/* <!-- End Hero --> */}
      </div>
    );
  }
}

export default HeroSection;
