import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class FileReport extends Component {
  state = {
    name: "Profile",
  };
  componentDidMount() {
    var data = sessionStorage.getItem("User");
    var data2 = JSON.parse(data);
    var namee = "";
    namee = data2["name"];
    this.setState({ name: namee });
  }
  render() {
    return (
      <div>
        <CommonPortal
          heading="Contact Family"
          portalName="User Portal"
          Name={this.state.name.toUpperCase()}
          link1="/viewpost"
          viewPostOP="View Posts"
          link2="/myposts"
          icon1="icon_documents_alt"
          secondbut="true"
          viewMyPostOP="My Posts"
          link3="/searchbyimg"
          searchbyimages="Search By Image"
          settinglink="/settingU"
          contact="/contactfamilyU"
          navtable="true"
          a2=""
          mp1=""
          navreport="true"
          filereport=""
          searchbyimage=""
          post=""
          table="true"
        />
      </div>
    );
  }
}
export default FileReport;
