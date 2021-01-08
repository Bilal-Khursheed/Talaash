const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
var path = require("path");
const Report = require("../DB/Report");
const route = express.Router();
route.post("/report", async (req, res) => {
  const {
    name,
    age,
    address,
    phone,
    gender,
    time,
    wear,
    image,
    User_Email,
  } = req.query;
  const url = image;
  const fileadd = image;
  const python = spawn("python", [
    "register.py",
    fileadd,
    name,
    gender,
    age,
    time,
    address,
    wear,
    phone,
  ]);
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
  });
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
  });
  console.log("here is the user email", User_Email);
  let report = {};
  report.name = name;
  report.age = age;
  report.file = image;
  report.gender = gender;
  report.address = address;
  report.time = time;
  report.phone = phone;
  report.wear = wear;
  report.User_Email = User_Email;

  let reportModel = new Report(report);
  await reportModel
    .save()
    .then((reportModel) => res.json(reportModel))
    .catch((err) => console.log(err));
});

route.get("/getreport/", async (req, res) => {
  var User_Email = req.query.User_Email;
  console.log("here is the email", User_Email);
  await Report.find({ User_Email })

    .then((report) => {
      return res.json({ status: true, message: "data found", data: report });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
});
route.get("/allreport/", async (req, res) => {
  await Report.find()
    .then((report) => {
      return res.json({ status: true, message: "data found", data: report });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
});
route.get("/delete/", async (req, res) => {
  var Id = req.query.id;
  console.log("id" + Id);

  await Report.findByIdAndRemove(Id, function (err) {
    if (err) {
      console.log("erroe" + err);
    } else {
      res.json({ status: true, message: "Deleted" });
    }
  });
});

module.exports = route;
