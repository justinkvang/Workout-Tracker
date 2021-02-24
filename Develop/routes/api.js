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

