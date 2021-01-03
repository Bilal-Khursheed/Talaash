const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
var multer = require("multer");
var path = require("path");
const Report = require("../DB/Report");
const route = express.Router();
const { spawn } = require("child_process");
route.use(express.static(__dirname + "../talash/public/"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./talash/public/Reportpics");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
route.post("/report", upload.single("image"), async (req, res) => {
  const {
    name,
    age,
    address,
    phone,
    gender,
    time,
    wear,
    User_Email,
  } = req.query;
  const url = "Reportpics/" + req.file.originalname;
  const fileadd = "talash\\public\\Reportpics\\" + req.file.originalname;
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
    //largeDataSet.push(data);Name, Gender, Age, Time, Address, Wear,Contact
  });
  // in close event we are sure that stream is from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
  });
  // send data to browser

  console.log("here is the user email", User_Email);
  let report = {};
  report.name = name;
  report.age = age;
  report.file = url;
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
  //res.json(userModel);
});

route.get("/getreport/", async (req, res) => {
  var User_Email = req.query.User_Email;
  //var User_Email="syedan1405@gmail.com";
  console.log("here is the email", User_Email);
  await Report.find({ User_Email })

    .then((report) => {
      return res.json({ status: true, message: "data found", data: report });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
  // console.log("Found data");
});
route.get("/allreport/", async (req, res) => {
  //var User_Email=req.query.User_Email;
  //var User_Email="syedan1405@gmail.com";
  //console.log("here is the email" , User_Email)
  await Report.find()
    .then((report) => {
      return res.json({ status: true, message: "data found", data: report });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
  // console.log("Found data");
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
  // console.log("Found data");
});
route.put("/comment/", (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

module.exports = route;
