import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import emailData from "../common/getData";
import axios from "axios";

import ImgToBase64 from "image-to-base64";
import LoadingOverlay from "react-loading-overlay";
import ScaleLoader from "react-spinners/ScaleLoader"; //BarLoader
import BounceLoader from "react-spinners/BounceLoader";
import Setting from "./setting";
import Notifications, { notify } from "react-notify-toast";
class CommonPortal extends Component {
  state = {
    Allposts: [],
    Myposts: [],
    Comments: [],
    name: "",
    age: "",
    address: "",
    phone: "",
    gender: "",
    file: "",
    time: "",
    wear: "",
    User_Email: "",
    selectedFile: null, //IMG
    data: [],
    loading: false,
    reportImage: {},
    comment: "",
    image_url: "",
    navigate: false,

    loadingImg: false,
  };

  async componentWillMount() {
    if (this.props.post || this.props.table) {
      await fetch(`api/allreport`)
        .then((respone) => respone.json())
        .then((Result) => {
          this.setState({
            Allposts: Result.data,
          });
        });
    } else if (this.props.mypost) {
      var email = emailData.Email();
      await fetch(`api/getreport/?User_Email=${email}`)
        .then((respone) => respone.json())
        .then((Result) => {
          this.setState({
            Myposts: Result.data,
          });
        });
    }
    await fetch(`api/allcommet`)
      .then((res) => res.json())
      .then((Result) => {
        this.setState({ Comments: Result.data });
        console.log("thisis missing", Result.data);
      });
  }
  loadFile1 = async (e) => {
    this.setState({
      isimage: true,
      loading: true,
    });

    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "talash");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dztyioznk/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const image_url = await res.json();
    console.log(image_url.secure_url); //image_url
    this.setState({
      image_url: image_url.secure_url,
      uploaded: true,
      loading: false,
    });
  };

  loadFile = async (e) => {
    this.setState({
      isimage: true,
      loadingImg: true,
    });

    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "talash");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dztyioznk/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const image_url = await res.json();
    console.log(image_url.secure_url); //image_url
    this.setState({
      selectedFile: e.target.files[0],
      uploaded: true,
      loadingImg: false,
      image_url: image_url.secure_url,
    });
    var image = document.getElementById("output");
    const imageToBase64 = ImgToBase64;
    image.src = URL.createObjectURL(e.target.files[0]);
    imageToBase64(image.src);
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    var userEmail = emailData.Email();
    this.setState({ User_Email: userEmail });
    const filedata = new FormData();
    filedata.append("image", this.state.selectedFile);
    e.preventDefault();
    const reportdata = {
      age: this.state.age.trim(),
      name: this.state.name.trim(),
      file: this.state.image_url.trim(),
      time: this.state.time.trim(),
      address: this.state.address.trim(),
      phone: this.state.phone.trim(),
      gender: this.state.gender.trim(),
      wear: this.state.wear.trim(),
      User_Email: userEmail,
    };
    await axios
      .post(
        `/api/report/?image=${reportdata.file}&&User_Email=${reportdata.User_Email}&&name=${reportdata.name}&&gender=${reportdata.gender}&&time=${reportdata.time}&&address=${reportdata.address}&&phone=${reportdata.phone}&&age=${reportdata.age}&&wear=${reportdata.wear}`
      )
      .then((res) => {
        let myColor = { background: "#0E1717", text: "#FFFFFF" };
        notify.show(
          <div style={{ fontSize: 30 }}>"Report Added Successfully "</div>,
          "error",
          10000,
          myColor
        );
      })
      .catch((err) => {
        console.log(e);
      });
  };
  printDocument = (e) => {
    e.preventDefault();
    const reportdata = {
      age: this.state.age.trim(),
      name: this.state.name.trim(),
      file: this.state.image_url.trim(),
      time: this.state.time.trim(),
      address: this.state.address.trim(),
      phone: this.state.phone.trim(),
      gender: this.state.gender.trim(),
      wear: this.state.wear.trim(),

      image: this.state.reportImage,
    };
    localStorage.setItem("Report", JSON.stringify(reportdata));
    setTimeout(() => this.setState({ navigate: true }), 20);
  };

  search = async () => {
    this.setState({
      loading: true,
    });

    await axios
      .post(`api/faceapi?image=${this.state.image_url}`)
      .then((Result) => {
        // console.log("Result is ", Result.data.message);
        if (Result.data.message == "notfound") {
          this.setState({
            loading: false,
          });
          let myColor = { background: "#0E1717", text: "#FFFFFF" };
          notify.show(
            <div style={{ fontSize: 30 }}>Not Found</div>,
            "error",
            10000,
            myColor
          );
        } else if (Result.data.message == "found") {
          var total = {
            Name: Result.data.info.Name,
            Gender: Result.data.info.Gender,
            Age: Result.data.info.Age,
            Time: Result.data.info.Time,
            Address: Result.data.info.Address,
            Wear: Result.data.info.Wear,
            Phone: Result.data.info.Phone,
          };
          // console.log("Name  is empty or not", total.Name);
          if (total.Name == null) {
            this.setState({
              loading: false,
            });
            let myColor = { background: "#0E1717", text: "#FFFFFF" };
            notify.show(
              <div style={{ fontSize: 30 }}>Not Found</div>,
              "error",
              10000,
              myColor
            );
          } else {
            var joined = this.state.data.concat(total);
            this.setState({ data: joined });
            this.setState({
              loading: false,
            });
          }
        } else {
          this.setState({
            loading: false,
          });
          let myColor = { background: "#0E1717", text: "#FFFFFF" };
          notify.show(
            <div style={{ fontSize: 30 }}>Not Found</div>,
            "error",
            10000,
            myColor
          );
        }
      });
  };
  addcomment = async (e) => {
    var ReportId = e.target.value;
    var name = emailData.name();
    var comment = this.state.comment;

    var users = {
      Comments: comment,
      ReportID: ReportId,
      Name: name,
      file_url: this.state.image_url,
    };
    var user = this.state.Comments.concat(users);
    this.setState({ Comments: user });

    await axios.post("api/addcomment", users).then((res) => {});
  };
  Deletepost = async (e) => {
    var ReportId = e.target.value;
    await fetch(`/api/delete?id=${ReportId}`)
      .then((respone) => respone.json())
      .then((res) => {
        if (res.message == "Deleted") {
          this.setState((prevState) => ({
            Myposts: prevState.Myposts.filter(
              (Myposts) => Myposts._id !== e.target.value
            ),
          }));
        } else {
          alert("NotFound");
        }
      })
      .catch((err) => {
        alert("Error");
        console.log(e);
      });
  };
  render() {
    if (this.state.navigate) {
      return <Redirect to="poster" />;
    }
    return (
      <div>
        {/* <!-- container section start --> */}
        <section
          id="container"
          class=""
          style={{ marginTop: "0", borderTop: "0", paddingTop: "0" }}
        >
          {/* <!--header start--> */}
          <header class="header dark-bg">
            <div class="toggle-nav">
              <div
                class="icon-reorder tooltips"
                data-original-title="Toggle Navigation"
                data-placement="bottom"
              >
                <i class="icon_menu"></i>
              </div>
            </div>

            {/* <!--logo start--> */}
            <Link class="logo">
              {" "}
              <span class="lite">{this.props.portalName}</span>
            </Link>
            {/* <!--logo end--> */}

            <div class="nav search-row" id="top_menu">
              {/* <!--  search form end --> */}
            </div>

            <div class="top-nav notification-row">
              {/* <!-- notificatoin dropdown start-->/ */}
              <ul class="nav pull-right top-menu">
                {/* <!-- user login dropdown start--> */}
                <li class="dropdown">
                  <Link data-toggle="dropdown">
                    <span class="profile-ava"></span>
                    <span class="username">{this.props.Name}</span>
                    <b class="caret"></b>
                  </Link>
                  <ul class="dropdown-menu extended logout">
                    <div class="log-arrow-up"></div>
                    <li class="eborder-top">
                      <Link to={this.props.settinglink}>
                        <i class="icon_profile"></i> Setting
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/login"
                        onClick={() => {
                          sessionStorage.clear();
                        }}
                      >
                        <i class="icon_key_alt"></i> Log Out
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <!-- user login dropdown end --> */}
              </ul>
              {/* <!-- notificatoin dropdown end--> */}
            </div>
          </header>
          {/* <!--header end--> */}
          {/* <!--sidebar start--> */}
          <aside>
            <div id="sidebar" class="nav-collapse ">
              {/* <!-- sidebar menu start--> */}
              <ul class="sidebar-menu">
                <li class={this.props.a1}>
                  <Link class="" to={this.props.link1}>
                    {/* "/viewpost" */}
                    <i class="icon_documents_alt"></i>
                    <span>{this.props.viewPostOP}</span>
                  </Link>
                </li>
                {this.props.secondbut && (
                  <li class={this.props.mp1}>
                    <Link class="" to={this.props.link2}>
                      <i class={this.props.icon1}></i>
                      <span>{this.props.viewMyPostOP}</span>
                    </Link>
                  </li>
                )}
                <li class="sub-menu">
                  <Link to={this.props.link3} class={this.props.a3}>
                    <i class="icon_image"></i>
                    <span>{this.props.searchbyimages}</span>
                  </Link>
                </li>
                {this.props.navtable && (
                  <li class="sub-menu">
                    <Link to={this.props.contact} class={this.props.a5}>
                      <i class="icon_document_alt"></i>
                      <span>Contact Family</span>
                    </Link>
                  </li>
                )}
                {this.props.navreport && (
                  <li class="sub-menu">
                    <Link to="/filereport" class={this.props.a2}>
                      <i class="icon_document_alt"></i>
                      <span>File Report</span>
                    </Link>
                  </li>
                )}
              </ul>
              {/* <!-- sidebar menu end--> */}
            </div>
          </aside>
          {/* <!--sidebar end--> */}

          {/* <!--main content start--> */}
          <section id="main-content">
            <section class="wrapper">
              <div class="row">
                <div class="col-lg-12"></div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <section class="panel">
                    <header class="panel-heading">
                      <h1>{this.props.heading}</h1>
                    </header>
                    <div class="panel-body">
                      <div>
                        <Notifications options={{ zIndex: 200, top: "80px" }} />
                        {/* <ToastContainer/> */}
                      </div>
                      {this.props.filereport && (
                        <div class="form container row  justify-content-md-center">
                          <form
                            class="form-validate form-horizontal "
                            id="register_form"
                            action="/viewpost"
                            method="post"
                            encType="multipart/form-data"
                            onSubmit={this.handleSubmit}
                          >
                            <div class="form-group  ">
                              <img id="output" width="500" height="300" />
                            </div>
                            <div class="form-group ">
                              <label
                                for="formFileLg"
                                class="form-label col-lg-2 control-label"
                              >
                                Upload Image
                              </label>
                              <div class="col-lg-10">
                                <input
                                  class="form-control"
                                  id="formFileLg"
                                  type="file"
                                  accept="image/*"
                                  name="file"
                                  onChange={this.loadFile}
                                />
                              </div>
                            </div>
                            <div class="form-group ">
                              <label
                                for="fullname"
                                class="control-label col-lg-2"
                              >
                                Full name <span class="required">*</span>
                              </label>
                              <div class="col-lg-10">
                                <input
                                  class=" form-control"
                                  id="fullname"
                                  name="name"
                                  type="text"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div class="form-group ">
                              <label
                                for="address"
                                class="control-label col-lg-2"
                              >
                                Age <span class="required">*</span>
                              </label>
                              <div class="col-lg-10">
                                <input
                                  class=" form-control"
                                  id="address"
                                  name="age"
                                  type="text"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div class="form-group ">
                              <label
                                for="address"
                                class="control-label col-lg-2"
                              >
                                Address <span class="required">*</span>
                              </label>
                              <div class="col-lg-10">
                                <input
                                  class=" form-control"
                                  id="address"
                                  name="address"
                                  type="text"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div class="form-group ">
                              <label
                                for="username"
                                class="control-label col-lg-2"
                              >
                                Gender <span class="required">*</span>
                              </label>
                              <div class="col-lg-10">
                                <input
                                  class="form-control "
                                  id="username"
                                  name="gender"
                                  type="text"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div class="form-group ">
                              <label for="phone" class="control-label col-lg-2">
                                Phone <span class="required">*</span>
                              </label>
                              <div class="col-lg-10">
                                <input
                                  class="form-control "
                                  id="phone"
                                  name="phone"
                                  type="number"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div class="form-group ">
                              <label for="time" class="control-label col-lg-2">
                                Date <span class="required">*</span>
                              </label>
                              <div class="col-lg-10">
                                <input
                                  class="form-control "
                                  id="time"
                                  name="time"
                                  type="date"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>

                            <div class="form-group ">
                              <label
                                for="Cloths"
                                class="control-label col-lg-2"
                              >
                                Write Details Of Wearing & Appearance{" "}
                                <span class="required">*</span>
                              </label>
                              <div class="col-lg-10">
                                <input
                                  class=" form-control"
                                  id="Cloths"
                                  name="wear"
                                  type="text"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="col-lg-offset-2 col-lg-10  ">
                                <button
                                  class="btn btn-primary mr-2"
                                  type="submit"
                                  onClick={this.handleSubmit}
                                >
                                  Report
                                </button>
                                <button
                                  class="btn btn-primary"
                                  type="button"
                                  onClick={this.printDocument}
                                >
                                  Print PDF
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      )}
                      {this.props.setting && <Setting />}

                      {/* &&&&&&&&&&&&&&&&&&& Search By Image  */}
                      {this.props.searchbyimage && (
                        <div className="container row  justify-content-md-center">
                          <div class="card">
                            <div>
                              <Notifications
                                options={{ zIndex: 200, top: "80px" }}
                              />
                              {/* <ToastContainer/> */}
                            </div>
                            <div class="card-header"></div>
                            <div class="card-body  text-center">
                              <h5 class="card-title ">Select an Image</h5>
                              <div class="form-group ">
                                <img
                                  id="output"
                                  width="500"
                                  height="300"
                                  style={{
                                    marginTop: "2%",
                                    marginLeft: "50px",
                                    backgroundColor: "white",
                                  }}
                                />
                                {
                                  <LoadingOverlay
                                    active={this.state.loadingImg}
                                    spinner={
                                      <BounceLoader
                                        color={"#000000"}
                                        size={70}
                                      />
                                    }
                                    text="Uploading image..."
                                  ></LoadingOverlay>
                                }
                                <div class="">
                                  <input
                                    class="form-control"
                                    id="formFileL"
                                    type="file"
                                    onChange={this.loadFile}
                                    name="file"
                                    accept="image/*"
                                  />
                                </div>
                              </div>
                              {
                                <LoadingOverlay
                                  active={this.state.loading}
                                  spinner={
                                    <ScaleLoader
                                      color={"#000000"}
                                      height={150}
                                      width={20}
                                      radius={20}
                                      margin={12}
                                    />
                                  }
                                  text="Loading your content..."
                                ></LoadingOverlay>
                              }
                              <br /> <br />
                              <button
                                onClick={this.search}
                                class="btn btn-primary"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                          <br />
                          <div>
                            <div className="container row  justify-content-md-center">
                              {this.state.data.map((data) => (
                                <div
                                  class="card mb-auto offset-2 col-lg-6 postcard "
                                  id="gg"
                                >
                                  <div class="card-body">
                                    <h4 class="card-title">
                                      <b>Name: </b> {data.Name}
                                    </h4>
                                    <p class="card-text">
                                      <b>Age: </b> {data.Age}
                                    </p>
                                    <p class="card-text">
                                      <b>Phone: </b> {data.Phone}
                                    </p>
                                    <p class="card-text">
                                      <b>Gender: </b>
                                      {data.Gender}
                                    </p>
                                    <p class="card-text">
                                      <b>Date & Time: </b>
                                      {data.Time}
                                    </p>
                                    <p class="card-text">
                                      <b>Address: </b>
                                      {data.Address}
                                    </p>
                                    <p class="card-text">
                                      <b>Dress Details: </b>
                                      {data.Wear}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      <br />
                      {/* &&&&&&&&&&&&&&&&&&&&&&&&7  Search By Image End*/}

                      {/* &&&&&&&&&&&&&& POST CARDS */}

                      {this.props.post && (
                        <div className="container row   justify-content-md-center ">
                          {this.state.Allposts.map((data) => (
                            <div class="card mb-auto offset-2 col-lg-6 postcard">
                              <div>
                                <img
                                  class="img-fluid "
                                  src={data.file}
                                  alt="Card image"
                                />
                              </div>
                              <div class="card-body">
                                <h4 class="card-title">
                                  <b>Name: </b> {data.name}
                                </h4>
                                <p class="card-text">
                                  <b>Age: </b> {data.age}
                                </p>
                                <p class="card-text">
                                  <b>Phone: </b> {data.phone}
                                </p>
                                <p class="card-text">
                                  <b>Gender: </b>
                                  {data.gender}
                                </p>
                                <p class="card-text">
                                  <b>Date & Time: </b>
                                  {data.time}
                                </p>
                                <p class="card-text">
                                  <b>Address: </b>
                                  {data.address}
                                </p>
                                <p class="card-text">
                                  <b>Dress Details: </b>
                                  {data.wear}
                                </p>
                                <hr />
                                <h4 className="card-title text-dark">
                                  Comment Section
                                </h4>
                                <hr></hr>
                                {this.state.Comments.map(
                                  (comment) =>
                                    comment.ReportID === data._id && (
                                      <div className="border">
                                        <br />
                                        <label
                                          for="comment"
                                          class="control-label col-lg-3"
                                        >
                                          {comment.Name.toUpperCase()}:
                                        </label>

                                        <span
                                          className="card-text"
                                          id="comment"
                                        >
                                          {comment.Comments}{" "}
                                        </span>

                                        <br />

                                        {comment.file_url && (
                                          <div>
                                            <img
                                              style={{
                                                width: "200px",
                                                height: "200px",
                                              }}
                                              src={comment.file_url}
                                              alt=""
                                            ></img>
                                            <br />
                                          </div>
                                        )}
                                      </div>
                                    )
                                )}
                                <hr></hr>
                                <br></br>
                                {this.props.comment && (
                                  <div>
                                    <div class="form-group ">
                                      <div class="col-md-12">
                                        {
                                          <LoadingOverlay
                                            active={this.state.loading}
                                            spinner={
                                              <BounceLoader
                                                color={"#000000"}
                                                size={70}
                                              />
                                            }
                                            text="Uploading image..."
                                          ></LoadingOverlay>
                                        }
                                        <input
                                          class=" form-control"
                                          id="address"
                                          name="comment"
                                          type="text"
                                          placeholder="Write Comment"
                                          onChange={this.handleChange}
                                        ></input>{" "}
                                        <input
                                          type="file"
                                          onChange={this.loadFile1}
                                        ></input>
                                      </div>
                                    </div>
                                    <button
                                      value={data._id}
                                      onClick={this.addcomment}
                                      class="btn btn-primary pull-right"
                                    >
                                      Post Comment
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* $$$$$$$$$$$$$$$$$$  EnD OF POSTS */}
                      {/* &&&&&&&&&&&&&& POST CARDS */}
                      {/* start of contact family tabale */}
                      {this.props.table && (
                        <div>
                          <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.Allposts.map((data, index) => (
                                <tr>
                                  <th scope="row">{index}</th>
                                  <td class="card mb-auto offset-2 col-sm-2 postcard">
                                    <img
                                      class="img-fluid "
                                      src={data.file}
                                      alt="Card image"
                                    />
                                  </td>
                                  <td>{data.name.toUpperCase()}</td>
                                  <td>{data.address}</td>
                                  <td>{data.phone}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {/* end of contact family table  */}

                      {this.props.mypost && (
                        <div className="container row  justify-content-md-center">
                          {this.state.Myposts.map((data) => (
                            <div class="card mb-auto offset-2 col-lg-6 postcard mb-2">
                              <img
                                class="card-img-top align-center"
                                src={data.file}
                                alt="Card image"
                              />
                              <hr></hr>
                              <div class="card-body">
                                <h4 class="card-title">
                                  <b>Name: </b> {data.name}
                                </h4>
                                <p class="card-text">
                                  <b>Age: </b> {data.age}
                                </p>
                                <p class="card-text">
                                  <b>Phone: </b> {data.phone}
                                </p>
                                <p class="card-text">
                                  <b>Gender: </b>
                                  {data.gender}
                                </p>
                                <p class="card-text">
                                  <b>Date & Time: </b>
                                  {data.time}
                                </p>
                                <p class="card-text">
                                  <b>Address: </b>
                                  {data.address}
                                </p>
                                <p class="card-text">
                                  <b>Dress Details: </b>
                                  {data.wear}
                                </p>
                                <hr />
                                <h4 className="card-title text-dark">
                                  Comment Section
                                </h4>
                                <hr></hr>
                                {this.state.Comments.map(
                                  (comment) =>
                                    comment.ReportID === data._id && (
                                      <div className="border">
                                        <br />
                                        <span className="card-text">
                                          {comment.Comments}{" "}
                                        </span>
                                        <br />
                                      </div>
                                    )
                                )}
                                <hr></hr>
                                <br></br>

                                {this.props.comment && (
                                  <div>
                                    <div class="form-group ">
                                      <div class="col-md-12">
                                        <input
                                          class=" form-control"
                                          id="address"
                                          name="comment"
                                          type="text"
                                          placeholder="Write Comment"
                                          onChange={this.handleChange}
                                        />
                                      </div>
                                    </div>
                                    <button
                                      value={data._id}
                                      onClick={this.addcomment}
                                      class="btn btn-primary pull-right"
                                    >
                                      Post Comment
                                    </button>
                                    <button
                                      value={data._id}
                                      onClick={this.Deletepost}
                                      class="btn btn-primary pull-left"
                                    >
                                      Resolved
                                    </button>
                                  </div>
                                )}
                                <br />
                                <br />
                                <br />
                              </div>
                              <hr />
                              <br></br>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* $$$$$$$$$$$$$$$$$$  EnD OF POSTS */}
                    </div>
                  </section>
                </div>
              </div>
              {/* <!-- page end--> */}
            </section>
          </section>
          {/* <!--main content end--> */}
          <div class="text-right">
            <div class="credits"></div>
          </div>
        </section>
      </div>
    );
  }
}
export default CommonPortal;
