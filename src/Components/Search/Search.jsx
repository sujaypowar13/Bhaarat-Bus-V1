/* eslint-disable no-unused-vars */
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

const Search = () => {
  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Register For Bus</span>
          </div>

          <div className="singleBtn">
            <span>Find My Bus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
