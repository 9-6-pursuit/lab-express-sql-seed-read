import { Link } from "react-router-dom"

import './Navbar.css'

export default function NavBar() {
  return (
    <nav>
      <div>

      </div>
        <div >
            <Link to='/' className="navLink">Home</Link>
        </div>
        <div >
            <Link to='/songs' className="navLink">Songs</Link>
        </div>
        <div>
            <Link to='/albums' className="navLink">Albums</Link>
        </div>
        <div >
            <Link to='/songs/new' className="navLink">Add a Song</Link>
        </div>
        <div >
            <Link to='/albums/new' className="navLink">Add an Album</Link>
        </div>
        <div>

        </div>
    </nav>
  )
}
