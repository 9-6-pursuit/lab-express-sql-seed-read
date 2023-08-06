// // const { validationResult, body, param } = require('express-validator');

// const db = require('../db/dbConfig'); 

// // Function to get all songs
// const getAllSongs = async (req, res) => {
//   try {
//     const allSongs = await db.any('SELECT * FROM songs');
//     // res.status(200).json(songs);
//     return allSongs

//   } catch (err) {
//     return err;
//     // res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Function to get an individual song by id
// const getSongById = async (req, res) => {
// //   const errors = validationResult(req);
// //   if (!errors.isEmpty()) {
// //     return res.status(400).json({ errors: errors.array() });
// //   }

//   try {
//     const { id } = req.params;
//     const song = await db.oneOrNone('SELECT * FROM songs WHERE id = 1', id);
//     if (song) {
//       res.json(song);
//     } else {
//       res.status(404).json({ error: 'Song not found' });
//     }
//     return song
//   } catch (err) {
//     return err;
//     // res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Function to create a new song
// const createSong = async (req, res) => {
// //   const errors = validationResult(req);
// //   if (!errors.isEmpty()) {
// //     return res.status(400).json({ errors: errors.array() });
// //   }

//   try {
//     const { name, artist, album, time, is_favorite } = req.body;
//     const newSong = await db.one(
//       'INSERT INTO songs (name, artist, album, time, is_favorite) VALUES (1, 2, 3, 4) RETURNING *',
//       [name, artist, album, time, is_favorite]
//     );
//     res.status(201).json(newSong);

//     return newSong
//   } catch (err) {
//     return err;
//     // res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Function to delete a song by id
// const deleteSong = async (req, res) => {
// //   const errors = validationResult(req);
// //   if (!errors.isEmpty()) {
// //     return res.status(400).json({ errors: errors.array() });
// //   }

//   try {
//     const { id } = req.params;
//     const deletedSong = await db.oneOrNone('DELETE FROM songs WHERE id = 1 RETURNING *', id);
//     if (deletedSong) {
//       res.json(deletedSong);
//     } else {
//       res.status(404).json({ error: 'Song not found' });
//     }
//     return deletedSong
//   } catch (err) {
//     return err;
//     // res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Function to update a song by id
// const updateSong = async (req, res) => {
// //   const errors = validationResult(req);
// //   if (!errors.isEmpty()) {
// //     return res.status(400).json({ errors: errors.array() });
// //   }

//   try {
//     const { id } = req.params;
//     const { name, artist, album, time, is_favorite } = req.body;
//     const updatedSong = await db.oneOrNone(
//       'UPDATE songs SET name = 1, artist = 2, album = 3, time = 4, is_Favorite = 5 WHERE id = 6 RETURNING *',
//       [name, artist, album, time, is_favorite, id]
//     );
//     if (updatedSong) {
//       res.json(updatedSong);
//     } else {
//       res.status(404).json({ error: 'Song not found' });
//     }
//     return updatedSong

//   } catch (err) {
//     return err;
//     // res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = {
//   getAllSongs,
//   getSongById,
//   createSong,
//   deleteSong,
//   updateSong,
// };

const db = require("../db/dbConfig.js");

//SHOW ALL ((GET))
const getAllSongs = async () => {
    try {
      const allSongs = await db.any("SELECT * FROM songs");
      return allSongs;
    } catch (error) {
      return error;
    }
};

//SHOW ONE ((GET))
const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

// CREATE (POST)
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
// DELETE (DELETE)
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

//UPDATE (PUT)
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
  updateSong
};