import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./login.css";
//import Notifications, { notify } from "react-notify-toast";

class Login extends Component {
  state = {
    // idhr save kr raha hai handle change

    email: "",
    password: "",
    WrongEmail: "",
    WrongPassword: "",
    navigate: false, // ya 1
    role: 0,
  };

  handleChange = (e) => {
    //name sae feild or dosrae value
    this.setState({ [e.target.name]: e.target.value }); //each entry function call e data utahe ga console pr show krae ga
    console.log("signup e value", e.target.value);
    this.setState({
      WrongEmail: "",
      WrongPassword: "",
    });
  };
  handleSubmit = async (e) => {
    console.log("pass" + this.state.password);
    console.log("email" + this.state.email);
    e.preventDefault();
    const userdata = {
      email: this.state.email.trim(), //trim extra spacing or blank data khtam kr dae ga

      password: this.state.password.trim(),
    };
    console.log("email afer seeing" + userdata.email);

    console.log("password afer seeing" + userdata.password);

    await fetch(
      `/api/Login?email=${userdata.email}&password=${userdata.password}` //fetch from api through get
    )
      .then((respone) => respone.json())
      .then((res) => {
        if (res.message == "EmailIncorrect") {
          this.setState({
            WrongEmail: "Email Incorrect!",
          });
        } else if (res.message == "PasswordIncorrect") {
          this.setState({
            WrongPassword: "Password Incorrect!",
          });
        } else {
          if (res.role === "hospital") {
            sessionStorage.setItem("hospital", JSON.stringify(res.data));
            setTimeout(() => this.setState({ navigate: true, role: 1 }), 20); //
            console.log("working and login");
          } else if (res.role === "Organization") {
            sessionStorage.setItem("Organization", JSON.stringify(res.data));
            setTimeout(() => this.setState({ navigate: true, role: 2 }), 20); //
          } else if (res.role === "Police") {
            sessionStorage.setItem("Police", JSON.stringify(res.data));
            setTimeout(() => this.setState({ navigate: true, role: 3 }), 20); //
          } else if (res.role === "User") {
            console.log("working ");
            sessionStorage.setItem("User", JSON.stringify(res.data));
            setTimeout(() => this.setState({ navigate: true, role: 4 }), 20); //
          }
        }
      })
      .catch((err) => {
        console.log(e);
        // let myColor = { background: "#0E1717", text: "#FFFFFF" };
        // notify.show(
        //   <div style={{ fontSize: 30 }}>Server error </div>,
        //   "error",
        //   50000,
        //   myColor
        // );
      });
  };

  render() {
    if (this.state.navigate) {
      //  3
      if (this.state.role === 1) {
        return <Redirect to="/hopitalPortal" />;
      } else if (this.state.role == 2) {
        return <Redirect to="/OrgPortal" />;
      } else if (this.state.role == 3) {
        return <Redirect to="/PolicePortal" />; //police karo
      } else if (this.state.role == 4) {
        return <Redirect to="/viewpost" />; //user karo
      }
    }
    return (
      <div>
        {/* <Notifications options={{ zIndex: 200, top: "30px" }} /> */}
        <form onSubmit={this.handleSubmit} method="Post" id="frm">
          <fieldset id="fld">
            <legend>Login</legend>
            <label for="email"></label>
            <input
              className="input1"
              type="email"
              size="30"
              id="email"
              name="email"
              placeholder="Enter a Valid Email"
              maxlength="30"
              required
              onChange={this.handleChange}
            />
            <br />
            <span className="text-danger">{this.state.WrongEmail}</span>
            <br />
            <br />
            <label for="pass"></label>
            <input
              className="input1"
              type="password"
              size="30"
              id="pass"
              name="password"
              placeholder="Enter Password"
              maxlength="30"
              required
              onChange={this.handleChange}
            />
            <br />
            <span className="text-danger">{this.state.WrongPassword}</span>
            <br />
            <br />
            <input
              className="input1"
              type="submit"
              value="Login"
              class="btn1"
            />
            <br />
            <br />
            Don't have account{" "}
            <Link to="opt">
              <a>Signup</a>
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
export default Login;
