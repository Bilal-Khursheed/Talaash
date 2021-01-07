const express = require("express");
const mongoose = require("mongoose");
const comment = require("../DB/comment");

const route = express.Router();

route.post("/addcomment", async (req, res) => {
  const {
    Name,
    ReportID,
    Comments,
    file_url,
    
  } = req.body;
  console.log("all data " , Name, "" , ReportID, "" , Comments)
  let user = {};
  user.Name = Name;
  user.ReportID = ReportID;
  user.Comments = Comments;
  user.file_url=file_url;

  let userModel = new comment(user);
  await userModel
    .save()
    .then((userModel) => res.json(userModel))
    .catch((err) => console.log(err));
  //res.json(userModel);
});
route.get("/allcommet", async (req, res) => {
  await comment.find()
    .then((user) => {   
      return res.json({ status: true, message: "user found", data: user });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
  // console.log("Found data");

  // res.json(userModel);
});
// console.log("Found data");

module.exports = route;
