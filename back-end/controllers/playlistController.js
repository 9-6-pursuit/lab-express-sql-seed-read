const express = require("express");
const playlists = express.Router();
const {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlists.js");
const { checkName, checkBoolean, validateURL } = require("../validations/checkPlaylists.js");

// INDEX
playlists.get("/", async (req, res) => {
    const allPlaylists = await getAllPlaylists();
    if (allPlaylists[0]) {
      res.status(200).json(allPlaylists);
    } else {
      res.status(500).json({ error: "server error" });
    }
});

// SHOW
playlists.get("/:id", async (req, res) => {
  const id = req.params.id;
  const playlist = await getPlaylist(id);
  if (playlist) {
    res.json(playlist);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
playlists.post("/", checkName, checkBoolean, validateURL, async (req, res) => {
  try {
    const playlist = await createPlaylist(req.body);
    res.json(playlist);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlaylist = await deletePlaylist(id);
  if (deletedPlaylist.id) {
    res.status(200).json(deletedPlaylist);
  } else {
    res.status(404).json("Playlist not found");
  }
});

// UPDATE
playlists.put("/:id", checkName, checkBoolean, validateURL, async (req, res) => {
  const { id } = req.params;
  const updatedPlaylist = await updatePlaylist(id, req.body);
  res.status(200).json(updatedPlaylist);
});

module.exports = playlists;