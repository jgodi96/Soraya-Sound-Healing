import "./home.styles.scss";
// import MainImage from "../../assets/Main (1).jpg";
 import HowItWorks from "./how-it-works/how-it-works.components";

import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import {IoIosArrowDown} from "react-icons/io"
import Instruments from "./instruments/instruments.components";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <div className="description-content">
          <h1>Soraya Sound Healing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            
          </p>
          <div className="home-button-container">
            <button className="home-schedule-button">Schedule</button>
           
          </div>

          <div className="icons-container">
            <FiYoutube className="yt" />
            <FiTwitter className="tw" />
            <FiInstagram className="ig"/>
              
          
          </div>
          
          
        </div>
        <div className="down-container">
        <div className="down-label">Learn More</div>
        <IoIosArrowDown className="down-icon"/>
        </div>
        </section>
        
      
      <HowItWorks/>
      <Instruments/>
      
    </>
  );
};

export default Home;
