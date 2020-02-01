const mongoose = require("mongoose");
// const db = require("../models");

const Schema = mongoose.Schema;

const setSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, ref: "db.User"
    },
    reps: {
      type: Number
    },
    weight: {
      type: Number
    },
    mSystem: {
      type: String,
      default: "US Standard"
    },
    duration: {
      type: Number,
      // required: "Enter an exercise duration in minutes"
    },
    distance: {
      type: Number
    }
  });

const Set = mongoose.model("Set", setSchema);

module.exports = Set;