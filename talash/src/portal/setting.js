import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../Login/login.css";
import emailData from "../common/getData";
import Notifications, { notify } from "react-notify-toast";
//import Notifications, { notify } from "react-notify-toast";

class Setting extends Component {
  state = {
    // idhr save kr raha hai handle change

    oldPassword: "",
    newPassword: "",

    navigate: false, // ya 1
    role: 0,
  };

  handleChange = (e) => {
    //name sae feild or dosrae value
    this.setState({ [e.target.name]: e.target.value }); //each entry function call e data utahe ga console pr show krae ga
    console.log("signup e value", e.target.value);
    // this.setState({
    //   WrongEmail: "",
    //   WrongPassword: "",
    // });
  };
  handleSubmit = async (e) => {
    // console.log("pass" + this.state.password);
    // console.log("email" + this.state.email);
    e.preventDefault();
    var email = emailData.Email();
    const userdata = {
      email: email, //trim extra spacing or blank data khtam kr dae ga

      oldPassword: this.state.oldPassword.trim(),
      newPassword: this.state.newPassword.trim(),
    };
    console.log("email afer seeing" + userdata.email);

    console.log("password afer seeing" + userdata.password);

    await fetch(
      `/api/update?email=${userdata.email}&newpassword=${userdata.newPassword}` //fetch from api through get
    )
      .then((respone) => respone.json())
      .then((res) => {
        if (res.message == "Updated") {
          let myColor = { background: "#0E1717", text: "#FFFFFF" };
          notify.show(<div style={{fontSize:30}}>"Updated"</div>, "error" , 10000, myColor);
        } else {
          let myColor = { background: "#0E1717", text: "#FFFFFF" };
          notify.show(<div style={{fontSize:30}}>"Not found "</div>, "error" , 10000, myColor);
        }
      })
      .catch((err) => {
        alert("Error");
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
    return (
      <div>
           <div>
            <Notifications options={{zIndex: 200, top: '80px'}}/>
            {/* <ToastContainer/> */}
          </div>
        <form onSubmit={this.handleSubmit} method="Post" id="frm">
          <fieldset id="fld">
            <legend>Change Password</legend>
            <label for="Password"></label>
            <input
              className="input1"
              type="password"
              size="30"
              id="email"
              name="oldPassword"
              placeholder="Enter Old Password"
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
              name="newPassword"
              placeholder="Enter new Password"
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
              value="Change data"
              class="btn1"
            />
            <br />
            <br />
            {/* Don't have account{" "}
            <Link to="opt">
              <a>Signup</a>
            </Link> */}
            <br />
            <br />
            <br />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default Setting;
