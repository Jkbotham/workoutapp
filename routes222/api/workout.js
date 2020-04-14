const router = require("express").Router();
const db = require("../../models");
// const js = require("../assets/script/dbFunctions");

router.route("/workouts/:id")
    .get((req, res) => {
        console.log("made it line 9");

        db.workout.find({ _id: req.params.id })
            .then(results => {
                console.log(results);
                res.json(results);
            }).catch(err => {
                console.log(err);
                res.json(err);
            });
    });
    
module.exports = router;