let db = require("../models");


module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(results => {
            console.log(results)
            res.json(results)
        })
    })


    app.put("/api/workouts/:id", (req, res) => {

        console.log(req.body, req.params.id)
        // db.Workout.insert({_id: req.params.id})
        // .then((results => {
        //     console.log(results);
        //     res.json(results)
        // }))
    })

    // app.post("/api/workouts", (req, res) => {
    //     db.Workout.create({req.body})
    // })
    app.get("/api/workouts/ranges", (req, res) => {

    })




}