/** @format */

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const songController = require("./controllers/songController");

app.use(cors());
app.use(express.json());

app.use("/songs", songController);

app.get("/", (req, res) => {
	res.send("Welcome to Tuner");
});

module.exports = app;
