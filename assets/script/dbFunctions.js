const db = require("../../models");

const js = {
    async newWorkout(name, exerciseId) {
        return await db.Workout.create({
            workoutName: name,
            exercises: exerciseId
        }).then(results => {
            console.log(results, "in db fun");
            return results;
        });
    },
    async createExercise(userId, set) {
        db.create({
            userId: userId,
            set: { $push: set }
        }).then(results => {
            return results;
        });
    },
    async addExercToWorkout(userId, exerciseId) {
        db.Workout.findByIdAndUpdate({
            _id: userId
        }, {
            $push: {
                exercises: exerciseId
            }
        }, {
            new: true
        })
            .then(results => {
                return results;
            });
    },
    async addSet(body) {
        console.log(body.reps, body.weight);
        return await db.Exercise.findByIdAndUpdate(
            {
                _id: body.exerciseId
            }, {
            $push: {
                set: {
                    userId: body.userId,
                    reps: body.reps,
                    weight: body.weight,
                    mSystem: body.mSystem,
                    duration: body.duration,
                    distance: body.distance
                },
            } 
        },{
            new: true
        })
            .catch(err => err)
            .then(results => {
                // console.log(results, "in function file");
                return results;
            });
    },
    async deleteSet(obj) {
        return await db.Exercise.findByIdAndUpdate({_id: obj.id}, {$pull: {set: {_id: obj.setId}}});
    }

};


module.exports = js;