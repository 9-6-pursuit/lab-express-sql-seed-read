// // const { validationResult, body, param } = require('express-validator');


// const cors = require('cors')
// const express = require('express');
// const app = express();
// app.use(cors())
// app.use(express.json())
// // const db = require('../db/dbConfig'); 
// // const playlistController = require('./playlistController');

// // app.use(express.json());

// // Route to say Welcome to Tuner
// app.get('/', (req, res) => {
//   res.send('Welcome to Tuner');
// });


// // // Route to get all playlists with their associated songs
// // // app.get('/playlists', playlistController.getAllPlaylistsWithSongs);



// // Route to get a list of all songs
// const songController = require('./controllers/songController'); // Import the songController
// app.use('/songs', songController);

// // // Route to get an individual view (show one song) by id
// // app.get('/songs/:id',
// //   param('id').isInt().toInt(),
// //   songController.getSongById
// // );

// // // Route to create a new song
// // app.post('/songs',
// //   body('name').notEmpty().trim().escape(),
// //   songController.createSong
// // );

// // // Route to delete a song by id
// // app.delete('/songs/:id',
// //   param('id').isInt().toInt(),
// //   songController.deleteSong
// // );

// // // Route to update a song by id
// // app.put('/songs/:id',
// //   param('id').isInt().toInt(),
// //   body('name').notEmpty().trim().escape(),
// //   songController.updateSong
// // );

// // Route to handle 404 Not Found
// app.get('*', (req, res) => {
//   res.status(404).send('404 Not Found');
// });

// // // Start your server
// // const port = 3000;
// // app.listen(port, () => {
// //   console.log(`Server running on http://localhost:${port}`);
// // });

// module.exports = app


// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuners App");
});

// Songs ROUTES
const songController = require("./controllers/songController.js");
app.use("/songs", songController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;