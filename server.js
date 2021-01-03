const express = require("express");
const connectDB = require("./DB/Connection");
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use("/api", require("./Api/User"));
app.use("/api", require("./Api/Report"));
app.use("/api", require("./Api/Hospital"));
app.use("/api", require("./Api/Police"));
app.use("/api", require("./Api/Organization"));
app.use("/api", require("./Api/Trustee"));
app.use("/api", require("./Api/faceApi"));
app.use("/api", require("./Api/comment"));
//app.use("/api", require("./Api/search"));
//app.use("/api/login", require("./Api/User"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("talash/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "talash", "build", "index.html"));
  });
}
const Port = process.env.PORT || 3001;

app.listen(Port, () => console.log("Server started"));
