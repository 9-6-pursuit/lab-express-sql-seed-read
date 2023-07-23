import { Link } from "react-router-dom"

import './Navbar.css'

export default function NavBar() {
  return (
    <nav>
        <div>
            <Link to='/'>Home</Link>
        </div>
        <div>
            <Link to='/songs'>Songs</Link>
        </div>
        <div>
            <Link to='/songs/new'>New</Link>
        </div>
    </nav>
  )
}
