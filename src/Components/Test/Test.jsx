/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> 0bfd5974ae67610230abfb42f799c110afc8ae43
import "./TestStyle.css";

const Test = () => {
  const [name, setName] = useState("");
  const [number, setnumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    gender: "",
    location: "",
    name: "",
    number: "",
    password: "",
    user_id: '',
  });

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

    // Add your validation logic here

    return errors;
  };

  const signupUser = async () => {
    try {
      const response = await axios.post("http://localhost:9000/api/register", {
        name,
        email,
        number,
        gender,
        city,
        password,
        confirmPassword: password,
      });
      setUser(response.data.data.user);
    } catch (error) {
      console.log("aaaaaaaaaaaaa", error);
    }
  };

  const resetForm = () => {
    setName("");
    setnumber("");
    setGender("");
    setEmail("");
    setCity("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
    setSubmitted(false);
    closeConfirmModal();
  };

  return (
    <div className="Section">
      <div className="Container">
        {submitted ? (
          <ConfirmationScreen
            name={name}
<<<<<<< HEAD
            contactNumber={contactNumber}
=======
            number={number}
>>>>>>> 0bfd5974ae67610230abfb42f799c110afc8ae43
            gender={gender}
            email={email}
            city={city}
            onLogout={() => resetForm()}
            onUpdateData={() => {}}
            onChangeMobileNumber={() => {}}
          />
        ) : (
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
<<<<<<< HEAD
                value={contactNumber}
                pattern="[0-9]{10}"
                maxLength="10"
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
              {errors.contactNumber && (
                <p className="error">{errors.contactNumber}</p>
              )}
=======
                value={number}
                pattern="[0-9]{10}"
                maxLength="10"
                onChange={(e) => setnumber(e.target.value)}
                required
              />
              {errors.number && <p className="error">{errors.number}</p>}
>>>>>>> 0bfd5974ae67610230abfb42f799c110afc8ae43
            </label>

            <label>
              Gender:
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select</option>
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
        )}

        {/* Confirm Modal */}
        <Modal
          isOpen={isConfirmModalOpen}
          onRequestClose={closeConfirmModal}
          contentLabel="Confirm Modal"
        >
          <h2>Confirm Your Details</h2>
          <p>Name: {name}</p>
          <p>Contact Number: {number}</p>
          <p>Gender: {gender}</p>
          <p>Email: {email}</p>
          <p>City: {city}</p>
          {/* Include additional details as needed */}
          <button
            onClick={() => {
<<<<<<< HEAD
=======
              signupUser();
>>>>>>> 0bfd5974ae67610230abfb42f799c110afc8ae43
              setSubmitted(true);
              closeConfirmModal();
            }}
          >
            Confirm
          </button>
          <button onClick={closeConfirmModal}>Cancel</button>
        </Modal>
      </div>
    </div>
  );
};

<<<<<<< HEAD
const ConfirmationScreen = ({
  name,
  contactNumber,
=======
export const ConfirmationScreen = ({
  name,
  number,
>>>>>>> 0bfd5974ae67610230abfb42f799c110afc8ae43
  gender,
  email,
  city,
  onLogout,
  onUpdateData,
  onChangeMobileNumber,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="Account_Section">
      <div className="Account_Header">
        <h2>Welcome, {name}!</h2>
        <div className="Mobile_Menu_Icon" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>
      <h5 className="RunningText">
        Your account has been created successfully.
      </h5>
      <div className="Confirmation_Details">
        <div className="UserDataFilled">
<<<<<<< HEAD
          <p>Contact Number: {contactNumber}</p>
=======
          <p>Contact Number: {number}</p>
>>>>>>> 0bfd5974ae67610230abfb42f799c110afc8ae43
          <p>Gender: {gender}</p>
          <p>Email: {email}</p>
          <p>City: {city}</p>
        </div>
      </div>
      <div className="Account_Buttons">
        <button onClick={onLogout}>Logout</button>
        <button onClick={onUpdateData}>Update Your Data</button>
        <button onClick={onChangeMobileNumber}>Change Mobile Number</button>
      </div>
      {isMobileMenuOpen && <MobileMenu onClose={closeMobileMenu} />}
    </div>
  );
};

const MobileMenu = ({ onClose }) => {
  const handleOptionClick = (option) => {
    // Add logic for handling menu option click
    console.log(`Clicked on ${option}`);
    onClose();
  };

  return (
    <div className="Mobile_Menu">
      <div className="Mobile_Menu_Close" onClick={onClose}>
        ✕
      </div>
      <div className="Mobile_Menu_Options">
        <button onClick={() => handleOptionClick("Book an Instant Bus")}>
          Book an Instant Bus
        </button>
        <button onClick={() => handleOptionClick("View Your Past Rides")}>
          View Your Past Rides
        </button>
        <button onClick={() => handleOptionClick("Schedule a Trip")}>
          Schedule a Trip
        </button>
        <button onClick={() => handleOptionClick("Suggest a Route")}>
          Suggest a Route
        </button>
        {/* Add other menu options as buttons */}
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

ConfirmationScreen.propTypes = {
  name: PropTypes.string.isRequired,
<<<<<<< HEAD
  contactNumber: PropTypes.string.isRequired,
=======
  number: PropTypes.string.isRequired,
>>>>>>> 0bfd5974ae67610230abfb42f799c110afc8ae43
  gender: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  onUpdateData: PropTypes.func.isRequired,
  onChangeMobileNumber: PropTypes.func.isRequired,
};

export default Test;
