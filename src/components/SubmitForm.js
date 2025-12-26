import React from "react";

function SubmitForm() {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Submitted Data</h3>

      <div>Username: demo</div>
      <div>Firstname: demo</div>
      <div>Lastname: demo</div>
      <div>Gender: demo</div>
      <div>Hobbies: demo</div>
      <div>Role: demo</div>

      <br />
      <button onClick={() => window.history.back()}>
        Back to form
      </button>
    </div>
  );
}

export default SubmitForm;
