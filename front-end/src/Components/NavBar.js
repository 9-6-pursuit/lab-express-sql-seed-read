// NavBar.js
import { Link } from "react-router-dom";
import "./NavBar.css"; 

export default function NavBar() {
  return (
    <nav className="nav-container">
      <h1>
        <Link to="/songs">Tuner</Link>
      </h1>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}

