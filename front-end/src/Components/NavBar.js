import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/">Tuner</Link>
      </h1>
      <button className="button">
        <Link  to="/songs/new">New Song</Link>
      </button>
      <button className="button2"> 
        <Link  to="/songs">Songs</Link>
      </button>
    </nav>
  );
}
