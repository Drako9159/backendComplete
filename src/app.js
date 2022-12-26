const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo")
dbConnect()
app.set("port", process.env.PORT || 3000);

app.use(cors());

//routes
app.use(require("./routes/routes.routes"));

app.use((req, res, next) => {
  res.status(404).send("404 Not Founc");
});

module.exports = app;
