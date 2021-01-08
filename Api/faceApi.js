const express = require("express");
const { spawn } = require("child_process");
const mongoose = require("mongoose");
const route = express.Router();
route.post("/faceapi", (req, res) => {
  var largeDataSet = [];
  var resultdata = {};

  const url = req.query.image;
  console.log(url);
  const python = spawn("python", ["search.py", url]);
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    var str = data.toString().trim(),
      lines = str.split(",");
    resultdata = {
      Name: lines[0],
      Gender: lines[1],
      Age: lines[2],
      Time: lines[3],
      Address: lines[4],
      Wear: lines[5],
      Phone: lines[6],
    };
    largeDataSet.push(data);
  });
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    if (code == 1) {
      return res.json({ message: "not found" });
    } else res.json({ info: resultdata, message: "found" });
  });
});
module.exports = route;
