import NewForm from "../Components/NewForm";

function New() {
  return (
    <div className="New">
      <div className="form-header">
        <h2>New Song</h2>
      </div>
      <div className="form-details">
        <NewForm />
      </div>
    </div>
  );
}

export default New;
