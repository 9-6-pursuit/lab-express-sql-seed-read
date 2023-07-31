import React, { useEffect, useState } from 'react'
import Song from './Song';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(()=>{
        axios
            .get(`${API}/songs`)
            .then((response) => setSongs(response.data))
            .catch((e) => console.error("catch", e));
    },[]);

  return (
    <div>
        <section>
            <table>
            <thead>
            <tr>
              <th>Favorite</th>
              <th>Song Name</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
                <tbody>
                    {songs.map((song)=> {
                        return <Song key={song.id} song={song} />
                    })}
                </tbody>
            </table>
        </section>
    </div>
  )
}
