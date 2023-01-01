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
        console.log("MONGO_ESTABLISHED_CONNECTION");
      } else {
        console.log("MONGO_ERROR_CONNECTION");
      }
    }
  );
}
module.exports = dbConnect;
