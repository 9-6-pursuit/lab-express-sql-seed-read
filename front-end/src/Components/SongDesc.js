import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL; 

export default function SongDesc() {
  const [song, setSongs] = useState([]);

  const { index } = useParams();
  let navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`${API}/songs/${index}`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${index}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((e) => console.error(e));
  };
  

  return (
    <div>
      <div className='bigBox'>

        <h3>{song.name} - {song.artist}</h3>

        <h4>Album: <span style={{fontWeight:"normal"}}>{song.album}</span></h4>
        <p> <span style={{fontWeight:"bold"}}>Time:</span> {song.time}</p>
        <p style={{fontWeight:"bold"}}>Favorite:
        {song.is_favorite ? " ✅" : " 👎" }</p>
      </div>

        <div className="showNavigation">
          <div className=''>
            {" "}
            <Link className='' to={`/songs`}>
              <button className='navButton'>Back</button>
            </Link>
          </div>
          <div className=''>
            {" "}
            <Link to={`/songs/${index}/edit`}>
              <button className='navButton'>Edit</button>
            </Link>
          </div>
          <div className=''>
            {" "}
            <button className='navButton' onClick={handleDelete}>Delete</button>
          </div>
      </div>
    </div>
  )


}
