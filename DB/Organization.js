const mongoose = require("mongoose");

const organization = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
 
  conf_password: {  
    type: String,
    required: true,
  },
});

module.exports = Organization = mongoose.model("organization", organization);


