// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create our Express app object - this is the center of our Express universe
const app = express();

// Set up CORS Middleware
app.use(cors());

// Home Route to test our app
app.get("/", (req, res) => {
    res.send("Hello World")
});

// Route for retrieving "projects"
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
})

// Route for retrieving "about"
app.get("/about", (req, res) => {
    // send about via JSON
    res.json(about);
})

// Declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server (the listener) - tells our app to listen for requests on a certain port
app.listen(PORT, () => // the function will run after the server turns on
    console.log(`Listening on port ${PORT}`)
    );