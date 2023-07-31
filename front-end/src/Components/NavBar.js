import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light">
      <h1>
        <Link className="tuner-app" to="/songs">
          Tuner APP
        </Link>
      </h1>
    </nav>
  );
}
