/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Link } from 'react-router-dom';
//imported icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import "./nvbrCss.css"

//imported images
import logo from "..//..//assets/adidas1.png";
import Profile from "..//..//assets/bus1.png";

import imageToShow from "..//../assets/p2.png";

const Navbar = () => {

  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };
  //lets add the background color to the second navbar

  const [noBg, addBg] = useState("navBarTwo");
  // Helper function to check if the user is authenticated
const isAuthenticated = () => {
  const token = sessionStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
};


  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex">
      {/* <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrateFill className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Find my route</span>
          <span>Register for bus</span>
        </div>
      </div> */}

      <div className={noBg}>
        <div className="logoDiv flex">
          <img src={logo} className="Logo" />
          <h1>Bhaarat Bus</h1>
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              Home
            </li>
            <li onClick={removeNavBar} className="listItem">
              About
            </li>
            <li onClick={removeNavBar} className="listItem">
              Offers
            </li>
            <li onClick={removeNavBar} className="listItem">
              Seats
            </li>
            <li onClick={removeNavBar} className="listItem">
              Destinations
            </li>
          </ul>

          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact
          </button>
        </div>

        <button className="btn flex btnTwo">Contact</button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO />
        </div>
      </div>
    </div>
  );
};

export default Navbar;