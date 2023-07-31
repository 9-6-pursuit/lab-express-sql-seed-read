import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const handleDelete = () => {
    deleteSong();
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
      });
  }, [id, API]);


  return (
    <article>
      <h3>{true ? <span>⭐️</span> : null} {song.name}</h3>
      {/* <h5>
        <span>
          <a href={song.url}>{song.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {song.url}
      </h5> */}
      <h6>{song.artist}</h6>
      <p>{song.album}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/song`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/id/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <Reviews />
    </article>
  );
}


export default SongDetails;
