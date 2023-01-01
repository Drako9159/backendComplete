const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
//Selection type db
const ENGINE_DB = process.env.ENGINE_DB

const dbConnectNosql = require("./config/mongo");
const { dbConnectMysql } = require("./config/mysql");
(ENGINE_DB === "nosql" ? dbConnectNosql() : dbConnectMysql())

//dbConnectNosql();


app.set("port", process.env.PORT || 3000);

app.use(cors());
//receive json
app.use(express.json());
//recursos publicos por url-name
//app.use(express.static("/storage"));
const path = require("path");
app.use(express.static(path.join(__dirname, "/storage")));



//Logger
const loggerStream = require("./utils/handleLogger");
const morganBody = require("morgan-body");
const dbConnect = require("./config/mongo");
morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    //if not error
    return res.statusCode < 400;
  },
});

//routes en orden
app.use("/api", require("./routes"));
app.use("/api", require("./routes/tracks.routes"));
app.use("/api", require("./routes/storage.routes"));

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

module.exports = app;
