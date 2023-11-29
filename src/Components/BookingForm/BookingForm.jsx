// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./BookingFormStyle.css";

const UserBookingForm = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [pickupBusStop, setPickupBusStop] = useState("");
  const [pickupTimeResidential, setPickupTimeResidential] = useState("");
  const [dropBusStop, setDropBusStop] = useState("");
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

    return errors;
  };

  const resetForm = () => {
    setName("");
    setContactNumber("");
    setGender("");
    setPickupBusStop("");
    setPickupTimeResidential("");
    setDropBusStop("");
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
            pickupBusStop={pickupBusStop}
            pickupTimeResidential={pickupTimeResidential}
            dropBusStop={dropBusStop}
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
              Pick Up Point:
              <select
                value={pickupBusStop}
                onChange={(e) => setPickupBusStop(e.target.value)}
                required
              >
                <option value="">Select Bus Stop</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
              </select>
            </label>

            <label>
              Pick Up Time:
              <select
                value={pickupTimeResidential}
                onChange={(e) => setPickupTimeResidential(e.target.value)}
                required
              >
                <option value="">Select Pick-up Time</option>
                <option value="4AM">4AM</option>
                <option value="5AM">5AM</option>
              </select>
            </label>

            <label>
              Drop Bus Stop:
              <select
                value={dropBusStop}
                onChange={(e) => setDropBusStop(e.target.value)}
                required
              >
                <option value="">Select Drop Bus Stop</option>
                <option value="Satara">Satara</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </label>

            {/* Add similar input fields for the remaining details */}

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
  pickupBusStop,
  pickupTimeResidential,
  dropBusStop,
  onConfirm,
}) => {
  return (
    <div className="Confirm_Button">
      <h2>Confirm Your Information</h2>
      <p>Name: {name}</p>
      <p>Contact Number: {contactNumber}</p>
      <p>Gender: {gender}</p>
      <p>Pick Up Point: {pickupBusStop}</p>
      <p>Pick Up Time: {pickupTimeResidential}</p>
      <p>Drop Bus Stop: {dropBusStop}</p>
      {/* Include additional details as needed */}

      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

ConfirmationScreen.propTypes = {
  name: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  pickupBusStop: PropTypes.string.isRequired,
  pickupTimeResidential: PropTypes.string.isRequired,
  dropBusStop: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default UserBookingForm;
