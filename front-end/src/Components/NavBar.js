import { Link } from "react-router-dom";

export default function NavBar() {
  console.log("This is the NavBar")
  return (
    <nav>
      <h1>
        <Link to="/songs">Songs</Link>
      </h1>
      <button>
        <Link to="/Songs/new">New Song</Link>
      </button>
    </nav>
  );
}
