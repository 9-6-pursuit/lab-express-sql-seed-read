import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then(
        (response) => {
          console.log("response.data:")
          console.log(response.data)
          setSongs(response.data);
        },
        (err) => console.error(err)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div>
      <section>
        <table className="Songs">
          <thead>
            <tr>
              <th>Fav</th>
              <th>Song</th>
              <th>Arist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} id={song.id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;