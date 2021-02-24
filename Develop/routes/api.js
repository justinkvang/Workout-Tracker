const router = require("express").Router();
const db = require("../models");

//creat workout
router.post("/api/workouts", ({body}, res) => {
    db.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

