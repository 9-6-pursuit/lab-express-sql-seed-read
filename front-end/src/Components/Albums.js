import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Album from './Album';

const API = process.env.REACT_APP_API_URL;

export default function Albums() {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        axios
            .get(`${API}/albums`)
            .then((response) => setAlbums(response.data))
            .catch((e) => console.error("catch", e));
    },[]);

  return (
    <div>
    <section>
        <table>
        <thead>
        <tr>
          <th>Album</th>
          <th>Artist</th>
          <th></th>
        </tr>
      </thead>
            <tbody>
                {albums.map((album)=> {
                    return <Album key={album.id} album={album} />
                })}
            </tbody>
        </table>
    </section>
</div>
  )
}
