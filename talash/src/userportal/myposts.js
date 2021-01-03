import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class ViewPost extends Component {
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
          heading="My POST"
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
          a1=""
          mp1="active"
          navreport="true"
          filereport=""
          searchbyimage=""
          mypost="true"
          comment="true"
        />
      </div>
    );
  }
}
export default ViewPost;
