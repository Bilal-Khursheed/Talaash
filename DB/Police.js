const mongoose = require("mongoose");

const police = new mongoose.Schema({
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

module.exports = Police = mongoose.model("police", police);


