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
      tpye: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
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
        localField: "mediaId", //Tracks.mdiaId
        foreignField: "_id", //Storages._id
        as: "audio", //Alias
      },
    },
    
  ]);
  return joinData;
  //return this.find({ name:new RegExp(name, "i") })
};

//sobreescribe los metodos con el plugin
TracksSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("tracks", TracksSchema);
