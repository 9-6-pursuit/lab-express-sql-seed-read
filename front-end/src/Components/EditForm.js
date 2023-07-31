import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";    
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function EditForm() {
  let { index } = useParams();
  const navigate = useNavigate();
  

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  useEffect(() => {
    axios
      .get(`${API}/songs/${index}`)
      .then((response) => {
        setSong(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${index}`, updatedSong)
      .then((response) => {
        setSong(response.data);
        navigate(`/songs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };
  const handleCheckbox = () => {
    setSong({...song, is_favorite: !song.is_favorite});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song);
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
          required
          />
        </div>
        <div className="labelSection" >
          <label htmlFor="album">Album: </label>
          <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          required
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
          <label htmlFor="is_favorite">Favorite? </label>
          <input
          id="is_favorite"
          checked={song.is_favorite}
          type="checkbox"
          onChange={handleCheckbox}
          />
        </div> 
        <br />

    <input className="submit" type="submit"  value="Done"/>

      </form>

    </div>
  )
}