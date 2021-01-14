import React, { Component } from "react";
import emailData from "../common/getData";
import Notifications, { notify } from "react-notify-toast";

class Setting extends Component {
  state = {
    oldPassword: "",
    newPassword: "",
    navigate: false, // ya 1
    role: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    var email = emailData.Email();
    const userdata = {
      email: email,
      oldPassword: this.state.oldPassword.trim(),
      newPassword: this.state.newPassword.trim(),
    };

    await fetch(
      `/api/update?email=${userdata.email}&newpassword=${userdata.newPassword}&oldPassword=${userdata.oldPassword}`
    )
      .then((respone) => respone.json())
      .then((res) => {
        if (res.message == "Updated") {
          let myColor = { background: "#0E1717", text: "#FFFFFF" };
          notify.show(
            <div style={{ fontSize: 30 }}>Password Updated</div>,
            "success",
            10000,
            myColor
          );
        } else if (res.message == "PassNotFound") {
          let myColor = { background: "#0E1717", text: "#FFFFFF" };
          notify.show(
            <div style={{ fontSize: 30 }}>Password Not Correct</div>,
            "error",
            10000,
            myColor
          );
        } else {
          let myColor = { background: "#0E1717", text: "#FFFFFF" };
          notify.show(
            <div style={{ fontSize: 30 }}>Not found</div>,
            "error",
            10000,
            myColor
          );
        }
      })
      .catch((err) => {
        alert("Error");
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <div>
          <Notifications options={{ zIndex: 200, top: "80px" }} />
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
