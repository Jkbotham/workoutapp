const mongoose = require("mongoose");
const db = require("../../../models");
const exerciseDB = require("./exerciseData");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

console.log(exerciseDB);

db.ExerciseLib.deleteMany({})
  .then(() => db.ExerciseLib.collection.insertMany(exerciseDB))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err, JSON.stringify(err));
    process.exit(1);
  });
