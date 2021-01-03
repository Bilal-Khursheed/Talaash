import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class Setting extends Component {
  state = {
    name: "Profile",
  };
  componentDidMount() {
    var data = sessionStorage.getItem("Police");
    var data2 = JSON.parse(data);
    var namee = "bilal";
    namee = data2["name"];
    this.setState({ name: namee });
  }
  render() {
    return (
      <div>
        <CommonPortal
          heading="Setting"
          settinglink="/setting"
          portalName="Police Portal"
          Name={this.state.name.toUpperCase()}
          link1="/PolicePortal"
          viewPostOP="View Posts"
          link3="/SearchByImageP"
          searchbyimages="Search By Image"
          navtable="true"
          contact="/contactfamily"
          a1=""
          navreport=""
          filereport=""
          searchbyimage=""
          post=""
          comment=""
          setting="true"
        />
      </div>
    );
  }
}
export default Setting;
