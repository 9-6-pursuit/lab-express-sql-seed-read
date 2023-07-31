import { Link } from "react-router-dom";

function Song({ song }) { // Update prop name to "song" to match the data model
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={song.url} target="_blank" rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link> {/* Update the link path to match your songs route */}
      </td>
    </tr>
  );
}

export default Song;
