import HeroSection from "../Website/HeroSection";
import Abouts from "../Website/About";
import React, { Component } from "react";
import Footer from "../Website/Footer";
class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeroSection />
        <Abouts />
        <Footer />
      </div>
    );
  }
}

export default About;
