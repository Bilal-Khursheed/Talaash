import React, { Component } from "react";
import { Link } from "react-router-dom";

class Questions extends Component {
  state = {};
  render() {
    return (
      <div>
        {" "}
        <section id="faq" class="faq">
          <div class="container">
            <div class="section-title" data-aos="zoom-out">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
            </div>

            <ul class="faq-list">
              <li data-aos="fade-up" data-aos-delay="100">
                <Link data-toggle="collapse" class="" to="#faq1">
                  Non consectetur a erat nam at lectus urna duis?{" "}
                  <i class="icofont-simple-up"></i>
                </Link>
                <div id="faq1" class="collapse show" data-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <Link data-toggle="collapse" to="#faq2" class="collapsed">
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque? <i class="icofont-simple-up"></i>
                </Link>
                <div id="faq2" class="collapse" data-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <Link data-toggle="collapse" to="#faq3" class="collapsed">
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi? <i class="icofont-simple-up"></i>
                </Link>
                <div id="faq3" class="collapse" data-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <Link data-toggle="collapse" to="#faq4" class="collapsed">
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                  <i class="icofont-simple-up"></i>
                </Link>
                <div id="faq4" class="collapse" data-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="500">
                <Link data-toggle="collapse" to="#faq5" class="collapsed">
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i class="icofont-simple-up"></i>
                </Link>
                <div id="faq5" class="collapse" data-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="600">
                <Link data-toggle="collapse" to="#faq6" class="collapsed">
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?{" "}
                  <i class="icofont-simple-up"></i>
                </Link>
                <div id="faq6" class="collapse" data-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque. Pellentesque diam volutpat commodo sed
                    egestas egestas fringilla phasellus faucibus. Nibh tellus
                    molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- End F.A.Q Section --> */}
      </div>
    );
  }
}

export default Questions;
