const mongoose = require("mongoose");
function dbConnect() {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("correct connection");
      } else {
        console.log("error connection");
      }
    }
  );
}
module.exports = dbConnect;
