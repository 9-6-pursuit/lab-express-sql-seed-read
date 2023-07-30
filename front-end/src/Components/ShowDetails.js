import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ShowDetails() {
  const [song, setSong] = useState([]);
  const API = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  let navigate = useNavigate();

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

  return (
    <article className="article">
      <div className="front">
        <h3>
          {song.is_favorite ? <span>⭐️</span> : null} Album: {song.album}
        </h3>
        {/* Add an image on the front side */}
        {/* <img src="path_to_your_image.jpg" alt="Album Cover" /> */}
      </div>
      <div className="back">
        {/* Add content on the back side */}
        {/* <img src="path_to_your_image.jpg" alt="Album Cover" /> */}
        <h5>Name: {song.name}</h5>
        <h6>Artist: {song.artist}</h6>
        <p>Duration: {song.time}</p>
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
            <button onClick={deleteSong}>Delete</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ShowDetails;
