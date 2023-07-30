const { on } = require("../app.js");
const db = require("../db/dbConfig.js");

// GET ALL SONGS
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

// GET ONE SONG
const getSong = async (id) => {
    try{
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return oneSong;
    } catch(error){
        return error;
    }
}

module.exports = {
  getAllSongs,
  getSong,
};
