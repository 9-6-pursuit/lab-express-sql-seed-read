// this is similar to app.js in bookmarks2


// === DEPENDENCIES ===
const express = require('express');
const cors = require("cors");

// === CONFIGURATION ===
const app = express();

// === MIDDLEWARE
app.use(cors());
app.use(express.json());



// === ROUTES ===

app.get("/", (req, res) => {
    res.send("Welcome to the Tuner App");
});


// SONG ROUTES
const songController = require("./controllers/songController.js");
app.use("/songs", songController);


// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
  


// === EXPORT ===
module.exports = app;


// =====================
