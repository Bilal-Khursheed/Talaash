const mongoose = require("mongoose");

const URI =
  "mongodb+srv://dbUser:dbUser@cluster0.xeyae.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
  mongoose
    .connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

module.exports = connectDB;
