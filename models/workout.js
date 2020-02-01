const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    workoutName: {
      type: String,
      // require: true
    },
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [{
      type: Schema.Types.ObjectId, ref: "Exercise"
    }],
  },
  // exerciseId: {
  //     type: Schema.Types.ObjectId, ref: "ExerciseLib"
  // },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


// const exerciseSchema = new mongoose.Schema({
//   exerciseId: {
//     type: Schema.Types.ObjectId, ref: "ExerciseLib"
//   },
//   userId: {
//     type: Schema.Types.ObjectId, ref: "User"
//   },
//   day: {
//     type: Date,
//     default: Date.now
//   },
//   set: [{
//     type: Schema.Types.ObjectId, ref: "Set"
//   }]
// });

// exerciseSchema.pre("validate", next => {
//   next();
// });

// exerciseSchema.pre("save", next => {
//   next();
// });
// const Schema = mongoose.Schema;

// const workoutSchema = new mongoose.Schema({
//   exercise: exerciseSchema,
// });

// workoutSchema.pre("validate", next => {
//   next();
// });

// workoutSchema.pre("save", next => {
//   next();
// });

// workout.exercise.push({userid: "5e34fdd1f7201d1a10858576"});
// const christ = Workout.exercise[0];
// console.log(christ);

// workout.save(err => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("No way");
// });





//   {
//     day: {
//       type: Date,
//       default: Date.now
//     },
//     exercises: [{
//       type: Schema.Types.ObjectId, ref: "Exercise"
//     }],
//     name: {
//       type: String,
//       require: true
//     }
//   },
// {
//     toJSON: {
//       // include any virtual properties when data is requested
//       virtuals: true
//   }
// }
// );



// adds a dynamically-created property to schema
// workoutSchema.virtual("totalDuration").get(function() {
//   // "reduce" array of exercises down to just the sum of their durations
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// });

// const Workout = mongoose.model("Workout", workoutSchema);
// // const Exercise = mongoose.model("Exercise", exerciseSchema);
// module.exports = Workout;





