import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light">
      <h1>
        <Link className="tuner-app" to="/songs">
          Tuner APP
        </Link>
      </h1>
      <button className="btn btn-outline-success my-2 my-sm-0 button">
        <Link to="/songs/new" style={{ textDecoration: "none", color: "#fcb3c1" }}>
          New Song
        </Link>
      </button>
    </nav>
  );
}
