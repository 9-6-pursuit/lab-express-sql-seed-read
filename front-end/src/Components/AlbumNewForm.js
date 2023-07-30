import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Form.css'

const API = process.env.REACT_APP_API_URL;

export default function AlbumNewForm() {

    const navigate = useNavigate();

    const addAlbum = (newAlbum) => {
        axios
        .post(`${API}/albums`, newAlbum)
        .then(() => {
            navigate(`/albums`);
          })
          .catch((c) => console.error("catch", c));
      };
      
      const [album, setAlbum] = useState({
          album_name: "",
          artist: "",
      });

    const handleTextChange = (event) => {
      setAlbum({ ...album, [event.target.id]: event.target.value });
    };
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addAlbum(album);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="labelSection" >
            <label htmlFor="name">Album Name: </label>
            <input
            id="name"
            value={album.name}
            type="text"
            onChange={handleTextChange}
            required
            />
          </div>
          <div className="labelSection">
            <label htmlFor="artist">Artist: </label>
            <input
            id="artist"
            value={album.artist}
            type="text"
            onChange={handleTextChange}
            
            />
          </div>

          <br />
  
      <input className="submit" type="submit" />
  
        </form>
  
      </div>
    )
}
