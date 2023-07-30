import { Link } from 'react-router-dom'

export default function FourOFour() {
    return (
      <div>
        <h1 className="fourofour">Page not found</h1>
        <h2 className="fourofour-txt">We're sorry, we couldn't find the page you requested.</h2>
        <img className="warning" src="https://static.vecteezy.com/system/resources/previews/012/042/301/original/warning-sign-icon-transparent-background-free-png.png" alt=""></img>
        <Link className='warn-link' to="/">👉Go back to home page</Link>
      </div>
    );
  }
  