const express = require("express");
const mongoose = require("mongoose");
const Organization = require("../DB/Organization");
const Police = require("../DB/Police");
const User = require("../DB/User");
const Hospital = require("../DB/Hospital");
const route = express.Router();

route.post("/", async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phone,
    username,
    conf_password,
  } = req.body;
  let user = {};
  user.name = name;
  user.username = username;
  user.email = email;
  user.password = password;
  user.address = address;
  user.conf_password = conf_password;
  user.phone = phone;

  let userModel = new User(user);
  await userModel
    .save()
    .then((userModel) => res.json({ message: "Added", data: userModel }))
    .catch((err) => console.log(err));
});
route.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email })
    .then((user) => {
      if (password == user.password)
        if (email == user.email) {
          console.log("password and email match");
        } else console.log("Found data");
      return res.json({ status: true, message: "user found" });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
});
route.get("/update/", async (req, res) => {
  var email = req.query.email;
  var newpassword = req.query.newpassword;
  var oldPassword = req.query.oldPassword;
  console.log("email" + email);

  const user = await User.findOne({ email });
  if (user != null) {
    console.log("id  data found");
    if (email == user.email) {
      if (oldPassword != user.password) {
        return res.json({
          message: "PassNotFound",
        });
      } else {
        console.log("email matchs");
        await User.findOneAndUpdate(
          { email: email },
          { password: newpassword },
          function (err, result) {
            if (err) {
              res.status(401).json({
                message: err,
              });
              console.log(err);
            }
            // Add else
            else {
              console.log("updated");
              return res.status(200).json({
                message: "Updated",
              });
              console.log("updated");
            }
          }
        );
      }
    }
  } else {
    const user1 = await Police.findOne({ email });
    if (user1 != null) {
      console.log("id  data found");
      if (email == user1.email) {
        if (oldPassword != user1.password) {
          return res.json({
            message: "PassNotFound",
          });
        } else {
          console.log("email matchs");
          await Police.findOneAndUpdate(
            { email: email },
            { password: newpassword },
            function (err, result) {
              if (err) {
                res.status(401).json({
                  message: err,
                });
                console.log(err);
              }
              // Add else
              else {
                console.log("updated");
                return res.status(200).json({
                  message: "Updated",
                });
                console.log("updated");
              }
            }
          );
        }
      }
    } else {
      const user3 = await Hospital.findOne({ email });
      if (user3 != null) {
        console.log("id  data found");
        if (email == user3.email) {
          if (oldPassword != user3.password) {
            return res.json({
              message: "PassNotFound",
            });
          } else {
            console.log("email matchs");
            await Hospital.findOneAndUpdate(
              { email: email },
              { password: newpassword },
              function (err, result) {
                if (err) {
                  res.status(401).json({
                    message: err,
                  });
                  console.log(err);
                }
                // Add else
                else {
                  console.log("updated");
                  return res.status(200).json({
                    message: "Updated",
                  });
                  console.log("updated");
                }
              }
            );
          }
        }
      } else {
        const user2 = await Organization.findOne({ email });
        if (user2 != null) {
          console.log("id  data found");
          if (email == user2.email) {
            if (oldPassword != user2.password) {
              return res.json({
                message: "PassNotFound",
              });
            } else {
              console.log("email matchs");
              await Organization.findOneAndUpdate(
                { email: email },
                { password: newpassword },
                function (err, result) {
                  if (err) {
                    res.status(401).json({
                      message: err,
                    });
                    console.log(err);
                  }
                  // Add else
                  else {
                    console.log("updated");
                    return res.status(200).json({
                      message: "Updated",
                    });
                    console.log("updated");
                  }
                }
              );
            }
          }
        } else {
          return res.json({
            message: "NotFound",
          });
        }
      }
    }
  }
});

module.exports = route;
