import { Link } from "react-router-dom";
import Songs from "../Components/Songs";

function Index() {
  return (
    <div className="Index">
      <div>
        <h2>Index</h2>
        <button className="btn btn-outline-success my-2 my-sm-0 button">
          <Link
            to="/songs/new"
            style={{ textDecoration: "none", color: "#fcb3c1" }}
          >
            New Song
          </Link>
        </button>
      </div>
      <Songs />
    </div>
  );
}

export default Index;
