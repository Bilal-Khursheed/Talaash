const express = require("express");
const { spawn } = require("child_process");

const mongoose = require("mongoose");

const route = express.Router();
//route.use(express.static(__dirname+"../clientTalaash/public/"));
const multer = require("multer");

route.use(express.static(__dirname + "../talash/public/"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./talash/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
route.post("/faceapi",  (req, res) => {
  var largeDataSet = [];
  var resultdata;
  // var Name,
  //   Gender,
  //   Age,
  //   Time,
  //   Address,
  //   Wear,
  //   Phone = "";
  const url = req.query.image
  // spawn new child process to call the python script
  //clientTalaash\public\upload
  console.log(url);
  const python = spawn("python", ["search.py", url]);
  // collect data from script

  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    var str = data.toString().trim(),
      lines = str.split(",");
    //for (var i=0; i<lines.length; i++) {
    //(/(\r?\n)/g);
    resultdata = {
      Name: lines[0],
      Gender: lines[1],
      Age: lines[2],
      Time: lines[3],
      Address: lines[4],
      Wear: lines[5],
      Phone: lines[6],
    };
    // console.log( "as",lines[i].trim())
    //}
    largeDataSet.push(data);
    //console.log("to test the type " +largeDataSet.join())
    const d = "here:is: the :data";

    console.log("here is the data " + d.split(":")[1]);
  });
  // in close event we are sure that stream is from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    if (code == 1) {
      return res.json({ message: "not found" });
    }
    //var myJsonString = JSON.stringify(largeDataSet);
    //res.json({info:myJsonString,message: "found"})
    else res.json({ info: resultdata, message: "found" });
  });
});
module.exports = route;
