import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Album from './Album';
import Song from './Song';

const API = process.env.REACT_APP_API_URL;

export default function AlbumInfo() {
    const [album, setAlbum] = useState([]);

    const { index } = useParams();
    let navigate = useNavigate();
  
    useEffect(() => {
        axios
          .get(`${API}/albums/${index}/songs`)
          .then((response) => {
            console.log(response.data)
            setAlbum(response.data);
          })
          .catch(() => {
            navigate("/not-found");
          });
      }, [index, navigate]);
  return (
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
                {album.map((song)=> {
                    return <Song key={song.id} song={song} />
                })}
            </tbody>
        </table>
    </section>
  )
}
