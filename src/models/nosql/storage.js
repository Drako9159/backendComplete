const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true, //TODO createdAt, updatedAt
  }
);
StorageSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("storages", StorageSchema);

