import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

export default function Album({album}) {

    const handleDelete = () => {
        axios
          .delete(`${API}/albums/${album.id}`)
          .then(() => {
            window.location.reload()
          })
          .catch((e) => console.error(e));
      };

    return( 
        <tr className="album">
            <td>
                <a className='link'href={`/albums/${album.name}`}>{album.name}</a>
            </td>
            <td>
                {album.artist}
            </td>
            <td>
                <button onClick={handleDelete}>Delete</button>
            </td>

        </tr>
      )
}
