const path = require("path");
const db = require("../models");

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/", "index.html"));
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/", "exercise.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/", "stats.html"));
    });

    app.get("/obj", (req, res) => {


        const James = {
            "userName": "Jbotham",
            "name": {
                "first": "James",
                "last": "Botham"
            },
            "email": "James@jamesbotham.com"
        };


        db.User.findOne(James)
            .then(user => {
                console.log(user, "54");
                db.Workout.create({
                    userId: user._id,
                    name: "First Workout of the year"
                }).then(workoutRes => {

                    console.log("Workout creation line 53: ");

                    let one = {
                        userId: user._id,
                        reps: 12,
                        weight: 90
                    };

                    let two = {
                        userId: user._id,
                        reps: 10,
                        weight: 100
                    };

                    let three = {
                        userId: user._id,
                        reps: 8,
                        weight: 115
                    };

                    let four = {
                        userId: user._id,
                        reps: 6,
                        weight: 125
                    };

                    setAndExcercise(one, two, three, four);

                    function setAndExcercise(setOne, setTwo, setThree, setFour) {
                        console.log(setOne, setTwo, setThree, setFour);
                        db.Exercise.create({
                            exerciseId: "5e35185e998b3f5fdc1adfd3",
                            userId: user._id,
                            set: { setOne, setTwo, setThree, setFour }
                        })
                            .then(exerciseResult => {
                                console.log("Creation of Exercise line 87: ", exerciseResult);
                                db.Workout.update({ _id: workoutRes._id }, { $push: { exercise: exerciseResult._id } })
                                    .then(another => {
                                        console.log(another);
                                    }).catch(err => {
                                        console.log(err);
                                    });
                            });
                    }
                });
            });
    });
};


        //Will return the entire workout that meet the criteria. In this case being bench
        // db.Workout.find({ "exercises.name": "bench" })
        // .then((results) => {
        //     res.send(results);
        //     console.log(results, "here");
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        // db.Workout
        // .find({"exercises.name" : "bench", "exercises.type" :  "resistance"})
        // .select({type: 1, name : 1, weight : 1, sets : 1,reps : 1})
        // .then((results) => {

        //         console.log(results);
        //         res.json(results);
        // });



                                // const hi = db.Set.create({ setOne });
                                // const bye = db.Set.create({ setTwo });
                                // const there = db.Set.create({ setThree });
                                // const oh = db.Set.create({ setFour });

                                // const array = [hi._id, bye._id, there._id, oh._id];
                                // console.log("Set creation array line 98: ", array);
                                // db.Exercise.findOneAndUpdate({ _id: exerciseResult._id }, { $push: { set: { $each: array } } })
                                //     .then(ressss => {
                                //         console.log("exercise findoneupdate line 98: ", ressss);
                                //         res.send("done");
                                //     }).catch(err => { console.log(err); });
                            // }).catch(err => { console.log(err); });
                //     }
                // }).catch(err => { console.log(err); });
            // });