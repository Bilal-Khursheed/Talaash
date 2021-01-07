import React, { Component } from "react";
import { Link } from "react-router-dom";
import About from "./About";
// import CalltoAction from "./calltoaction";
// import ContactUs from "./contact";
import Features from "./features";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Portfolio from "./portfolio";
// import Questions from "./questions";
import Services from "./services";
// import Team from "./team";
// import TestNomiails from "./testnominals";

class website extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Header ======= --> */}
        {/* <!-- End Header --> */}

        <HeroSection />
        <main id="main">
          {/* <!-- ======= About Section ======= --> */}
          <About />
          {/* feature */}
          <Features />
         

          {/* <!-- ======= Services Section ======= --> */}
          <Services />
          {/* <!-- ======= Portfolio Section ======= --> */}
          {/* <!-- End Portfolio Section --> */}
          <Portfolio />
          
          
        </main>
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
        <Footer/>
              </div>
    );
  }
}
export default website;
