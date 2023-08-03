import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Playlist() {
  const [songs, setSongs] = useState([]);


useEffect(() => {
  axios
    .get(`${API}/songs`)
    .then((response) => setSongs(response.data))
    .catch((c) => console.warn("catch", c));
}, []);

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Playlist;
