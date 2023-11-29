/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import Login from "../Login/Loginr"; // Import Login component
import Signup from "../Login/Signup"; // Import Signup component

const Search = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const loginRef = useRef(null);
  const signupRef = useRef(null);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  const handleClickOutside = (event) => {
    if (
      loginRef.current &&
      !loginRef.current.contains(event.target) &&
      signupRef.current &&
      !signupRef.current.contains(event.target)
    ) {
      // Clicked outside of both Login and Signup components
      setActiveComponent(null);
    }
  };

  useEffect(() => {
    // Attach click event listener to handle clicks outside of components
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div
            className={`singleBtn ${activeComponent === "signup" && "active"}`}
            onClick={() => handleComponentChange("signup")}
          >
            <span>Signup</span>
          </div>

          <div
            className={`singleBtn ${activeComponent === "login" && "active"}`}
            onClick={() => handleComponentChange("login")}
          >
            <span>Login</span>
          </div>

          <div className="singleBtn">
            <span>Bus Schedule</span>
          </div>
        </div>

        {/* Render the appropriate component based on the activeComponent state */}
        {activeComponent === "login" && (
          <div ref={loginRef}>
            <Login />
          </div>
        )}
        {activeComponent === "signup" && (
          <div ref={signupRef}>
            <Signup />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
