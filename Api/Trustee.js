const express = require("express");
const mongoose = require("mongoose");
const Trustee = require("../DB/Trustee");
const route = express.Router();

route.post("/trustee", async (req, res) => {
  const { name, phone, email } = req.body;
  let trustee = {};
  trustee.name = name;
  trustee.phone = phone;
  trustee.email = email;

  let trusteeModel = new Trustee(trustee);
  await trusteeModel
    .save()
    .then((trusteeModel) => res.json(trusteeModel))
    .catch((err) => console.log(err));
  //res.json(userModel);
});
route.post("/Trustee1111", async (req, res) => {
  const { name, phone } = req.body;

  await Trustee.findOne({ name })
    .then((trustee) => {
      if (phone == trustee.phone)
        if (name == trustee.name) {
          console.log("password and email match");
        } else console.log("Found data");
      return res.json({ status: true, message: "user found" });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
  // console.log("Found data");

  // res.json(userModel);
});
module.exports = route;
