const router = require("express").Router();
const { workout } = require("../models");
const db = require("../models");

//get workouts
router.get("/api/workouts", (req, res) => {
    db.workout.find({})
    .then(dbWorkout => {
        var total = 0;
        workout.exercises.forEach(e => {
            total += e.duration;
        });
        workout.totalDuration = total;
    });
    res.json(dbWorkout);
}) .catch(err => {
    res.json(err);
});

//add exercise
router.put("/api/workouts/:id", (req, res) => {
    db.workout.findOneAndUpdate(
        {_id: req.params.id},
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        {new: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    }) .catch(err => {
        res.json(err);
    });
});

//create workout
router.post("/api/workouts", ({body}, res) => {
    db.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

//get workouts in range
router.get("/api/workouts/range", (req, res) => {
    db.workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }) . catch(err => {
        res.json(err);
    });
});

module.exports = router;