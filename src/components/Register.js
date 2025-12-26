import { useState } from "react";
import "./Register.css";

function Register() {
  const [submitted, setSubmitted] = useState(false);

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const hobbyOptions = ["music", "movies", "plastic model"];

  const toggleHobby = (value) => {
    setHobbies((prev) =>
      prev.includes(value)
        ? prev.filter((h) => h !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="form-box">
      {!submitted ? (
        <>
          <h3>Register</h3>

          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />

          <label>Firstname</label>
          <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />

          <label>Lastname</label>
          <input value={lastname} onChange={(e) => setLastname(e.target.value)} />

          <h4>Gender</h4>
          <label>
            <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
            Female
          </label>
          <label>
            <input type="radio" name="gender" value="other" onChange={(e) => setGender(e.target.value)} />
            Other
          </label>

          <h4>Hobbies</h4>
          {hobbyOptions.map((h) => (
            <label key={h}>
              <input type="checkbox" value={h} onChange={() => toggleHobby(h)} />
              {h}
            </label>
          ))}

          <h4>Role</h4>
          <select onChange={(e) => setRole(e.target.value)}>
            <option value="">Select role</option>
            <option value="general staff">General Staff</option>
            <option value="developer">Developer</option>
            <option value="system analyst">System Analyst</option>
          </select>

          <br /><br />
          <button onClick={() => setSubmitted(true)}>Submit</button>
        </>
      ) : (
        <>
          <h3>Submitted Data</h3>
          <div>Username: {username}</div>
          <div>Firstname: {firstname}</div>
          <div>Lastname: {lastname}</div>
          <div>Gender: {gender}</div>
          <div>Hobbies: {hobbies.join(", ")}</div>
          <div>Role: {role}</div>

          <br />
          <button onClick={() => setSubmitted(false)}>Back</button>
        </>
      )}
    </div>
  );
}

export default Register;
