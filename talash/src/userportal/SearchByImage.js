import React, { Component } from "react";
import CommonPortal from "../portal/CommonPortal";

class SearchByImage extends Component {
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
          heading="SEARCH BY IMAGE"
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
          contact="/contactfamilyU"
          navtable="true"
          a3="active"
          mp1="active"
          navreport="true"
          filereport=""
          searchbyimage="true"
          comment=""
        />
      </div>
    );
  }
}
export default SearchByImage;
