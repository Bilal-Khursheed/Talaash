const mongoose = require("mongoose");
//const { default: Report } = require("../clientTalaash/src/pages/Report");
//const { report } = require("../Api/Report");
const {ObjectId} = mongoose.Schema.Types;
const User_Name= mongoose.Schema.User
const report = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,

  },
  gender: {
    type: String,
    
  },
  address: {
    type: String,
    required: true,
  },
  wear: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true, 
  },
  file: {
    type: String,
     
  },
  time: {
    type: String,

   
  },
  
  User_Email:{
    type: String,
  },
  comments:[{
    text:String,
    postedBy:{type:ObjectId,ref:"User"}
}],
 
});

module.exports = Report = mongoose.model("report", report);


