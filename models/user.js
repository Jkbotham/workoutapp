const mongoose = require("mongoose");
require("../models/workout");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userName: {
            type: String,
            trim: true,
            // unique: true
        },
        name: {
            first: {
                type: String,
                trim: true,
                // required: true
            },
            last: {
                type: String,
                trim: true,
                // required: true
            }
        },
        email: {
            type: String,
            // unique: true
        },
        workouts: [{ 
            type: Schema.Types.ObjectId, ref: "Workout" 
        }]
    });

const User = mongoose.model("User", userSchema);

module.exports = User;




// const setSchema = new Schema(
//     {
//       userId: {
//         type: Schema.Types.ObjectId, ref: "db.User"
//       },
//       reps: {
//         type: Number
//       },
//       weight: {
//         type: Number
//       },
//       mSystem: {
//         type: String,
//         default: "US Standard"
//       },
//       duration: {
//         type: Number,
//         required: "Enter an exercise duration in minutes"
//       },
//       distance: {
//         type: Number
//       }
//     });

// const exerciseSchema = new Schema({
//     exerciseId: {
//       type: Schema.Types.ObjectId, ref: "ExerciseLib"
//     },
//     userId: {
//       type: Schema.Types.ObjectId, ref: "User"
//     },
//     day: {
//       type: Date,
//       default: Date.now
//     },
//     set: [setSchema]
//   }
//   );

//         workouts: [new mongoose.Schema({
//             name: {
//                 type: String,
//                 // require: true
//             },
//             day: {
//                 type: Date,
//                 default: Date.now
//             },
//             exerciseId: {
//                 type: Schema.Types.ObjectId, ref: "ExerciseLib"
//             }

//         })]

//         // [{
//         //     workoutName: {
//         //         type: String,
//         //         require: true
//         //     },
//         //     day: {
//         //         type: Date,
//         //         default: Date.now
//         //     },
//         //     //   exercises: [{
//         //     //     type: Schema.Types.ObjectId, ref: "Exercise"
//         //     //   }],
//         //     // },
//         //     exerciseId: {
//         //         type: Schema.Types.ObjectId, ref: "ExerciseLib"
//         //     }
//         // }]
//     }
// );

// const Workout = mongoose.model("Workout", workouts)
// const User = mongoose.model("User", userSchema);

// module.exports = User;