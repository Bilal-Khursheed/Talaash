const express = require("express");
const mongoose = require("mongoose");
const Hospital = require("../DB/Hospital");
const route = express.Router();

route.post("/hospital", async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phone,
    conf_password,
  } = req.body;
  let hospital = {};
  hospital.name = name;
  hospital.email = email;
  hospital.password = password;
  hospital.address = address;
  hospital.conf_password = conf_password;
  hospital.phone = phone;

  let hospitalModel = new Hospital(hospital);
  await hospitalModel
    .save()
    .then((hospitalModel) => res.json(hospitalModel))
    .catch((err) => console.log(err));
  //res.json(userModel);
});
route.post("/hlogin", async (req, res) => {
  const { email, password } = req.body;

  await Hospital.findOne({ email })
    .then((hospital) => {
      if (password == hospital.password)
        if (email == hospital.email) {
          console.log("password and email match");
        } else console.log("Found data");
      return res.json({ status: true, message: "user found" });
    })
    .catch((err) => console.log("yahan a raha haaaaa hospital" + err));
  // console.log("Found data");
  // res.json(userModel);
});
module.exports = route;