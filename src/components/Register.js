import React, { useRef, useState } from "react";
import "./Register.css";

export default function Register() {
  // --- refs --------------------------------------------------------------
  const userRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const roleRef = useRef(null);

  const genderRefs = useRef([]);
  const hobbyRefs = useRef([]);

  const snapshotRef = useRef(null);

  // --- UI control --------------------------------------------------------
  const [submitted, setSubmitted] = useState(false);
  const [, setTick] = useState(0);
  const tick = () => setTick((t) => t + 1);

  // --- choices -----------------------------------------------------------
  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const hobbies = [
    { label: "Music", value: "music" },
    { label: "Movies", value: "movies" },
    { label: "Plastic Model", value: "plastic model" },
  ];

  const roles = [
    { label: "General Staff", value: "general staff" },
    { label: "Developer", value: "developer" },
    { label: "System Analyst", value: "system analyst" },
  ];

  // --- read helpers ------------------------------------------------------
  const txt = (r) => (r && r.current ? r.current.value : "");
  const readGender = () => {
    return (genderRefs.current || [])
      .find((el) => el && el.checked)?.value || "";
  };
  const readHobbies = () =>
    (hobbyRefs.current || [])
      .filter((el) => el && el.checked)
      .map((el) => el.value);

  // --- actions -----------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    snapshotRef.current = {
      username: txt(userRef),
      firstname: txt(firstRef),
      lastname: txt(lastRef),
      gender: readGender(),
      hobbies: readHobbies(),
      role: roleRef.current ? roleRef.current.value : "",
    };
    setSubmitted(true);
  };

  const handleBack = () => setSubmitted(false);

  // --- live preview values ----------------------------------------------
  const live = {
    username: txt(userRef),
    firstname: txt(firstRef),
    lastname: txt(lastRef),
    gender: readGender(),
    hobbies: readHobbies(),
    role: roleRef.current ? roleRef.current.value : "",
  };

  // --- styles (keeps JSX lines short) ----------------------------------
  const wrap = {
    minHeight: "100vh",
    background: "#eaf4ff",
    padding: 20,
  };
  const box = {
    maxWidth: 440,
    margin: "20px auto",
    background: "#fff",
    padding: 18,
    borderRadius: 6,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };
  const label = { display: "block", margin: "8px 0" };
  const input = { width: "100%", padding: 6, marginTop: 6 };

  return (
    <div style={wrap}>
      <div style={box}>
        {!submitted ? (
          <>
            <h2 style={{ marginTop: 0 }}>Registration</h2>

            <form onSubmit={handleSubmit}>
              <label style={label}>
                Username
                <input
                  style={input}
                  type="text"
                  ref={userRef}
                  onInput={tick}
                />
              </label>

              <label style={label}>
                Firstname
                <input
                  style={input}
                  type="text"
                  ref={firstRef}
                  onInput={tick}
                />
              </label>

              <label style={label}>
                Lastname
                <input
                  style={input}
                  type="text"
                  ref={lastRef}
                  onInput={tick}
                />
              </label>

              <div style={{ margin: "10px 0" }}>
                <div style={{ fontWeight: 600 }}>Gender</div>
                {genders.map((g, i) => (
                  <label key={g.value} style={{ display: "block" }}>
                    <input
                      type="radio"
                      name="gender"
                      value={g.value}
                      ref={(el) => (genderRefs.current[i] = el)}
                      onChange={tick}
                    />{" "}
                    {g.label}
                  </label>
                ))}
              </div>

              <div style={{ margin: "10px 0" }}>
                <div style={{ fontWeight: 600 }}>Hobbies</div>
                {hobbies.map((h, i) => (
                  <label key={h.value} style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      value={h.value}
                      ref={(el) => (hobbyRefs.current[i] = el)}
                      onChange={tick}
                    />{" "}
                    {h.label}
                  </label>
                ))}
              </div>

              <div style={{ margin: "10px 0" }}>
                <div style={{ fontWeight: 600 }}>Role</div>
                <select
                  ref={roleRef}
                  onChange={tick}
                  style={{ ...input, marginTop: 6 }}
                >
                  <option value="">Select role</option>
                  {roles.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginTop: 12 }}>
                <button type="submit" style={{ padding: "8px 12px" }}>
                  Submit
                </button>
              </div>
            </form>

            <hr style={{ margin: "16px 0" }} />

            <div>
              <div>
                <strong>Username:</strong> {live.username}
              </div>
              <div>
                <strong>Firstname:</strong> {live.firstname}
              </div>
              <div>
                <strong>Lastname:</strong> {live.lastname}
              </div>
              <div>
                <strong>Gender:</strong> {live.gender}
              </div>
              <div>
                <strong>Hobbies:</strong> {live.hobbies.join(", ")}
              </div>
              <div>
                <strong>Role:</strong> {live.role}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 style={{ marginTop: 0 }}>Submitted Data</h2>
            <div>
              <div>
                <strong>Username:</strong>{" "}
                {snapshotRef.current ? snapshotRef.current.username : ""}
              </div>
              <div>
                <strong>Firstname:</strong>{" "}
                {snapshotRef.current ? snapshotRef.current.firstname : ""}
              </div>
              <div>
                <strong>Lastname:</strong>{" "}
                {snapshotRef.current ? snapshotRef.current.lastname : ""}
              </div>
              <div>
                <strong>Gender:</strong>{" "}
                {snapshotRef.current ? snapshotRef.current.gender : ""}
              </div>
              <div>
                <strong>Hobbies:</strong>{" "}
                {snapshotRef.current
                  ? snapshotRef.current.hobbies.join(", ")
                  : ""}
              </div>
              <div>
                <strong>Role:</strong>{" "}
                {snapshotRef.current ? snapshotRef.current.role : ""}
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <button onClick={handleBack} style={{ padding: "8px 12px" }}>
                Back to form
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
