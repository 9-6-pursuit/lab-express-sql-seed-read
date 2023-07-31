import React from "react";
import { Link } from "react-router-dom";

function ErrorMsg() {
  return (
    <div className="Error" >
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      <Link to="/songs">
        <button className="error-button">Back</button>
      </Link>
    </div>
  );
}


export default ErrorMsg;
