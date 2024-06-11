import { useState } from "react";
import "./Validate.css";

function Validate() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e) {
    e.preventDefault(); // Prevents the page from refreshing when the form is submitted
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(hotmail\.com|gmail\.com|outlook\.com|yahoo\.com)$/;

    if (username.length > 8) {
      setErrorUsername("");
      setUserColor("green");
    } else {
      setErrorUsername("Username must be at least 8 characters long");
      setUserColor("red");
    }

    if (emailRegex.test(email)) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail(`Email must be a valid email address`);
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be at least 8 characters long");
      setPasswordColor("red");
    }

    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("red");
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Username"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error">{errorUsername}</p>

          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Validate;
