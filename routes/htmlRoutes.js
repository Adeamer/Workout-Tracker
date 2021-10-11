const path = require ("path");

module.exports = function(app) {
    // To open up the main page when the server is run
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // To send the user to the exercise html for adding a new workout or adding to an exsisting workout
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // To send the user to the stats html
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};