const path = require("path");
const router = require("express").Router();

//API Routes

router.get("/api/workout/:id", (req, res) => {
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
router.use("/api", require('/api'));

//This is returning an error in the terminal. The path doesn't exist.
//Commented until fixed.
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;