// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

const songsController = require("./controllers/songController.js");
app.use("/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to FullStack Application a.k.a PERN Tuner");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
