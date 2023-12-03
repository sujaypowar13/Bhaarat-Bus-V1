/* eslint-disable no-unused-vars */
import React from "react";
import logo from "..//..//assets/adidas1.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="entireFooter">
      <div className="footer">
        <div className="sectionContainer container grid">
          <div className="gridOne">
            <div className="logoDiv">
              <img src={logo} className="Logo" />
            </div>
            <p>
              The happy bus for happy people <br />
              You will reach your destination easily.
            </p>
            <div className="socialIcon flex">
              <FaFacebookSquare className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">Navigate To</span>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Why Bhaarat Bus</a>
            </li>
            <li>
              <a href="">Bus Route</a>
            </li>

            <li>
              <a href="">Bus Timing</a>
            </li>
            <li>
              <a href="">Manage your booking</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Information</span>
            <li>
              <a href="">Quick Guide</a>
            </li>
            <li>
              <a href="">How to</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Baggage</a>
            </li>
            <li>
              <a href="">Route Map</a>
            </li>
            <li>
              <a href="">Our Communities</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">About Us</span>

            <h2>The Bhaarat Bus </h2>
            <p>
              Chembhur, Mumbai
              <br />
              Navi Mumbai. 400071
              <br />
              8530573043
            </p>
          </div>
        </div>
        <div className="copyRightDiv flex">
          <h4>
            Courtesy Design | Developed by &nbsp;
            <a href="" target="_blank">
              SujayPowar
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
