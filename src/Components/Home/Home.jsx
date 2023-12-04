/* eslint-disable no-unused-vars */
import React from "react";
//imported assets
import video from "..//..//assets/vdo4.mp4";
import bus from "..//../assets/bus4.png";
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home flex container">
      <div className="Section_Home">
        <div className="space">Bhaarat Bus</div>
        <h4>
          We make your ride to work <br /> stress-free, Comfortable, express bus rides
          from your home to office
        </h4>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>

        <img src={bus} className="plane" />
      </div>
    </div>
    </>
  );
};

export default Home;
