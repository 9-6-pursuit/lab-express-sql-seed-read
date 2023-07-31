import SongDetails from "../Components/SongDetails"; // Update the import to the correct details component

function Show() {
  return (
    <div className="Show">
      <h2>Song Details</h2> {/* Update the heading to indicate displaying song details */}
      <SongDetails /> {/* Update the details component name to match your details component */}
    </div>
  );
}

export default Show;
