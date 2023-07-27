import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SongDetails() {
  const [song, setSong] = useState([]);
  let { index } = useParams();
  // let index = useParams().index
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/playlists/${index}`)
      .then((response) => {
        setSong(response.data);
      })
      .catch((error) => navigate(`/not-found`));
  }, [index, navigate, API]);

  const deleteSong = () => {
    axios
      .delete(`${API}/playlists/${index}`)
      .then(() => {
        navigate(`/playlists`); ////playlists
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteSong();
  };
  return (
    <>
      <article className="container song-details">
        <h3>
          {song.is_favourite ? <span>💥</span> : null} {song.id} - By{" "}
          {song.name}
        </h3>
        <h5>{song.category}</h5>
        <h6>
          <span>URL: </span>
          {song.url}
        </h6>
        <p>{song.description}</p>
      </article>
      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            {" "}
            <button>Back</button>
          </Link>
        </div>

        <div>
          <Link to={`/songs/${index}/edit`}>
            {" "}
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default SongDetails;
