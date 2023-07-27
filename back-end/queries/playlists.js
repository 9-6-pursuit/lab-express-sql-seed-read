const db = require("../db/dbConfig.js");

// ALL Playlists
const getAllPlaylists = async () => {
    try {
      const allPlaylists = await db.any("SELECT * FROM playlists");
      return allPlaylists;
    } catch (error) {
      return error;
    }
};

// ONE Playlist
const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

// CREATE
const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (name, url, category, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
      [playlist.name, playlist.url, playlist.category, playlist.is_favorite]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

// DELETE
const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id = $1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one(
      "UPDATE playlists SET name=$1, url=$2, category=$3, is_favorite=$4 where id=$5 RETURNING *",
      [playlist.name, playlist.url, playlist.category, playlist.is_favorite, id]
    );
    return updatedPlaylist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist
};