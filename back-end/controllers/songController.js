/** @format */

const express = require("express");
let songController = express.Router();

const { getAllSongs } = require("../queries/songs");

songController.get("/", async (req, res) => {
	let songs = await getAllSongs();
	if (songs[0]) {
		res.status(200).json(songs);
	} else {
		res.status(204).send("there's no songs to get");
	}
});

module.exports = songController;
