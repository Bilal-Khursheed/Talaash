import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";
class ContactFamily extends Component {
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
          heading="Contact Family"
          portalName="Police Portal"
          Name={this.state.name.toUpperCase()}
          link1="/PolicePortal"
          viewPostOP="View Posts"
          link3="/SearchByImageP"
          searchbyimages="Search By Image"
          settinglink="/setting"
          contact="/contactfamily"
          a5="active"
          navreport=""
          filereport=""
          navtable="true"
          searchbyimage=""
          post=""
          table="true"
          comment=""
        />
      </div>
    );
  }
}

export default ContactFamily;
