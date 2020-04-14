const router = require("express").Router();
const db = require("../../models");
// const js = require("../assets/script/dbFunctions");

router.route("/")

    .get((req, res) => {
        console.log("made it line 9");
        db.workout.find({})
            .then(results => {

                res.json(results);
            }).catch(err => {
                console.log(err);
                res.json(err)
            })
        // db.Workout.find({ _id: req.params.id })
        //     .then(results => {
        //         console.log(results);
        //         res.json(results);
        //     }).catch(err => {
        //         console.log(err);
        //         res.json(err);
        //     });
    });

module.exports = router;