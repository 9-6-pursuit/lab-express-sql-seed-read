// // const { validationResult } = require('express-validator');

// const express = require("express");
// const songs = express.Router();
// const { getAllSongs, getSongById, createSong, updateSong, deleteSong } = require("../queries/songs");
// const { checkName, checkBoolean } = require("../validations/checkSongs.js");

// // INDEX - Get all songs
// songs.get("/", async (req, res) => {
//   try {
//     const allSongs = await getAllSongs();
//     res.status(200).json(allSongs);
//   } catch (error) {
//     console.error(error);
//     // res.status(500).json({ error: "Server error" });
//   }
// });

// // SHOW - Get an individual song by id
// songs.get("/:id", checkSongId, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const song = await getSongById(id);
//     if (song) {
//       res.status(200).json(song);
//     } else {
//       res.status(404).json({ error: "Song not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     // res.status(500).json({ error: "Server error" });
//   }
// });

// // CREATE - Create a new song
// songs.post("/", checkName, checkBoolean, async (req, res) => {
// //   const errors = validationResult(req);
// //   if (!errors.isEmpty()) {
// //     return res.status(400).json({ errors: errors.array() });
// //   }

//   try {
//     const { name, artist, album, time, is_favorite } = req.body;
//     const newSong = await createSong(name, artist, album, time, is_favorite);
//     res.status(201).json(newSong);
//   } catch (error) {
//     console.error(error);
//     // res.status(500).json({ error: "Server error" });
//   }
// });

// // UPDATE - Update a song by id
// songs.put("/:id", checkSongId, checkName, checkBoolean, async (req, res) => {
// //   const errors = validationResult(req);
// //   if (!errors.isEmpty()) {
// //     return res.status(400).json({ errors: errors.array() });
// //   }

//   try {
//     const { id } = req.params;
//     const { name, artist, album, time, is_favorite } = req.body;
//     const updatedSong = await updateSong(id, name, artist, album, time, is_favorite);
//     if (updatedSong) {
//       res.status(200).json(updatedSong);
//     } else {
//       res.status(404).json({ error: "Song not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     // res.status(500).json({ error: "Server error" });
//   }
// });

// // DELETE - Delete a song by id
// songs.delete("/:id", checkSongId, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedSong = await deleteSong(id);
//     if (deletedSong) {
//       res.status(200).json(deletedSong);
//     } else {
//       res.status(404).json({ error: "Song not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     // res.status(500).json({ error: "Server error" });
//   }
// });


// function checkSongId(req, res, next) {
//       const { id } = req.params;
//       if (!Number.isInteger(parseInt(id))) {
//             return res.status(400).json({ error: "Invalid song ID" });
//           }
//           next();
//         }
        
//         module.exports = songs;



const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");
const { checkName, checkBoolean } = require("../validations/checkSongs.js");

// INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    console.log(allSongs)
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
});

// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
songs.post("/", checkBoolean, checkName, async (req, res) => {
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
  if (deletedSong.id) {
    console.log("working")
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

// UPDATE
songs.put("/:id", checkName, checkBoolean,  async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  if(!updatedSong) {
      return res.status(404).json("Song not found");
}
res.status(200).json(updatedSong);
});

module.exports = songs;