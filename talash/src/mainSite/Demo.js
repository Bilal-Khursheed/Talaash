import React, { Component } from "react";
import Footer from "../Website/Footer";
// import HeroSection from "../Website/HeroSection";
class Demo extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <HeroSection /> */}
        <div
          class="embed-responsive embed-responsive-21by9"
          style={{ marginTop: "-5px" }}
        >
          <iframe
            style={{ marginTop: "70px" }}
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/mtkQEwp0mIA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Demo;
