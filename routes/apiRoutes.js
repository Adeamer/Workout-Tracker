// Requiring the workout model
const Workout = require("../models/workout");

module.exports = function(app) {
    // Get request for all workouts
    app.get("/api/workouts", (req, res) => {
        Workout.find().then(function(data) {
                console.log(data);
                res.json(data);
        });
    });

    // Add a new workout
    app.post("/api/workouts", (req,res) => {
        console.log(req.body);
        Workout.create({}).then(function(data) {
                res.json(data);
        });
    });

    // Update a workout by id
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}).then(function(data) {
            res.json(data);
        });
    });
}