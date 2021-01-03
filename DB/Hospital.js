const mongoose = require("mongoose");

const hospital = new mongoose.Schema({
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

module.exports = Hospital = mongoose.model("hospital", hospital);


