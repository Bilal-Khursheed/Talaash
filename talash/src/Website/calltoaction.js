import React, { Component } from "react";
import { Link } from "react-router-dom";
class CalltoAction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section id="cta" class="cta">
          <div class="container">
            <div class="row" data-aos="zoom-out">
              <div class="col-lg-9 text-center text-lg-left">
                <h3>Call To Action</h3>
                <p>
                  {" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <Link class="cta-btn align-middle" to="#">
                  Call To Action
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CalltoAction;
