// SelectPlan.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./selectplaneStyle.css";

const SelectPlan = ({ onProceed }) => {
  const [selectedTripType, setSelectedTripType] = useState(null);
  const [selectedPlanType, setSelectedPlanType] = useState(null);

  const handleTripTypeSelection = (tripType) => {
    setSelectedTripType(tripType);
    setSelectedPlanType(null); // Reset selected plan when trip type changes
  };

  const handlePlanSelection = (planType) => {
    setSelectedPlanType(planType);
  };

  const handleProceed = () => {
    onProceed(selectedTripType, selectedPlanType);
  };

  const getPlanDescription = () => {
    if (selectedPlanType === "monthly") {
      return "40 Rides (20 working days)";
    } else if (selectedPlanType === "weekly") {
      return "10 Rides (5 working days)";
    }
    return "";
  };

  return (
    <div className="Section">
      <div className="SelectPlan">
        <h2>Select Your Plan</h2>

        <div className="TripTypeButtons">
          <button
            className={selectedTripType === "roundTrip" ? "active" : ""}
            onClick={() => handleTripTypeSelection("roundTrip")}
          >
            Round Trip
          </button>
          <button
            className={selectedTripType === "oneWay" ? "active" : ""}
            onClick={() => handleTripTypeSelection("oneWay")}
          >
            One Way
          </button>
        </div>

        {selectedTripType && (
          <div className="PlanBoxes">
            <div
              className={`PlanBox ${
                selectedTripType === "roundTrip" ? "visible" : ""
              }`}
            >
              <p>{getPlanDescription()}</p>
              <button
                onClick={() => handlePlanSelection("monthly")}
                disabled={selectedPlanType === "monthly"}
              >
                Monthly Plan
              </button>
            </div>
            <div
              className={`PlanBox ${
                selectedTripType === "oneWay" ? "visible" : ""
              }`}
            >
              <p>{getPlanDescription()}</p>
              <button
                onClick={() => handlePlanSelection("weekly")}
                disabled={selectedPlanType === "weekly"}
              >
                Weekly Plan
              </button>
            </div>
          </div>
        )}

        {selectedTripType && selectedPlanType && (
          <div className="ProceedButton">
            <button onClick={handleProceed}>Proceed</button>
          </div>
        )}
      </div>
    </div>
  );
};

SelectPlan.propTypes = {
  onProceed: PropTypes.func.isRequired,
};

export default SelectPlan;
