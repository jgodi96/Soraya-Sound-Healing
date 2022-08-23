import "./home.styles.scss";
// import MainImage from "../../assets/Main (1).jpg";
 import HowItWorks from "./how-it-works/how-it-works.components";

import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import {IoIosArrowDown} from "react-icons/io"
import Instruments from "./instruments/instruments.components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="scroll-container">
      <section className="home-container">
      
        <div className="description-content">
          <h1>Soraya Sound Healing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            
          </p>
          <Link to='/schedule' className="home-button-container">
            <button className="home-schedule-button">Schedule</button>
           
          </Link>
          

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
      
    </div>
  );
};

export default Home;
