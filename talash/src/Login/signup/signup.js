import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../login.css";
import axios from "axios";
import Notifications, { notify } from "react-notify-toast";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    username: "",
    conf_password: "",
    navigate: false,
    errors: {
      email: "",
      password: "",
      conf_password: "",
    },
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      case "conf_password":
        errors.conf_password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = async (e) => {
    console.log("pass" + this.state.password);
    console.log("email" + this.state.email);
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      // window.alert("Valid Form");
    } else {
      window.alert("Invalid Form");
    }
    const userdata = {
      email: this.state.email.trim(),
      name: this.state.name.trim(),
      username: this.state.username.trim(),
      password: this.state.password.trim(),
      address: this.state.address.trim(),
      phone: this.state.phone.trim(),
      conf_password: this.state.conf_password.trim(),
    };
    // console.log("email afer seeing" + userdata.email);
    // console.log("name afer seeing" + userdata.name);
    // console.log("username afer seeing" + userdata.username);
    // console.log("password afer seeing" + userdata.password);
    // console.log("address afer seeing" + userdata.address);
    // console.log(" conf_password afer seeing" + userdata.conf_password);
    // console.log("phone after seeing" + userdata.phone);
    await axios
      .post("/api", userdata)
      .then((res) => {
        //let myColor = { background: "#0E1717", text: "#FFFFFF" };
        notify.show(
          <div style={{ fontSize: 30 }}>Signup Successfuly</div>,
          "success "
        );
        console.log("added", res.data.message);
        console.log("your data in stored in database");
        //const history = useHistory();
        //history.goBack("/Login");
        setTimeout(() => this.setState({ navigate: true }), 2000); //  2

        // return <Redirect to={"/Login"} />;
      })
      .catch((err) => {
        console.log(e);
      });
  };

  render() {
    if (this.state.navigate) {
      //  3
      return <Redirect to="/Login" />;
    }
    const { errors } = this.state;
    return (
      <div>
        <Notifications options={{ zIndex: 200, top: "40%" }} />
        <form
          method="POST"
          onSubmit={this.handleSubmit}
          id="frm"
          className=" text-dark"
        >
          <fieldset id="fld">
            <legend>Sign Up</legend>
            <label for="FullName"></label>
            <input
              className="input1 text-dark"
              type="text"
              size="30"
              id="email"
              name="name"
              placeholder="Enter Full Name"
              maxlength="60"
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
            <label for="email"></label>
            <input
              className="input1 text-dark"
              type="email"
              size="30"
              id="email"
              name="email"
              placeholder="Enter a Valid Email"
              maxlength="60"
              onChange={this.handleChange}
              required
            />
            {errors.email.length > 0 && (
              <p className="text-danger ba-0 ma-0">{errors.email}</p>
            )}
            <br />
            <br />
            <label for="UserName"></label>
            <input
              className="input1 text-dark"
              type="text"
              size="30"
              id="email"
              placeholder="Enter User Name"
              maxlength="60"
              name="username"
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
            <label for="PhoneNO"></label>
            <input
              style={{ width: "220px" }}
              className="input1 text-dark"
              type="number"
              min="60"
              id="email"
              name="phone"
              placeholder="Enter Phone NO"
              maxLength="2160"
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
            <label for="Address"></label>
            <input
              className="input1 text-dark"
              type="text"
              size="30"
              id="email"
              name="address"
              placeholder="Enter Address"
              maxlength="60"
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
            <label for="pass"></label>
            <input
              className="input1 text-dark"
              type="password"
              size="30"
              id="pass"
              name="password"
              placeholder="Enter Password"
              maxlength="30"
              onChange={this.handleChange}
              required
            />
            {errors.password.length > 0 && (
              <p className="text-danger">{errors.password}</p>
            )}
            <br />
            <br />
            <label for="pass"></label>
            <input
              className="input1 text-dark"
              type="password"
              size="30"
              id="repeatpass"
              placeholder="Repeat Password"
              maxlength="40"
              name="conf_password"
              onChange={this.handleChange}
              required
            />
            {errors.conf_password.length > 0 && (
              <p className="text-danger">{errors.conf_password}</p>
            )}
            {/* <br />
            <br />
            Birthday: <input className="input1" type="date" />
            <br />
            <br /> */}
            <br />
            <br />
            <label>
              <input
                className="input1 text-dark"
                type="radio"
                name="st"
                required
              />
              I accepted the terms of use, cookie and privacy policy
            </label>
            <br />
            <br />
            <br />
            <input
              className="input1 text-dark"
              type="submit"
              value="Create Account"
              class="btn1 mr-2"
            />
            <input className="input1" type="reset" value="Clear" class="btn1" />
            <br />
            <br />
            Do you already have an account?{" "}
            <Link to="login">
              <a>Login</a>
            </Link>
            <br />
            <br />
            <br />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default Signup;
