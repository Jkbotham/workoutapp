
const mongoose = require("mongoose");
// const db = require("../models");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exerciseId: {
    type: Schema.Types.ObjectId, ref: "ExerciseLib"
  },
  userId: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  day: {
    type: Date,
    default: Date.now
  },
  set: [{
    userId: {
      type: Schema.Types.ObjectId, ref: "User"
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
    // type: Schema.Types.ObjectId, ref: "Set"
  }]
}
);
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;




// const Workout = mongoose.model("Workout", workoutSchema);
// module.exports = Workout;
// const exerciseSchema = new Schema(
//   {
//       type: {
//         type: String,
//         trim: true,
//         required: "Enter an exercise type"
//       },
//       day: {
//         type: Date,
//         default: Date.now
//       },
//       name: {
//         type: String,
//         trim: true,
//         required: "Enter an exercise name"
//       },
//       duration: {
//         type: Number,
//         required: "Enter an exercise duration in minutes"
//       },
//       weight: {
//         type: Number
//       },
//       reps: {
//         type: Number
//       },
//       sets: {
//         type: Number
//       },
//       distance: {
//         type: Number
//       }
// }
// );