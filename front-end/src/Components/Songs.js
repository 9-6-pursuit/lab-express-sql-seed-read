import axios from "axios";
import { useState, useEffect } from "react";

import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  console.log("this is Songs")
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)

      .then((response) => {
        console.log(response.data);
        setSongs(response.data)
      })

      .catch((c) => {
        console.warn("catch", c);
      });
  }, []);
  
  return (
    <div className="Songs">
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

export default Songs;
