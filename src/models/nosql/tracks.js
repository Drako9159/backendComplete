const mongoose = require("mongoose");
//soft delete
const mongooseDelete = require("mongoose-delete");
const TracksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator(req) {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true, //TODO createdAt, updatedAt
  }
);
/**
 * Método crea una relación a storage
 */

TracksSchema.statics.findAllData = function () {
  const joinData = this.aggregate([
    {
      $lookup: {
        from: "storages", //TODO tracks --> storages
        localField: "mediaId", //Tracks.mediaId
        foreignField: "_id", //Storages._id
        as: "audio", //Alias
      },
    },
    {
      $unwind: "$audio",
    },
  ]);
  return joinData;
  //return this.find({ name:new RegExp(name, "i") })
};

TracksSchema.statics.findOneData = function (id) {
  const joinData = this.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "storages", //TODO tracks --> storages
        localField: "mediaId", //Tracks.mediaId
        foreignField: "_id", //Storages._id
        as: "audio", //Alias
      },
    },
    {
      $unwind: "$audio",
    },
  ]);
  return joinData;
  //return this.find({ name:new RegExp(name, "i") })
};

//sobreescribe los metodos con el plugin
TracksSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("tracks", TracksSchema);
