// === DEPENDENCIES ===
const express = require('express');
const cors = require("cors");

// === CONFIGURATION ===
const app = express();
const PORT = 4000;

// === ROUTES ===

app.get("/", (req, res) => {
    res.send("Welcome to the Tuner App");
});


// SONG ROUTES
const songController = require("/.controllers/songController.js");
app.use("/songs", songController);


// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
  


// === EXPORT ===
module.exports = app;


// =====================

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
