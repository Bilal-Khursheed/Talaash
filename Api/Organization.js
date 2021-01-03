const express = require("express");
const mongoose = require("mongoose");
const Organization = require("../DB/Organization");
const route = express.Router();

route.post("/organization", async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phone,
    conf_password,
  } = req.body;
  let organization = {};
  organization.name = name;
  organization.email = email;
  organization.password = password;
  organization.address = address;
  organization.conf_password = conf_password;
  organization.phone = phone;

  let organizationModel = new Organization(organization);
  await organizationModel
    .save()
    .then((organizationModel) => res.json(organizationModel))
    .catch((err) => console.log(err));
  //res.json(userModel);
});
route.post("/orglogin", async (req, res) => {
  const { email, password } = req.body;

  await Organization.findOne({ email })
    .then((organization) => {
      if (password == organization.password)
        if (email == organization.email) {
          console.log("password and email match");
          return res.json({ status: true, message: "found" })
        } else console.log("Found data");
      return res.json({ status: false, message: "user found" });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
  // console.log("Found data");

  // res.json(userModel);
});
module.exports = route;