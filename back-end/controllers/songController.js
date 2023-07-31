/** @format */

const express = require("express");
const songController = express.Router();
const {
	getAllSongs,
	getSongById,
	createSong,
	deleteSong,
	updateSong,
} = require("../queries/songs");

const {
	checkBoolean,
	checkArtist,
	checkName,
} = require("../validations/songValidator");

songController.get("/", async (req, res) => {
	try {
		const { order, is_favorite } = req.query;
		let songs = await getAllSongs(order, is_favorite);
		if (songs.length > 0) {
			res.status(200).json(songs);
		} else {
			res.status(204).send("There are no songs to get");
		}
	} catch (error) {
		res.status(500).send("Error fetching songs: " + error.detail);
	}
});

songController.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		let song = await getSongById(id);
		if (song) {
			res.status(200).json(song);
		} else {
			res.status(404).send("Song not found");
		}
	} catch (error) {
		res.status(500).send("Error fetching song: " + error.detail);
	}
});

songController.post(
	"/",
	checkBoolean,
	checkArtist,
	checkName,
	async (req, res) => {
		const { name, artist, album, time, is_favorite } = req.body;
		let favorite =
			is_favorite === "true" || is_favorite === true ? true : false;
		try {
			let newSong = await createSong(name, artist, album, time, favorite);
			res.status(200).json(newSong);
		} catch (error) {
			res.status(500).json({
				error: "Error creating song: " + error.detail,
			});
		}
	}
);

songController.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		let deletedSong = await deleteSong(id);
		res.status(200).json(deletedSong);
	} catch (error) {
		res.status(404).json({
			error: "Error deleting song: " + error.detail,
		});
	}
});

songController.put(
	"/:id",
	checkBoolean,
	checkArtist,
	checkName,
	async (req, res) => {
		const { id } = req.params;
		const { name, artist, album, time, is_favorite } = req.body;
		let favorite =
			is_favorite === "true" || is_favorite === true ? true : false;
		try {
			let updatedSong = await updateSong(
				id,
				name,
				artist,
				album,
				time,
				favorite
			);
			if (updatedSong) {
				res.status(200).json(updatedSong);
			} else {
				res.status(404).send("Song not found");
			}
		} catch (error) {
			res.status(500).send("Error updating song: " + error.detail);
		}
	}
);

module.exports = songController;
