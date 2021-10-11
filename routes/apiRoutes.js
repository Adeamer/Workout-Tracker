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
}