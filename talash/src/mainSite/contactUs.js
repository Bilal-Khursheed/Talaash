import HeroSection from "../Website/HeroSection";
import ContactsUs from "../Website/contact";
import React, { Component } from "react";
import Footer from "../Website/Footer";
class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeroSection />
        <ContactsUs />
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
