import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <header id="header" class="fixed-top" style={{ color: "black" }}>
          <nav
            class="navbar navbar-expand-md navbar-dark fixed-top"
            id="banner"
            style={{ color: "black" }}
          >
            <div class="container">
              <Link to="">
                {" "}
                <a class="navbar-brand">
                  <span>TALAASH</span>{" "}
                </a>
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link to="">
                      {" "}
                      <a class="nav-link" href="/">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="about">
                      {" "}
                      <a class="nav-link">About</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="services">
                      {" "}
                      <a class="nav-link">Services</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="Demo">
                      {" "}
                      <a class="nav-link">Demo</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="login">
                      {" "}
                      <a class="nav-link">Login</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {this.props.children}
      </div>
    );
  }
}

export default Header;
