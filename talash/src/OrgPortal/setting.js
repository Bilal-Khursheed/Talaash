import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class SearchByImageOrg extends Component {
  state = {
    name: "Profile",
  };
  componentDidMount() {
    var data = sessionStorage.getItem("Organization");
    var data2 = JSON.parse(data);
    var namee = "bilal";
    namee = data2["name"];
    this.setState({ name: namee });
  }
  render() {
    return (
      <div>
        <CommonPortal
          heading="Seeting"
          portalName="Organizational Portal"
          Name={this.state.name.toUpperCase()}
          link1="/OrgPortal"
          viewPostOP="View Posts"
          link3="/SearchByImageOrg"
          searchbyimages="Search By Image"
          settinglink="/settingO"
          contact="/contactfamilyO"
          navtable="true"
          a3=""
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
export default SearchByImageOrg;
