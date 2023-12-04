/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//imported icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import "./nvbrCss.css"

//imported images
import logo from "..//..//assets/adidas1.png";

import imageToShow from "..//../assets/p2.png";

const Navbar = () => {
  //lets remove navbar in the small screen device

  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };
  //lets add the background color to the second navbar

  const [noBg, addBg] = useState("navBarTwo");
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
        <div className="logoDiv">
          <img src={logo} className="Logo" />
        </div>

        <button className="btn flex btnTwo">Under Maintainance</button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO />
        </div>
      </div>
    </div>
  );
};

export default Navbar;