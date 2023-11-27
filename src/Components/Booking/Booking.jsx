/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./booking.css";

const Booking = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [morningPickup, setMorningPickup] = useState("");
  const [morningDrop, setMorningDrop] = useState("");
  const [eveningPickup, setEveningPickup] = useState("");
  const [eveningDrop, setEveningDrop] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [showBusSearch, setShowBusSearch] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedPlan(null);
    setShowWarning(false);
    setShowBusSearch(false);
    // Reset pick-up and drop points when trip type changes
    setMorningPickup("");
    setMorningDrop("");
    setEveningPickup("");
    setEveningDrop("");
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowWarning(true);
  };

  const handleProceed = () => {
    // Handle the logic for proceeding based on the selected option and plan
    console.log(`Proceeding with ${selectedOption} and ${selectedPlan} plan`);
    setShowBusSearch(true);
  };

  return (
    <div className="cab-booking-form">
      <h2>Select Your Trip</h2>
      <div className="options">
        <button
          onClick={() => handleOptionSelect("Round Trip")}
          className={selectedOption === "Round Trip" ? "selected" : ""}
        >
          Round Trip
        </button>
      </div>

      {selectedOption === "Round Trip" && (
        <div className="plan-options">
          <h3>Select Your Plan</h3>
          <div className="plan-buttons">
            <button
              onClick={() => handlePlanSelect("Monthly")}
              className={selectedPlan === "Monthly" ? "selected" : ""}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => handlePlanSelect("Weekly")}
              className={selectedPlan === "Weekly" ? "selected" : ""}
            >
              Weekly Plan
            </button>
          </div>
          {showWarning && (
            <div className="warning">
              {selectedPlan === "Monthly" ? (
                <p>Warning: You will get 40 rides in 20 working days.</p>
              ) : (
                <p>Warning: You will get 10 rides within 5 working days.</p>
              )}
            </div>
          )}
        </div>
      )}

      <button
        onClick={handleProceed}
        disabled={!selectedOption || !selectedPlan}
      >
        Proceed
      </button>

      {showBusSearch && (
        <div className="bus-search">
          <h3>Select Your Pick-up and Drop Points</h3>
          <div className="morning-ride">
            <p>Morning Ride:</p>
            <div className="form-group">
              <label>Pick-up Point:</label>
              <input
                type="text"
                value={morningPickup}
                onChange={(e) => setMorningPickup(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Drop Point:</label>
              <input
                type="text"
                value={morningDrop}
                onChange={(e) => setMorningDrop(e.target.value)}
              />
            </div>
          </div>

          <div className="evening-ride">
            <p>Evening Ride:</p>
            <div className="form-group">
              <label>Pick-up Point:</label>
              <input
                type="text"
                value={eveningPickup}
                onChange={(e) => setEveningPickup(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Drop Point:</label>
              <input
                type="text"
                value={eveningDrop}
                onChange={(e) => setEveningDrop(e.target.value)}
              />
            </div>
          </div>

          <button onClick={() => console.log("Search Bus")}>Search Bus</button>
        </div>
      )}
    </div>
  );
};

export default Booking;
