// Requiring npm packages for creating MongoBD
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Creating port when the server is run.
const PORT = process.env.PORT || 3000;

// putting the express server into the app variable.
const app = express();

// Adding as middleware to the express app.
app.use(logger("dev"));

// Middleware for the express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connecting moogoose to the port
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Requiring routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listening for the port when the server is run.
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});