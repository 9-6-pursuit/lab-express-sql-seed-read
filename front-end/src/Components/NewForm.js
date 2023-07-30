import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;


export default function NewForm() {

  const navigate = useNavigate();

  
  const addSong = (newSong) => {
      axios
      .post(`${API}/songs`, newSong)
      .then(() => {
          navigate(`/songs`);
        })
        .catch((c) => console.error("catch", c));
    };
    
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });
  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };
  
  const handleCheckbox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="labelSection" >
          <label htmlFor="name">Song Name: </label>
          <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          required
          />
        </div>
        <div className="labelSection">
          <label htmlFor="artist">Artist: </label>
          <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          
          />
        </div>
        <div className="labelSection" >
          <label htmlFor="album">Album: </label>
          <input
          id="album"
          type="text"
          value={song.album}
          onChange={handleTextChange}
          
          />
        </div>
        <div className="labelSection" >
          <label htmlFor="time">Time: </label>
          <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          />
        </div> 
        <div className="checkbox" >
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckbox}
          checked={song.is_favorite}
        />
        </div> 
        <br />

    <input className="submit" type="submit" />

      </form>

    </div>
  )
}
