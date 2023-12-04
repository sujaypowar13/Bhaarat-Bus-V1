// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./UIX.css";

const UI = () => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  // State variables for additional sections
  // eslint-disable-next-line no-unused-vars
  const [accountInfo, setAccountInfo] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
  });
  const [changeInfo, setChangeInfo] = useState({
    newName: "",
    newNumber: "",
    newGender: "",
    newMobileNumber: "",
  });
  const [pastDetails, setPastDetails] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the form data to pastDetails
    const newDetail = { name, number, gender, mobileNumber };
    setPastDetails([...pastDetails, newDetail]);

    // Clear the form inputs after submission
    setName("");
    setNumber("");
    setGender("");
    setMobileNumber("");
  };

  // Function to handle updating account information
  const handleUpdateAccount = () => {
    // Add your logic for updating account information
    console.log("Account information updated:", changeInfo);
    // You can update accountInfo state as needed
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">
            {/* Dropdown */}
            <div className="dropdown">
              <button className="dropdown-btn">Dropdown</button>
              <div className="dropdown-content">
                <p>Option 1</p>
                <p>Option 2</p>
                <p>Option 3</p>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      {/* User Form */}
      <section className="account-section">
        <h2>My Account</h2>
        <p>Username: {accountInfo.username}</p>
        <p>Email: {accountInfo.email}</p>
      </section>

      <section className="change-info-section">
        <h2>Change Your Info</h2>
        <label>
          New Name:
          <input
            type="text"
            value={changeInfo.newName}
            onChange={(e) =>
              setChangeInfo({ ...changeInfo, newName: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          New Number:
          <input
            type="text"
            value={changeInfo.newNumber}
            onChange={(e) =>
              setChangeInfo({ ...changeInfo, newNumber: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          New Gender:
          <select
            value={changeInfo.newGender}
            onChange={(e) =>
              setChangeInfo({ ...changeInfo, newGender: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          New Mobile Number:
          <input
            type="text"
            value={changeInfo.newMobileNumber}
            onChange={(e) =>
              setChangeInfo({ ...changeInfo, newMobileNumber: e.target.value })
            }
          />
        </label>
        <br />
        <button onClick={handleUpdateAccount}>Update Account</button>
      </section>

      <section className="past-details-section">
        <h2>Manage Past Details</h2>
        <ul className="past-details-list">
          {pastDetails.map((detail, index) => (
            <li key={index} className="past-details-item">
              Name: {detail.name}, Number: {detail.number}, Gender:{" "}
              {detail.gender}, Mobile Number: {detail.mobileNumber}
            </li>
          ))}
        </ul>
      </section>

      {/* User Form */}
      <section className="user-form-section">
        <h2>User Form</h2>
        <form className="user-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Number:
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <br />
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />
          <label>
            Mobile Number:
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default UI;
