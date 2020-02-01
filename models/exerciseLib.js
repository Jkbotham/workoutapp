
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseLibSchema = new Schema(
    {
        type: {
          type: String,
          trim: true,
          required: true
        },
        name: {
          type: String,
          required: "Enter an exercise name"
        },
        description: {
            type: String,
            trim: true
        },
        muscleGroup: {
          type: String,
          trim: true
        }
  }
  );

  const ExerciseLib = mongoose.model("ExerciseLib", exerciseLibSchema);

  module.exports = ExerciseLib;