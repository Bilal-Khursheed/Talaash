import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class ViewPostP extends Component {
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
          heading="VIEW POST"
          portalName="Police Portal"
          Name={this.state.name.toUpperCase()}
          link1="/PolicePortal"
          viewPostOP="View Posts"
          link3="/SearchByImageP"
          searchbyimages="Search By Image"
          settinglink="/setting"
          navtable="true"
          a1="active"
          navreport=""
          filereport=""
          contact="/contactfamily"
          searchbyimage=""
          post="true"
          comment="true"
        />
      </div>
    );
  }
}
export default ViewPostP;
