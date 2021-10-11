const path = require ("path");

module.exports = function(app) {
    // To open up the main page when the server is run
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};