
const db = require("../db/dbConfig.js");

const getAllAlbums = async () => {
  try {
    const allAlbums = await db.any("SELECT * FROM albums");
    return allAlbums;
  } catch (error) {
    return error;
  }
};

const getAlbum = async (id) => {
  try {
    const oneAlbum = await db.any("SELECT * FROM albums WHERE LOWER(name)=LOWER($1)", id);
    return oneAlbum;
  } catch (error) {
    return error;
  }
  };

const collectSongs = async (id) =>{
  try{
    const songs = await db.any(
      `SELECT * FROM albums JOIN songs ON songs.album = albums.name WHERE LOWER(albums.name) = LOWER($1) ;`, id);
      return songs;
    } catch (error){
        return error;
    }
};

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

module.exports = {
  getAlbum,
  collectSongs,
  getAllAlbums,
  createAlbum,
  deleteAlbum,
};