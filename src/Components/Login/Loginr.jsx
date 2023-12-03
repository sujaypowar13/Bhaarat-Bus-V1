/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import axios from "axios";
import "./LoginStyles.css";

const Login = () => {
  const { login } = useAuth();
  const [user, setUser] = useState({})
  console.log("🚀 ~ file: Loginr.jsx:11 ~ Login ~ user:", user)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);

  let navigate = useNavigate();

  if (loggedInUser) {
    navigate("/profile");
  }
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9000/api/login", {
        email,
        password,
      });
      setUser(response.data.data.user)
      setLoggedInUser(response.data.success);
    } catch (error) {
      console.log("errrrrrrrrrr", error);
    }
    const user = { email, password };
    login(user);
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <label className="login-label">
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
