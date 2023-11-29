// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const RegisterUserForm = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
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
  };

  return (
    <div className="Section">
      <div className="Container">
        {submitted ? (
          <ConfirmationScreen
            name={name}
            contactNumber={contactNumber}
            gender={gender}
            email={email}
            city={city}
            onConfirm={() => resetForm()}
          />
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Input fields for user details */}
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

            {/* Input fields for password */}
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

            {/* Submit button */}
            <button type="submit">Proceed</button>
          </form>
        )}
      </div>
    </div>
  );
};

const ConfirmationScreen = ({
  name,
  contactNumber,
  gender,
  email,
  city,
  onConfirm,
}) => {
  return (
    <div className="Confirm_Button">
      <h2>Confirm Your Information</h2>
      <p>Name: {name}</p>
      <p>Contact Number: {contactNumber}</p>
      <p>Gender: {gender}</p>
      <p>Email: {email}</p>
      <p>City: {city}</p>
      {/* Include additional details as needed */}

      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

ConfirmationScreen.propTypes = {
  name: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default RegisterUserForm;
