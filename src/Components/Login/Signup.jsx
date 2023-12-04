// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { useAuth } from "./AuthContext";
// import "./SignupStyles.css"; // Import the CSS file
// import axios from 'axios';


// const Signup = () => {
//   const { login } = useAuth();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     // Implement your signup logic here
//     // For simplicity, we'll just set a mock user
//     try {
//       // Make a POST request to your API endpoint
//       const response = await axios.post('http://localhost:5000/api/register', {username, password});

//       // Handle the response (you can customize this based on your API)
//       console.log('Response:', response.data);
//       const user = { username: "user123" };
//       login(user);
//     } catch (error) {
//       // Handle errors
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2 className="signup-heading">Signup</h2>
//       <label className="signup-label">
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="signup-input"
//         />
//       </label>
//       <label className="signup-label">
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="signup-input"
//         />
//       </label>
//       <button onClick={handleSignup} className="signup-button">
//         Signup
//       </button>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    number: '',
    location: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/signup', formData);
      // Handle successful signup (e.g., store token in local storage)
      console.log('Signup successful', response.data);
    } catch (error) {
      // Handle signup error
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="number" placeholder="Number" value={formData.number} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
