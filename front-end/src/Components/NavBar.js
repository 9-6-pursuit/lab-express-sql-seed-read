import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <NavLink to="/songs">Tuner</NavLink>
      </h1>
    </nav>
  );
}