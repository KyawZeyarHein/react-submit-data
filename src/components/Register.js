import { useState } from "react";
import "./Register.css";

function Register() {
  // choices from arrays
  const genders = ["male", "female", "other"];
  const hobbiesList = ["music", "movies", "plastic model"];
  const roles = [
    { value: "general staff", label: "General Staff" },
    { value: "developer", label: "Developer" },
    { value: "system analyst", label: "System Analyst" },
  ];

  // states
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");

  // checkbox handler
  const onHobbyChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((h) => h !== value));
    }
  };

  return (
    <div className="form-box">
      <h3>Username</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <h3>Firstname</h3>
      <input
        type="text"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <h3>Lastname</h3>
      <input
        type="text"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />

      <h3>Gender</h3>
      <div className="section">
        {genders.map((g) => (
          <div key={g}>
            <label>
              <input
                type="radio"
                name="gender"
                value={g}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              {g}
            </label>
          </div>
        ))}
      </div>

      <h3>Hobbies</h3>
      <div className="section">
        {hobbiesList.map((h) => (
          <div key={h}>
            <label>
              <input
                type="checkbox"
                value={h}
                onChange={onHobbyChange}
              />{" "}
              {h}
            </label>
          </div>
        ))}
      </div>

      <h3>Role</h3>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select role</option>
        {roles.map((r) => (
          <option key={r.value} value={r.value}>
            {r.label}
          </option>
        ))}
      </select>

      <hr />

      <div className="output">
        <div>Username: {username}</div>
        <div>Firstname: {firstname}</div>
        <div>Lastname: {lastname}</div>
        <div>Gender: {gender}</div>
        <div>Hobbies: {hobbies.join(", ")}</div>
        <div>Role: {role}</div>
      </div>
    </div>
  );
}

export default Register;
