import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header id="header" class="fixed-top d-flex align-items-center   ">
          <div class="container d-flex align-items-center">
            <div class="logo mr-auto">
              <h1 class="text-light">
                <Link to="/">TALAASH</Link>
              </h1>
              {/* <!-- Uncomment below if you prefer to use an image logo --> */}
              <Link to=""></Link>
            </div>

            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="services">Services</Link>
                </li>

                <li>
                  <Link to="about">About</Link>
                  {/* <a href="about">About</a> */}
                </li>
                <li>
                  <Link to="Demo">Demo</Link>
                  {/* <a href="about">About</a> */}
                </li>

                <li>
                  <Link to="login">Login</Link>
                </li>
                {/* <li>
                  <Link to="team">Team</Link>
                </li>
                <li class="drop-down">
                  <Link to="">Drop Down</Link>
                  <ul>
                    <li>
                      <Link to="#">Drop Down 1</Link>
                    </li>
                    <li class="drop-down">
                      <Link to="#">Drop Down 2</Link>
                      <ul>
                        <li>
                          <Link to="#">Deep Drop Down 1</Link>
                        </li>
                        <li>
                          <Link to="#">Deep Drop Down 2</Link>
                        </li>
                        <li>
                          <Link to="#">Deep Drop Down 3</Link>
                        </li>
                        <li>
                          <Link to="#">Deep Drop Down 4</Link>
                        </li>
                        <li>
                          <Link to="#">Deep Drop Down 5</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">Drop Down 3</Link>
                    </li>
                    <li>
                      <Link to="#">Drop Down 4</Link>
                    </li>
                    <li>
                      <Link to="#">Drop Down 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li> */}
              </ul>
            </nav>
            {/* <!-- .nav-menu --> */}
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
