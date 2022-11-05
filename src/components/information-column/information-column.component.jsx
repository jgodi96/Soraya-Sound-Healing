import React from "react";
import { FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi";
import { GrLocation, GrMailOption } from "react-icons/gr";
import "./information-column.styles.scss";
const InformationColumn = () => {
  return (
    <div className="information-column-container">
      <div className="location-row">
        <GrLocation />
        <h2>Long Beach, California</h2>
      </div>
      <div className="email-row">
        <GrMailOption />
        <h2>Sgodinez@gmail.com</h2>
      </div>

      <div className="information-line"></div>
      <div className="icon-row">
        <FiYoutube className="yt-contact" />

        <span>|</span>
        <FiTwitter className="tw-contact" />
        <span>|</span>
        <FiInstagram className="ig-contact" />
      </div>
    </div>
  );
};

export default InformationColumn;
