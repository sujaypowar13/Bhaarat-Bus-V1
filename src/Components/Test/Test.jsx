/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

const Test = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const openConfirmModal = () => setConfirmModalOpen(true);
  const closeConfirmModal = () => setConfirmModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      openConfirmModal();
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = "Name should only contain alphabets";
    }

    if (!/^\d{10}$/.test(contactNumber)) {
      errors.contactNumber = "Contact number should be 10 digits";
    }

    if (gender !== "male" && gender !== "female") {
      errors.gender = "Please select a valid gender";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!/^[a-zA-Z\s]+$/.test(city)) {
      errors.city = "City should only contain alphabets";
    }

    if (password.length < 6) {
      errors.password = "Password should be at least 6 characters";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const resetForm = () => {
    setName("");
    setContactNumber("");
    setGender("");
    setEmail("");
    setCity("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
    setSubmitted(false);
    closeConfirmModal(); // Close the confirm modal when resetting the form
  };

  return (
    <div className="Section">
      <div className="Container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </label>

          <label>
            Contact Number:
            <input
              type="tel"
              value={contactNumber}
              pattern="[0-9]{10}"
              maxLength="10"
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
            {errors.contactNumber && (
              <p className="error">{errors.contactNumber}</p>
            )}
          </label>

          <label>
            Gender:
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className="error">{errors.gender}</p>}
          </label>

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>

          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </label>

          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </label>

          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </label>

          <button type="submit">Proceed</button>
        </form>

        {/* Confirm Modal */}
        <Modal
          isOpen={isConfirmModalOpen}
          onRequestClose={closeConfirmModal}
          contentLabel="Confirm Modal"
        >
          <h2>Confirm Your Details</h2>
          <p>Name: {name}</p>
          <p>Contact Number: {contactNumber}</p>
          <p>Gender: {gender}</p>
          <p>Email: {email}</p>
          <p>City: {city}</p>
          {/* Include additional details as needed */}
          <button onClick={() => { setSubmitted(true); closeConfirmModal(); }}>Confirm</button>
          <button onClick={closeConfirmModal}>Cancel</button>
        </Modal>

        {submitted && (
          <ConfirmationScreen
            name={name}
            onConfirm={() => resetForm()}
          />
        )}
      </div>
    </div>
  );
};

const ConfirmationScreen = ({ name, onConfirm }) => {
  return (
    <div className="Confirm_Button">
      <h2>Welcome, {name}!</h2>
      <p>Your account has been created successfully.</p>
      <button onClick={onConfirm}>Logout</button>
    </div>
  );
};

ConfirmationScreen.propTypes = {
  name: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Test;
