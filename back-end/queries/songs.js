// THIS FILE HOLDS RESPONSE FROM ALL REQUESTS MADE TO DATABASE
const db = require("../db/dbConfig.js");

// INDEX: ALL SONGS w/QUERIES
const getAllSongs = async (order, is_favorite) => {
  // Default SQL query to select all songs
  let query = "SELECT * FROM songs";
  // Check if is_favorite query parameter is provided and adjust the query accordingly
  if (is_favorite === "true") {
    query += " WHERE is_favorite = true";
  } else if (is_favorite === "false") {
    query += " WHERE is_favorite = false";
  }
  // Check if order query parameter is provided and adjust the query accordingly
  if (order === "asc") {
    query += " ORDER BY name ASC";
  } else if (order === "desc") {
    query += " ORDER BY name DESC";
  }

  try {
    console.log("SQL query:", query); 
    const allSongs = await db.any(query);
    return allSongs;
  } catch (error) {
    return error;
  }
};

// SHOW: ONE SONG
const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error; // DATABASE ERROR
  }
};

// CREATE: A SONG
const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

// DELETE: A SONG
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

// UPDATE: A SONG
const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
};
