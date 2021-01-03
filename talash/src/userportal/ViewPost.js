import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class ViewPost extends Component {
  state = {
    name: "Profile",
  };
  componentDidMount() {
    var data = sessionStorage.getItem("User");
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
          portalName="User Portal"
          Name={this.state.name.toUpperCase()}
          a1="active"
          link1="/viewpost"
          viewPostOP="View Posts"
          link2="/myposts"
          icon1="icon_documents_alt"
          viewMyPostOP="My Posts"
          secondbut="true"
          link3="/searchbyimg"
          searchbyimages="Search By Image"
          settinglink="/settingU"
          contact="/contactfamilyU"
          navtable="true"
          mp1="active"
          navreport="true"
          filereport=""
          searchbyimage=""
          post="true"
          comment="true"
        />
      </div>
    );
  }
}
export default ViewPost;
