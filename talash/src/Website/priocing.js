import React, { Component } from "react";
import { Link } from "react-router-dom";
class Pricing extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="pricing" class="pricing">
          <div class="container">
            <div class="section-title" data-aos="zoom-out">
              <h2>Pricing</h2>
              <p>Our Competing Prices</p>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="box" data-aos="zoom-in">
                  <h3>Free</h3>
                  <h4>
                    <sup>$</sup>0<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li class="na">Pharetra massa</li>
                    <li class="na">Massa ultricies mi</li>
                  </ul>
                  <div class="btn-wrap">
                    <Link to="#" class="btn-buy">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
                <div
                  class="box featured"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <h3>Business</h3>
                  <h4>
                    <sup>$</sup>19<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li class="na">Massa ultricies mi</li>
                  </ul>
                  <div class="btn-wrap">
                    <Link to="#" class="btn-buy">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="200">
                  <h3>Developer</h3>
                  <h4>
                    <sup>$</sup>29<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div class="btn-wrap">
                    <Link to="#" class="btn-buy">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="300">
                  <span class="advanced">Advanced</span>
                  <h3>Ultimate</h3>
                  <h4>
                    <sup>$</sup>49<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div class="btn-wrap">
                    <Link to="#" class="btn-buy">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Pricing Section --> */}
      </div>
    );
  }
}

export default Pricing;
