import SongNewForm from "../Components/SongNewForm"; 

function New() {
  return (
    <div className="New">
      <h2>New Song</h2> {/* Update the heading to indicate creating a new song */}
      <SongNewForm /> {/* Update the form component name to match your form */}
    </div>
  );
}

export default New;
