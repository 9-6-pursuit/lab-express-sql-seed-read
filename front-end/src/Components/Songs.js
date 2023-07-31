import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  const queryParams = useQuery();
  const orderParam = queryParams.get("order");
  const booleanParam = queryParams.get("is_favorite");

  useEffect(() => {
    axios
      .get(`${API}/songs`, {
        params: {
          order: orderParam,
          is_favorite: booleanParam,
        },
      })
      .then((response) => setSongs(response.data))
      .catch((error) => console.warn("catch", error));
  }, [orderParam, booleanParam]);

  return (
    <div className="Songs">
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Fav</th>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Name</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr
                key={song.id}
                className={index % 2 === 0 ? "row-even" : "row-odd"}
              >
                <td>
                  {song.is_favorite ? (
                    <span>⭐️</span>
                  ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                  )}
                </td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.name}</td>
                <td>{song.time}</td>
                <td>
                  <Link to={`/songs/${song.id}`}>more info</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
