/* eslint-disable no-unused-vars */
import React from "react";
import image1 from "..//..//assets/SR1.jpg";
import image2 from "..//..//assets/SR2.jpg";
import image3 from "..//..//assets/SR3.jpg";
import image4 from "..//..//assets/SR4.jpeg";
import image5 from "..//..//assets/SR5.jpeg";
import image6 from "..//..//assets/SR6.jpeg";

//importing images

const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="tittlesDiv">
          <small>Travel Support</small>
          <h2>The Bhaarat Bus Experience</h2>
          <p>
            Find help with booking and travel plans, see what to expect along
            the journey!
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="support_feature">
              <div className="imgDiv">
                <img src={image1} alt="" />
              </div>

              <div className="singleInfo">
                <span className="number colorOne">01</span>
                <h4>Best-in-class buses.</h4>
                <p>
                  Pre-book your favourite seat on one of our clean spacious air
                  conditioned buses, Track it live as it arrives.
                </p>
              </div>
            </div>

            <div className="support_feature">
              <div className="imgDiv">
                <img src={image2} alt="" />
              </div>

              <div className="singleInfo">
                <span className="number colorTwo">02</span>
                <h4>Home to office direct.</h4>
                <p>
                  Your stop is a 3 Min walk from your home and offic, No hassle
                  of switch modes of transport.
                </p>
              </div>
            </div>

            <div className="support_feature">
              <div className="imgDiv">
                <img src={image3} alt="" />
              </div>

              <div className="singleInfo">
                <span className="number colorTwo">03</span>
                <h4>As fast as a car Always on time.</h4>
                <p>
                  Ride on express routes with limited stop. 95% on-time arrivals
                  within 5 Min of the bus schedule.
                </p>
              </div>
            </div>

            <div className="support_feature">
              <div className="imgDiv">
                <img src={image4} alt="" />
              </div>

              <div className="singleInfo">
                <span className="number colorOne">04</span>
                <h4>Multiple Bus timings.</h4>
                <p>
                  Buses every from 20 Min. If your plan change, reschedule your
                  ride anytime for free.
                </p>
              </div>
            </div>

            <div className="support_feature">
              <div className="imgDiv">
                <img src={image5} alt="" />
              </div>

              <div className="singleInfo">
                <span className="number colorTwo">05</span>
                <h4>Time to yourself everyday.</h4>
                <p>
                  Cut off from the hectic traffice and get your peace of mind
                  back.
                </p>
              </div>
            </div>

            <div className="support_feature">
              <div className="imgDiv">
                <img src={image6} alt="" />
              </div>

              <div className="singleInfo">
                <span className="number colorOne">06</span>
                <h4>Safety for women.</h4>
                <p>
                  We provide only women buses for women to feel safe while
                  travelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
