const express = require("express");
const {getAlbum, collectSongs, getAllAlbums, createAlbum, deleteAlbum} = require("../queries/albums");
const { checkName } = require("../validations/checkSongs");
const albums = express.Router({mergeParams: true});

//INDEX
albums.get("/", async (req, res) => {
  const allAlbums = await getAllAlbums();
  console.log(allAlbums)
  if (allAlbums[0]) {
    res.status(200).json(allAlbums);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  const album = await getAlbum(id);
  if (album) {
    res.json(album);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
albums.post("/", checkName, async (req, res) => {
  try {
    const album = await createAlbum(req.body);
    res.json(album);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
albums.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAlbum = await deleteAlbum(id);
  if (deletedAlbum.id) {
    res.status(200).json(deletedAlbum);
  } else {
    res.status(404).json("Album not found");
  }
});

//COLLECT
albums.get('/:id/songs', async (req, res) =>{
  const {id} = req.params;

  const all = await collectSongs(id);
  if(all){
    console.log(all)
    res.json(all)
  }else{
    res.status(404).json({error:"not found"})
  }
})



// }
module.exports = albums;