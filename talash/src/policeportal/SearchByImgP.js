import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class SearchByImageP extends Component {
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
          heading="SEARCH BY IMAGE"
          portalName="Police Portal"
          Name={this.state.name.toUpperCase()}
          link1="/PolicePortal"
          viewPostOP="View Posts"
          link3="/SearchByImageP"
          searchbyimages="Search By Image"
          settinglink="/setting"
          contact="/contactfamily"
          navtable="true"
          navreport=""
          filereport=""
          searchbyimage="true"
          post=""
          comment="true"
        />
      </div>
    );
  }
}
export default SearchByImageP;
