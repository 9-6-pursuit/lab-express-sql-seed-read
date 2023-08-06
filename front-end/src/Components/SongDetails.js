import { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
  }, [id, navigate]);
  
  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteSong();
  };

// Further down inside the component

  return (
    <article>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name} By {song.artist}
      </h3>
      <h6>{song.album}</h6>
      <p> Time: {song.time}</p>
      <div className="showNavigation">
        <div>
          {" "}
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