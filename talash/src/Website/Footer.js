import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer id="footer">
          <div class="container">
            <h3>TALAASH</h3>
            <p>
              A website that provide online report service.
            </p>
            <div class="social-links">
              <Link to="#" class="twitter">
                <i class="bx bxl-twitter"></i>
              </Link>
              <Link to="#" class="facebook">
                <i class="bx bxl-facebook"></i>
              </Link>
              <Link to="#" class="instagram">
                <i class="bx bxl-instagram"></i>
              </Link>
              
            </div>
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>TALAASH</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
