// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import "./SignupStyles.css"; // Import the CSS file
import axios from 'axios';


const Signup = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    // Implement your signup logic here
    // For simplicity, we'll just set a mock user
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post('http://localhost:9000/api/register', {username, password});

      // Handle the response (you can customize this based on your API)
      console.log('Response:', response.data);
      const user = { username: "user123" };
      login(user);
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
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
