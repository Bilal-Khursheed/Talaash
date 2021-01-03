import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class ViewPostH extends Component {
  state = {
    name: "Profile",
  };
  componentDidMount() {
    var data = sessionStorage.getItem("hospital");
    var data2 = JSON.parse(data);
    var namee = "bilal";
    namee = data2["name"];
    this.setState({ name: namee });
  }
  render() {
    return (
      <div>
        <CommonPortal
          heading="VIEW POST"
          portalName="Hospital Portal"
          Name={this.state.name.toUpperCase()}
          link1="/hopitalPortal"
          viewPostOP="View Posts"
          link3="/SearchByImageh"
          searchbyimages="Search By Image"
          settinglink="/settingH"
          contact="/contactfamilyH"
          navtable="true"
          a1="active"
          navreport=""
          filereport=""
          searchbyimage=""
          post="true"
          comment="true"
        />
      </div>
    );
  }
}
export default ViewPostH;
