import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <h1>
        <Link to="/songs">TUNER APP</Link>
      </h1>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
