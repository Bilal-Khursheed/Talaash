import HeroSection from "../Website/HeroSection";
import Teams from "../Website/team";
import React, { Component } from "react";
import Footer from "../Website/Footer";
class Team extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeroSection />
        <Teams />
        <Footer/>
      </div>
    );
  }
}

export default Team;
