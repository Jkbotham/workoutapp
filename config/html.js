// const path = require("path");
// const db = require("../../models");
// const js = require("../../assets/script/dbFunctions");

// module.exports = (app) => {

//     app.get("/", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/", "index.html"));
//     });

//     app.get("/exercise", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/", "exercise.html"));
//     });

//     app.get("/stats", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/", "stats.html"));
//     });

//     app.get("/test/getOne", (req,res) => {
//         db.Exercise.findOne({_id :"5e3755a50c582e147c30ba2a"}).populate(["set.userId","userId"])
//         .then( results => { 
//             console.log(results);
//             console.log(results.set[0]);
//         });
//     });

//     app.get("/obj", (req, res) => {
//         const okayfine = {
//             id: "5e3755a50c582e147c30ba2a",
//             setId: "5e3755a50c582e147c30ba2b"
//         };
        
//         js.deleteSet(okayfine);

        // db.Exercise.findByIdAndUpdate({_id: "5e3755b91012cc3f3413f200"},{$pull: {set:{_id : "5e377811b8fa001674f63653"}}}).then(results => {
        //     console.log(results);
        // });
        // const ye = js.newWorkout("something awesome", "5e37547fd30fec18e8dae740").then(results => { 
        //     console.log(results, "newWorkout Fun in HMTL");
        // });

        // const ye = js.addSet("5e3755b91012cc3f3413f200", "5e375a75eb6afc4544f8b1ad", 8, 10, undefined, 1000000, 10).then(results => {
        //     console.log(results);
        // });

        // console.log(ye);
        // run();


        // async function run() {

        //     const James = {
        //         "userName": "Jbotham",
        //         "name": {
        //             "first": "James",
        //             "last": "Botham"
        //         },
        //         "email": "James@jamesbotham.com"
        //     };

        //     const user = await db.User.create(James);

        //     let sets = {
        //         one: {
        //             userId: user._id,
        //             reps: 12,
        //             weight: 90
        //         },
        //         two: {
        //             userId: user._id,
        //             reps: 10,
        //             weight: 100
        //         },

        //         three: {
        //             userId: user._id,
        //             reps: 8,
        //             weight: 115
        //         },

        //         four: {
        //             userId: user._id,
        //             reps: 6,
        //             weight: 125
        //         }
        //     };
        //     // .then(user => {
        //     //     console.log(user, "54");
        //     const workoutResponse = await db.Workout.create({ userId: user._id, "name": "Chest Day BB" });

        //     console.log(user, "User Console Log", workoutResponse);

        //     // setAndExcercise(one, two, three, four, user.Id, workoutRes._id);
        //     // });

        //     // async function setAndExcercise(setOne, setTwo, setThree, setFour, userId, workoutRes) {
        //     // console.log(setOne, setTwo, setThree, setFour);
        //     const userUpdate = await db.User.findOneAndUpdate({ "_id": user._id }, { "$push": { "workouts": workoutResponse._id }}, { new: true,upsert:false}, (err, result) => {
        //         console.log(err, result);
        //     } );
        //     // .then(ress => {
        //     //     console.log(ress);
        //     // });
        //     console.log(userUpdate)
        //     const exerciseResult = await db.Exercise.create({
        //         exerciseId: "5e35185e998b3f5fdc1adfd3",
        //         userId: user._id,
        //         set: [sets.one, sets.two, sets.three]
        //     });

        //     // console.log("Creation of Exercise line 87: ", exerciseResult);
        //     // console.log(exerciseResult);
        //     console.log(exerciseResult);
        //     const workoutUpdate = await db.Workout.findByIdAndUpdate({"_id": workoutResponse._id}, { "$push": { "exercises": exerciseResult._id } }, { safe: true, new: true });

        //     // function updatefunction(workout)
        //     console.log(workoutUpdate);
        //     // };

        // };

        // -----

//     });
// };
        // db.Exercise.findOne({_id :"5e367c761fd5d82f6cd8327f"}).populate(["set.userId","userId"])
        // // .populate("set.userId")
        // .then( results => { 
        //     console.log(results);
        //     console.log(results.set[0]);
        // });
        // db.User.findOne({"User.Exercise" : {$in: {_id: id}}});




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
        //     });
        // };

        //     app.get("/api/allWorkouts", (req, res) => {
//         db.Workout.find({})
//             .then(results => {
//                 // console.log(results);
//                 res.json(results);
//             });
//     });

//     app.post("/api/workouts", ({ body }, res) => {
//         db.Workout.create(body)
//             .then(results => {
//                 // console.log("Insterted to db", body, "results =", results);
//                 res.json(results);
//             });
//     });

//     app.put("/api/workouts/:id", (req, res) => {
//         const id = req.params.id;
//         const exercise = req.body;

//         db.Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: exercise } })
//             .then(results => {
//                 res.json(results);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     });

//     app.get("/api/workouts/range", (req, res) => {
//         db.Workout.find({})
//             .then(results => {
//                 // console.log(results);
//                 res.json(results);
//             });
//     });


//     app.post("/workout/new", (req, res)=> {
    
//     if(req)
//     db.Workout.create({
//     name: req.body.name,

//     });

//     });

//     // app.post("/workout/update",  (req, res) => {

//     // })
// // Req to include : body; { userId: "", set: { w/e the activity will be}, and possibly a workoutId}
//     app.post("/exercise/new", (req, res) => {
//         db.Exercise.create({
//             userId: req.body.userId,
//             set: {$push: req.body.set}
//         }).then(results => {
//             if (req.body.workoutId) { 
//                 db.Workout.findByIdAndUpdate({_id: results.userId}, {$push: {exercises: results}}, {new: true});
//             }
//             res.json(results);
//         });
//     });
//     app.post("/sets/new", (req, res) => {
//         const sets = {
//             reps: req.body.reps,
//             weight: req.body.weight
//         };
//         db.Exercise.findOneAndUpdate({_id: req.body.id},{$push: {set: sets}},{new: true})
//         .then(result => {
//             console.log(result);
//             res.json(result);
//         });
//     });

//     app.post("/set/add", (req, res) => {

//         console.log(req.body);
//             js.addSet(req.body).then(results => {
//             console.log(results);
//         });
//     });
// };