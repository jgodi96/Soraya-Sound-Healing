import React from "react";
import "./afternoon-component.styles.scss";
import HeartWell from "../../assets/HeartWell.png";
const AfternoonLocation = () => {
  return (
    <div
      className="afternoon-container"
      data-aos="fade"
      data-aos-duration="1000"
    >
      <div className="afternoon-location-container">
        <h1>Heartwell Park</h1>
        <h2>3965 N Bellflower Blvd, Long Beach, CA 90808</h2>
      </div>
      <img src={HeartWell} className="afternoon-img"></img>
    </div>
  );
};

export default AfternoonLocation;
