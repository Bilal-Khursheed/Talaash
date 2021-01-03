import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class SearchByImageH extends Component {
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
          heading="Contact Family"
          portalName="Hospital Portal"
          Name={this.state.name.toUpperCase()}
          link1="/hopitalPortal"
          viewPostOP="View Posts"
          link3="/SearchByImageh"
          searchbyimages="Search By Image"
          settinglink="/settingH"
          contact="/contactfamilyH"
          navtable="true"
          a3="active"
          navreport=""
          filereport=""
          searchbyimage=""
          post=""
          comment=""
          table="true"
        />
      </div>
    );
  }
}
export default SearchByImageH;
