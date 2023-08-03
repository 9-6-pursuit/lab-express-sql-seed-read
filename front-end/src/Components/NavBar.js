import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/songs">🎶</Link>
      </h1>
      <h1>Tuner App</h1>
      <button>
        <Link to="/songs/new">Add To Playlist</Link>
      </button>
    </nav>
  );
}
