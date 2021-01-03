import React, { Component } from "react";
import { Link } from "react-router-dom";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="portfolio" class="portfolio">
          <div class="container">
            <div class="section-title" data-aos="zoom-out">
              <h2>Users</h2>
              <p>Who Uses Us</p>
            </div>

            <ul
              id="portfolio-flters"
              class="d-flex justify-content-end"
              data-aos="fade-up"
            >
              
              <li data-filter=".filter-app">Police</li>
              <li data-filter=".filter-card">Hospital</li>
              <li data-filter=".filter-web">Organization</li>
              <li data-filter=".filter-web">Families of Missing Persons</li>
            </ul>

            <div class="row portfolio-container" data-aos="fade-up">
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-img">
                  <img
                    src="assets/img/portfolio/Police.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="portfolio-info">
                  <h4>Police</h4>
                  <p>Report Share to Police</p>
                  <Link
                    to="assets/img/portfolio/Police.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="App 1"
                  >
                    <i class="bx bx-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </Link>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-img">
                  <img
                    src="assets/img/portfolio/Hospital.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="portfolio-info">
                  <h4>Hospital</h4>
                  <p>Report Share to Hospital</p>
                  <Link
                    to="assets/img/portfolio/Hospital.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Web 3"
                  >
                    <i class="bx bx-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </Link>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-img">
                  <img
                    src="assets/img/portfolio/Edhi.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="portfolio-info">
                  <h4>Organization</h4>
                  <p>Report Share to Organization</p>
                  <Link
                    to="assets/img/portfolio/Edhi.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="App 2"
                  >
                    <i class="bx bx-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </Link>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-img">
                  <img
                    src="assets/img/portfolio/Org.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="portfolio-info">
                  <h4>Organization</h4>
                  <p>Card</p>
                  <Link
                    to="assets/img/portfolio/Org.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Card 2"
                  >
                    <i class="bx bx-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </Link>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-img">
                  <img
                    src="assets/img/portfolio/Miss1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="portfolio-info">
                  <h4>Missing Person Families</h4>
                  <p>File Report</p>
                  <Link
                    to="assets/img/portfolio/Miss1.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="card 2"
                  >
                    <i class="bx bx-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </Link>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-img">
                  <img
                    src="assets/img/portfolio/Miss2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="portfolio-info">
                  <h4>Missing Person Families</h4>
                  <p>File Report</p>
                  <Link
                    to="assets/img/portfolio/Miss2.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="App 3"
                  >
                    <i class="bx bx-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </Link>
                </div>
              </div>

             
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
