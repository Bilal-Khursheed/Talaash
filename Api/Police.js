const express = require("express");
const mongoose = require("mongoose");
const Police = require("../DB/Police");
const Organization = require("../DB/Organization");
const Hospital = require("../DB/Hospital");
const User = require("../DB/User");

const route = express.Router();

route.post("/police", async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phone,
    conf_password,
  } = req.body;
  let police = {};
  police.name = name;
  police.email = email;
  police.password = password;
  police.address = address;
  police.conf_password = conf_password;
  police.phone = phone;

  let policeModel = new Police(police);
  await policeModel
    .save()
    .then((policeModel) => res.json(policeModel))
    .catch((err) => console.log(err));
});

route.get("/Login", async (req, res) => {
  const { email, password } = req.query;
  console.log("email : ", email);
  console.log("pass : ", password);
  const userr1 = await User.findOne({ email });
    if (userr1 != null) {
      if (userr1.password === password) {
        console.log("password and email match for User ");
       return res
          .status(200)
          .json({ status: true, message: "found", role: "User", data: userr1 });
      }
      else {
         return res.status(200).json({ status: false,message: "PasswordIncorrect"})
      }
    }else {

  const user = await Organization.findOne({ email });

  if (user != null) {
    
    if (user.password === password) {
      console.log("password and email match for Organization ");
      return res
        .status(200)
        .json({ status: true, message: "found", role: "Organization" , data: user});
    }
    else {
      return res.status(200).json({ status: false,message: "PasswordIncorrect"})
   } 
  } 
  else {
    const userr = await Hospital.findOne({ email });
    if (userr != null) {
      if (userr.password === password) {
        console.log("password and email match for hos ");
        return res
          .status(200)
          .json({ status: true, message: "found", role: "hospital", data: userr });
      } else {
        return res.status(200).json({ status: false,message: "PasswordIncorrect"})
     } 
    }else{
  
  const userr = await Police.findOne({ email });
    if (userr != null) {
      if (userr.password === password) {
        console.log("password and email match for Police ");
        return res
          .status(200)
          .json({ status: true, message: "found", role: "Police", data: userr });
      } else {
        return res.status(200).json({ status: false,message: "PasswordIncorrect"})
     }
    }
    else{
      return res.status(200).json({ status: false,message: "EmailIncorrect"})
    }
  }}}
    
}); //11
module.exports = route;