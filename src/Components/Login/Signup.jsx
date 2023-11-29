// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import "./SignupStyles.css"; // Import the CSS file

const Signup = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Implement your signup logic here
    // For simplicity, we'll just set a mock user
    const user = { username: "user123" };
    login(user);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Signup</h2>
      <label className="signup-label">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        />
      </label>
      <label className="signup-label">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
      </label>
      <button onClick={handleSignup} className="signup-button">
        Signup
      </button>
    </div>
  );
};

export default Signup;
