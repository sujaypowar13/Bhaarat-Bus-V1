/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import "./LoginStyles.css";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, we'll just set a mock user
    const user = { username: "user123" };
    login(user);
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <label className="login-label">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
      </label>
      <label className="login-label">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
      </label>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
