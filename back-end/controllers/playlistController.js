// // routes/playlists.js
// const express = require('express');
// const playlists = express.Router();
// const {
//   getAllPlaylists,
//   getPlaylist,
//   createPlaylist,
//   updatePlaylist,
//   deletePlaylist,
// } = require('../queries/playlists');

// // INDEX - Get all playlists
// playlists.get('/', async (req, res) => {
//   try {
//     const allPlaylists = await getAllPlaylists();
//     res.status(200).json(allPlaylists);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // SHOW - Get an individual playlist by id
// playlists.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const playlist = await getPlaylist(id);
//     if (playlist) {
//       res.status(200).json(playlist);
//     } else {
//       res.status(404).json({ error: 'Playlist not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // CREATE - Create a new playlist
// playlists.post('/', async (req, res) => {
//   try {
//     const playlist = await createPlaylist(req.body);
//     res.status(201).json(playlist);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: 'Bad request' });
//   }
// });

// // UPDATE - Update a playlist by id
// playlists.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedPlaylist = await updatePlaylist(id, req.body);
//     if (updatedPlaylist) {
//       res.status(200).json(updatedPlaylist);
//     } else {
//       res.status(404).json({ error: 'Playlist not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // DELETE - Delete a playlist by id
// playlists.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedPlaylist = await deletePlaylist(id);
//     if (deletedPlaylist) {
//       res.status(200).json(deletedPlaylist);
//     } else {
//       res.status(404).json({ error: 'Playlist not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = playlists;
