import React, { Component } from "react";
import Footer from "../Website/Footer";
class SearchReport extends Component {
  state = { Myposts: [], Name: "" };
  searchReport = async () => {
    const Name = this.state.Name;
    await fetch(`api/getreportbyName/?Name=${Name}`)
      .then((respone) => respone.json())
      .then((Result) => {
        this.setState({
          Myposts: Result.data,
        });
      });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div class="container h-100">
          <div className="container row  h-100 justify-content-center align-items-center">
            <div class="card">
              <div>
                {/* <Notifications options={{ zIndex: 200, top: "80px" }} /> */}
                {/* <ToastContainer/> */}
              </div>
              <div class="card-header"></div>
              <div class="card-body  text-center">
                <h5 class="card-title ">Search missing Report</h5>
                <div class="form-group">
                  {/* <img
                  id="output"
                  width="500"
                  height="300"
                  style={{
                    marginTop: "2%",
                    marginLeft: "50px",
                    backgroundColor: "white",
                  }}
                /> */}
                  {/* {
                  <LoadingOverlay
                    active={this.state.loadingImg}
                    spinner={<BounceLoader color={"#000000"} size={70} />}
                    text="Uploading image..."
                  ></LoadingOverlay>
                } */}
                  <div class="form-group col-12">
                    {/* <label for="Cloths" class="control-label col-lg-2">
                    Enter name To Search <span class="required">*</span>
                  </label> */}
                    <div class="col-lg-10">
                      <input
                        className="input1 text-dark"
                        type="text"
                        size="30"
                        id="email"
                        name="Name"
                        placeholder="Enter Full Name"
                        maxlength="60"
                        onChange={this.handleChange}
                        required
                      />
                      <br></br>
                    </div>
                  </div>
                  <br /> <br />
                  <hr></hr>
                  <button class="btn btn-primary" onClick={this.searchReport}>
                    Search
                  </button>
                </div>
                {/* {
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
                              } */}
              </div>
            </div>
            <br />
            <div className="container row  justify-content-md-center mt-2">
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
                    <h4 className="card-title text-dark">Comment Section</h4>
                    <hr></hr>
                    {/* {this.state.Comments.map(
                    (comment) =>
                      comment.ReportID === data._id && (
                        <div className="border">
                          <br />
                          <span className="card-text">{comment.Comments} </span>
                          <br />
                        </div>
                      )
                  )} */}
                    <hr></hr>
                    <br></br>

                    {/* {this.props.comment && (
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
                      </div> */}
                    {/* <button
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
                      </button> */}
                    {/* </div>
                  )} */}
                    <br />
                    <br />
                    <br />
                  </div>
                  <hr />
                  <br></br>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchReport;
