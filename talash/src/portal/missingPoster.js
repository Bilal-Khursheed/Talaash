import React, { Component } from "react";

class MissingPoster extends Component {
  state = {
    reportData: [],
    name: "",
    address: "",
    age: "",
    gender: "",
    image: "",
    phone: "",
    wear: "",
    time: "",
    display: false,
  };
  componentWillMount() {
    var data = localStorage.getItem("Report");
    var data2 = JSON.parse(data);
    this.setState({
      name: data2["name"],
      address: data2["address"],
      age: data2["age"],
      gender: data2["gender"],
      image: data2["file"],
      phone: data2["phone"],
      wear: data2["wear"],
      time: data2["time"],
    });
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
  }

  embedCode = () => {
    console.log("value");

    var html = "";

    html += '<div style=" margin: auto; width: 50%; " id="reportPost">';
    html +=
      '	<div style=" background-color: pink; height: 100px; text-align: center; line-height: 100px " ><h1> Help Find Him </h1></div>';
    html += "	<br>";
    html +=
      '	<div> <img  style=" display: block; margin-left: auto; margin-right: auto; width: 40%; " src="' +
      this.state.image +
      '" width="300"> </div>';
    html += "	<br>";
    html += "	<hr>";
    html += "	<div>";
    html += "		<p>Name: " + this.state.name + " </p>";
    html += "		<p>Age: " + this.state.age + "</p>";
    html += "		<p>Gender: " + this.state.gender + "</p>";
    html += "		<p>Date & Time: " + this.state.time + "</p>";
    html += "		<p>Address: " + this.state.address + " </p>";
    html += "		<p>Dress Details: " + this.state.wear + "</p>";
    html +=
      "		<p>* If you find this person anywhere please contact on given numbers</p>";
    html += "		<ul>";
    html += "			<li>" + this.state.phone + "</li>";
    html += "		</ul>";
    html += "	</div>";
    html += "</div>";
    var x = document.getElementById("embed");
    x.classList.remove("invisible");
    x.value = html;
  };
  render() {
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

          <button
            className="btn btn-primary btn-lg"
            id="embedcode"
            onClick={this.embedCode}
          >
            Generate Embed Code
          </button>
          <br />
          <textarea
            className="invisible"
            id="embed"
            value="non"
            name="w3review"
            rows="10"
            cols="50"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default MissingPoster;
