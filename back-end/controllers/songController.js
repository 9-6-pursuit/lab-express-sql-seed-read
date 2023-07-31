const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs"); // Replace "../queries/songs" with the appropriate path to your songs queries file
const { checkBoolean, checkName } = require("../validations/checkSongs"); // Replace "../validations/checkSongs" with the appropriate path to your songs validations file

// INDEX - Get all songs
songs.get("/", async (req, res) => {
  try {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } catch (error) {
    console.error("Error getting songs:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// SHOW - Get a specific song
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } catch (error) {
    console.error("Error getting song:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE - Create a new song
songs.post("/", checkBoolean, checkName, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    console.error("Error creating song:", error);
    res.status(400).json({ error: "Error creating song" });
  }
});

// DELETE - Delete a song
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json("Song not found");
    }
  } catch (error) {
    console.error("Error deleting song:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// UPDATE - Update a song
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  } catch (error) {
    console.error("Error updating song:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = songs;

