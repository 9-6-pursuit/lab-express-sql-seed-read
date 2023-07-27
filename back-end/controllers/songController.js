// THIS FILE HOLDS ALL THE CRUD ROUTES: REQUESTS TO DATABASE
const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");
const {
    checkName, checkBoolean, checkArtist
} = require("../validations/checkSongs")

// INDEX
songs.get("/", async (req, res) => {
  const { order, is_favorite } = req.query;
  try {
    const allSongs = await getAllSongs(order, is_favorite);
    if (allSongs.length > 0) {
      res.status(200).json(allSongs);
    } else {
      res.status(404).json({ error: "No songs found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song.time) {
    res.json(song);
  } else {
    res.redirect("/404"); // BROWSER ERROR
    // res.status(404).json("Song not found with the given ID");
  }
});

// CREATE
songs.post("/", checkName, checkBoolean, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

// UPDATE
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  res.status(200).json(updatedSong);
});

module.exports = songs;
