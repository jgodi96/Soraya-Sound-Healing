import "./home.styles.scss";
import MainImage from "../../assets/Main (1).jpg";
import HowItWorks from "./how-it-works/how-it-works.components";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="description-content">
          <h1>Soraya Sound Healing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="home-button-container">
            <button className="home-schedule-button">Schedule</button>
            <button className="home-learn-more-button">Learn More</button>
          </div>

          <div className="icons-container">
            <FiYoutube className="yt" />
            <FiTwitter className="tw" />
            <FiInstagram className="ig"/>
              
          
          </div>
        </div>
        <img className="hero" src={MainImage} alt="" />
      </div>
      
    </>
  );
};

export default Home;
