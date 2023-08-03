import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const handleDelete = () => {
    deleteSong();
    console.log("button clicked");
  };

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
      .catch((c) => {
       console.warn("catch", c);
       navigate('/not-found');
      });
  }, [id, API]);

  return (
    <article>
      <h1>{true ? <span>🔥</span> : null}  {song.name}</h1>
      <h2>By - {song.artist}</h2>
      <h2>Album - {song.album}</h2>
      <h2>{song.time}</h2>
      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      <div>
          <button onClick={handleDelete}>Delete</button>
      </div>
      </div>
    </article>
  );
}

export default SongDetails;
