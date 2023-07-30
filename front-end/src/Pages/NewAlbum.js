import AlbumNewForm from "../Components/AlbumNewForm";

function NewAlbum() {
  return (
    <div className="New">
      <div className="form-header">
        <h2>New Album</h2>
      </div>
      <div className="form-details">
        <AlbumNewForm />
      </div>
    </div>
  );
}

export default NewAlbum;
