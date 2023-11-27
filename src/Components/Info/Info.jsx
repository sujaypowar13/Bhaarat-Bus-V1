/* eslint-disable no-unused-vars */
import React from "react";
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";

const Info = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Travel to make memories all around the mumbai</h2>
          <button className="btn">View All</button>
        </div>

        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call buses from your phone and book a bus ticket</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>You can also call buses from your phone and book a bus ticket</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <BsBookmarkStarFill className="icon" />
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call buses from your phone and book a bus ticket</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
