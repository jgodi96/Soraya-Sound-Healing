import React from "react";
import "./evening-component.styles.scss";
import Marina from "../../assets/Marina.png";
const EveningLocation = () => {
  return (
    <div className="evening-container" data-aos="fade" data-aos-duration="1000">
      <div className="evening-location-container">
        <h1>Marine Stadium</h1>
        <h2>5255 E Paoli Way, Long Beach, CA 90803</h2>
      </div>
      <img src={Marina} className="evening-img"></img>
    </div>
  );
};

export default EveningLocation;
