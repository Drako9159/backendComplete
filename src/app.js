const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");
dbConnect();
app.set("port", process.env.PORT || 3000);

app.use(cors());
//receive json
app.use(express.json());
//recursos publicos por url-name
//app.use(express.static("/storage"));
const path = require("path");
app.use(express.static(path.join(__dirname, "/storage")));

//routes
app.use("/api", require("./routes/tracks.routes"));
app.use("/api", require("./routes/storage.routes"));
app.use("/api", require("./routes"));
/*
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});*/

module.exports = app;
