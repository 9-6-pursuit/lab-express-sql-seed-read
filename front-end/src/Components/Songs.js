import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Bookmarks() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`) // Update the API endpoint to use /songs
      .then((response) => setSongs(response.data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this song</th>
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

export default Bookmarks;
