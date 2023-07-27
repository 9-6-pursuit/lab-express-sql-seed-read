import { Link } from "react-router-dom";
import "./NavBar.css"
export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/songs"><img src="https://media4.giphy.com/media/4T7zBzdeNEtjThYDWn/giphy.gif?cid=790b76114ee03ef7f860492a9083d77f86191a7bf340002c&rid=giphy.gif&ct=g" alt ="tuner-disk"/></Link>
      </h1>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
