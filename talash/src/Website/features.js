import React, { Component } from "react";
import { Link } from "react-router-dom";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" class="features">
          <div class="container">
            <ul class="nav nav-tabs row d-flex">
              <li class="nav-item col-3" data-aos="zoom-in">
                <Link
                  class="nav-link "
                  data-toggle="tab"
                  to="#tab-1"
                >
                 <i class="ri-draft-line"></i>
                  <h4 class="d-none d-lg-block">
                    File Report
                  </h4>
                </Link>
              </li>
              <li
                class="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Link class="nav-link" data-toggle="tab" to="#tab-2">
                <i class="ri-share-box-fill"></i>
                  <h4 class="d-none d-lg-block">
                    Share Report just by one click.
                  </h4>
                </Link>
              </li>
              <li
                class="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Link class="nav-link" data-toggle="tab" to="#tab-3">
                <i class="ri-profile-line"></i>
                  <h4 class="d-none d-lg-block">Automated Poster Creation</h4>
                </Link>
              </li>
              <li
                class="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Link class="nav-link" data-toggle="tab" to="#tab-4">
                <i class="ri-user-search-line"></i>
                  <h4 class="d-none d-lg-block">Search by Image</h4>
                </Link>
              </li>
            </ul>

            <div class="tab-content" data-aos="fade-up">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>
                      Missing Cases Reports
                    </h3>
                    <p class="font-italic">
                      In Pakistan Missing Cases are increasing day by day. Most of missing cases in Pakistan
                      remain unsolved because people don't have facilities. Here are some facts.
                    </p>
                    <ul>
                      <li>
                        <i class="ri-check-double-line"></i> In 2017 
                        reported missing are 1200 and solved missing cases are 208.
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> In 2018
                       reported missing are 767 and solved missing cases are 46.
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> In 2019 
                        reported missing are 1134 and solved missing cases are 203.
                      </li>
                    </ul>
                    <p>
                      As the facts show number of solved cases are less than the reported Cases.
                      To solve this problem TALAASH provide facilities that supoort people in 
                      findng theiir loved ones.
                    </p>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-1.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
        {/* <!-- End Features Section --> */}
      </div>
    );
  }
}

export default Features;
