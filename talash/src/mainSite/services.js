import HeroSection from "../Website/HeroSection";
import Service from "../Website/services";
import React, { Component } from "react";
import Footer from "../Website/Footer";
class Services extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeroSection />
        <Service />
        <Footer />
      </div>
    );
  }
}

export default Services;
