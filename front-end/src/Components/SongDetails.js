import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SongDetails() {
  const [song, setSong] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(
        () => navigate(`/songs`),
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSong(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
        navigate("/not-found");
      });
  }, [id, navigate, API]);

  return (
    <>
      <article className="container Song-Details">
        <h3>
          {song.is_favorite ? <span>⭐️</span> : null} {song.name} - By{" "}
          {song.artist}
        </h3>
        <h5>{song.album}</h5>
        <h6>
          <span>Time: </span>
          {song.time}
        </h6>
      </article>
      <div className="showNavigation">
        <div>
          <button>
            <Link to={`/songs`}>Back</Link>
          </button>
        </div>

        <div>
          <button>
            <Link to={`/songs/${id}/edit`}>Edit</Link>
          </button>
        </div>
        <div>
          {" "}
          <button onClick={deleteSong}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default SongDetails;