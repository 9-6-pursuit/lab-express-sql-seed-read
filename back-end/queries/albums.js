const db = require("../db/dbConfig.js");

// ALL ALBUMS
const getAllAlbums = async () => {
  try {
    const allAlbums = await db.any("SELECT * FROM albums");
    return allAlbums;
  } catch (error) {
    return error;
  }
};

// ONE ALBUM
const getAlbum = async (id) => {
  try {
    const oneAlbum = await db.one("SELECT * FROM albums WHERE id=$1", id);
    return oneAlbum;
  } catch (error) {
    return error;
  }
};

// CREATE
const createAlbum = async (album) => {
  try {
    const newAlbum = await db.one(
      "INSERT INTO albums (name, artist) VALUES($1, $2) RETURNING *",
      [album.name, album.artist]
    );
    return newAlbum;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM albums WHERE id = $1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateAlbum = async (id, album) => {
  try {
    const updatedAlbum = await db.one(
      "UPDATE albums SET name=$1, artist=$2 WHERE id=$3 RETURNING *",
      [album.name, album.artist, id]
    );
    return updatedAlbum;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
};
