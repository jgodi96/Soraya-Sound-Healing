import React from "react";
import { FiYoutube, FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { GrLocation, GrMailOption, GrPhone, GrPhoneHorizontal } from "react-icons/gr";
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
        <h2>SorayaSoundBath@gmail.com</h2>
      </div>
      <div className="email-row">
        <GrPhone/>
        <h2>(562) 502-7411</h2>
      </div>

      <div className="information-line"></div>
      <div className="icon-row">
   

        {/* <span>|</span> */}
        <FiFacebook className="tw-contact" />
        <span>|</span>
        <FiInstagram className="ig-contact" />
      </div>
    </div>
  );
};

export default InformationColumn;
