const mongoose = require("mongoose");
//const { default: Report } = require("../clientTalaash/src/pages/Report");
//const { report } = require("../Api/Report");

const trustee = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },
});

module.exports = Trustee = mongoose.model("trustee", trustee);
