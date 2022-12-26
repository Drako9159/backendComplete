const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true, //no se pueden repetir
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"], //Puede tener estos dos valores
      default: "user", //Es user si no se cambia
    },
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
  }
);
module.exports = mongoose.model("users", UserSchema)
//users es el nombre de la tabla