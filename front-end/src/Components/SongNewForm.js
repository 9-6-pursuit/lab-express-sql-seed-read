import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
  let navigate = useNavigate();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((error) => console.error("Error adding song:", error));
  };

  const [song, setSong] = useState({
    name: "",
    url: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={song.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          placeholder="Artist Name"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          value={song.album}
          placeholder="Album Name"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          value={song.time}
          placeholder="Song Duration"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongNewForm;
