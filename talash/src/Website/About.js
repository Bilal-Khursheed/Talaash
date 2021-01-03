import React,{Component} from "react";
import { Link } from "react-router-dom";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        <section id="about" class="about">
          <div class="container">
            <div class="section-title" data-aos="zoom-out">
              <h2>About</h2>
              <p>Who we are</p>
            </div>

            <div class="row content" data-aos="fade-up">
              <div class="col-lg-8" style={{ fontSize:'150%'}}>
                <p>
                  <b>We are your family helping you find your loved ones quickly:</b>
                </p>
                <ul>
                  <li>
                    <i class="ri-check-double-line"></i> <b>We save your effort and time by filing Missing Person Report online</b>
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> <b>Share report with Organization, Hospital & Police Station</b>
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> <b>Maintain profile of your loved ones until you can't find them</b>
                  </li>
                </ul>
              </div>
   
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}
      </div>
    );
  }
}

export default About;
