import React, { Component } from "react";

class MissingPoster extends Component {
  state = { reportData: [], num: 0 };
  componentWillMount() {
    // document.addEventListener("DOMContentLoaded", () => {
    //   var images = localStorage.getItem("image");
    //   if (images) {
    //     document.getElementById("pic").setAttribute("src", images);
    //   }
    // });
  
    var data = localStorage.getItem("Report");
    var data2 = JSON.parse(data);
    var report = {
      name: data2["name"],
      address: data2["address"],
      age: data2["age"],
      gender: data2["gender"],
      image: data2["file"],
      phone: data2["phone"],
      wear: data2["wear"],
      time: data2["time"],
    };
    var joined = this.state.reportData.concat(report);
    this.setState({ reportData: joined });
    this.setState({ num: +1 });

  }

  render() {
    if (this.state.num === 1) {
      //setTimeout(() => window.location.reload(), 3000);
    }

    console.log(this.state.reportData);

    return (
      <div>
        <div id="output">
          <div
            className="container mx-auto border"
            style={{
              maxWidth: "48%",
            }}
          >
            <div class=" " id="gg">
              <div className="p-3 mb-2 bg-danger text-white text-center border ">
                <h1>Help </h1>
                <h1>Find Him</h1>
                {/* <hr className="border-dark"></hr> */}
              </div>
              {this.state.reportData.map((data) => (
                <div>
                  <img
                    class="card-img-top rounded mx-auto d-block"
                    id="pic"
                    src={data.image}
                    alt="Card image"
                    style={{ height: "37%", width: "40%" }}
                  />
                  {/* <p>{data.image}</p> */}
                  <hr className="border-dark"></hr>
                  {/* <hr className="border-dark"></hr> */}
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>Name: </b> {data.name}
                    </h4>
                    <p class="card-text">
                      <b>Age: </b> {data.age}
                    </p>
                    {/* <p class="card-text">
                      <b>Phone: </b>
                      {data.phone}
                    </p> */}
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
                    <p class="card-text">
                      <b>
                        If you find this person any where please Contact on
                        given numbers{" "}
                      </b>
                      <li>{data.phone}</li>
                      {/* {data.Wear} */}
                    </p>
                  </div>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  upar boday of poster */}
        <div className="text-center ">
          <button className="btn btn-primary btn-lg" onClick={window.print}>
            Print Document
          </button>
        </div>
      </div>
    );
  }
}

export default MissingPoster;
