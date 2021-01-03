const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  ReportID: {
    type: String,
    required: true,
  },
  Comments: {
    type: String,
    required: true,
  },

});

module.exports = Comment = mongoose.model("comment", comment);


