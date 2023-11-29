// BusReserve.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const BusReserve = () => {
  const [pickupPoint, setPickupPoint] = useState("");
  const [dropPoint, setDropPoint] = useState("");
  const [roundTrip, setRoundTrip] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [outboundTime, setOutboundTime] = useState("");
  const [returnTime, setReturnTime] = useState("");

  const busTimings = {
    Pune: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
    Delhi: ["3:00 PM", "5:00 PM", "6:00 PM"],
    Punjab: ["2:00 PM", "4:00 PM", "7:00 PM"],
    // Fake timings for round trips
    RoundTripPune: ["2:00 PM", "3:00 PM", "4:00 PM"],
    RoundTripDelhi: ["7:00 PM", "8:00 PM", "9:00 PM"],
    RoundTripPunjab: ["5:00 PM", "6:00 PM", "8:00 PM"],
  };

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

    if (pickupPoint === "") {
      errors.pickupPoint = "Please select a pickup point";
    }

    if (dropPoint === "") {
      errors.dropPoint = "Please select a drop point";
    }

    if (outboundTime === "") {
      errors.outboundTime = "Please select a time for the outbound trip";
    }

    if (roundTrip && returnTime === "") {
      errors.returnTime = "Please select a time for the return trip";
    }

    return errors;
  };

  const resetForm = () => {
    setPickupPoint("");
    setDropPoint("");
    setRoundTrip(false);
    setOutboundTime("");
    setReturnTime("");
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="Section">
      <div className="Container">
        {submitted ? (
          <ConfirmationScreen
            pickupPoint={pickupPoint}
            dropPoint={dropPoint}
            outboundTime={outboundTime}
            roundTrip={roundTrip}
            returnTime={returnTime}
            onConfirm={() => resetForm()}
          />
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Pickup Point:
              <select
                value={pickupPoint}
                onChange={(e) => {
                  setPickupPoint(e.target.value);
                  setOutboundTime("");
                }}
                required
              >
                <option value="">Select Pickup Point</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
              </select>
              {errors.pickupPoint && (
                <p className="error">{errors.pickupPoint}</p>
              )}
            </label>

            <label>
              Drop Point:
              <select
                value={dropPoint}
                onChange={(e) => setDropPoint(e.target.value)}
                required
              >
                <option value="">Select Drop Point</option>
                <option value="Satara">Satara</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              {errors.dropPoint && <p className="error">{errors.dropPoint}</p>}
            </label>

            <label>
              Pick Up Time:
              <select
                value={outboundTime}
                onChange={(e) => setOutboundTime(e.target.value)}
                required
              >
                <option value="">Select Time</option>
                {busTimings[pickupPoint]?.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.outboundTime && (
                <p className="error">{errors.outboundTime}</p>
              )}
            </label>

            <label>
              Round Trip:
              <input
                type="checkbox"
                checked={roundTrip}
                onChange={() => setRoundTrip(!roundTrip)}
              />
            </label>

            {roundTrip && (
              <label>
                Return Trip Time:
                <select
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  required
                >
                  <option value="">Select Time</option>
                  {busTimings[`RoundTrip${pickupPoint}`]?.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.returnTime && (
                  <p className="error">{errors.returnTime}</p>
                )}
              </label>
            )}

            <button type="submit">Book Bus</button>
          </form>
        )}
      </div>
    </div>
  );
};

const ConfirmationScreen = ({
  pickupPoint,
  dropPoint,
  outboundTime,
  roundTrip,
  returnTime,
  onConfirm,
}) => {
  return (
    <div className="Confirm_Button">
      <h2>Confirm Your Bus Booking</h2>
      <p>Morning Trip:</p>
      <p>Pickup Point: {pickupPoint}</p>
      <p>Drop Point: {dropPoint}</p>
      <p>Selected Time: {outboundTime}</p>

      {roundTrip && (
        <>
          <p>Evening Trip:</p>
          <p>Pickup Point: {dropPoint}</p>
          <p>Drop Point: {pickupPoint}</p>
          <p>Selected Time: {returnTime}</p>
        </>
      )}

      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

ConfirmationScreen.propTypes = {
  pickupPoint: PropTypes.string.isRequired,
  dropPoint: PropTypes.string.isRequired,
  outboundTime: PropTypes.string.isRequired,
  roundTrip: PropTypes.bool.isRequired,
  returnTime: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default BusReserve;
