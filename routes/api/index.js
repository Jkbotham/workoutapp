const router = require("express").Router();
const workoutPlanRoute = require("./workoutPlan");
const exerciseRoute = require("./exercise")
const workoutRoute = require("./workout")

// Api Routes
router.use("/workout", workoutRoute);
// router.use("/user", userRoute);
router.use("/workoutPlan", workoutPlanRoute);
router.use("/exercise", exerciseRoute);

module.exports = router;

