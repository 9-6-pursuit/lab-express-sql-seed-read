import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    url: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(() => {
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.error("Error updating song:", error));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setSong(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song);
  };

  return (
    <div className="Edit">
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
      <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
