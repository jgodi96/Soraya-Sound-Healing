import "./home.styles.scss";
// import MainImage from "../../assets/Main (1).jpg";
import HowItWorks from "./how-it-works/how-it-works.components";

import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Instruments from "./heal-together/heal-together.components";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.components";

const Home = () => {
  return (
  <>
  <div className="home-wrapper">
      <section className="home-container">
        <div className="description-content">
          <h1 className="home-title">Soraya Sound Healing</h1>
          <h2 className="reiki-title">Reiki + Sound Healing</h2>
          <p>
            I welcome you just the way you are, honor where you've been, and
            together we realign you with your Highest Self
          </p>
          <Link to="/schedule" className="home-button-container">
            <Button buttonType="main">Book Now</Button>
          </Link>

          <div className="icons-container">
            <FiYoutube className="yt" />
            <FiTwitter className="tw" />
            <FiInstagram className="ig" />
          </div>
        </div>
        <div className="down-container">
          <div className="down-label">Learn More</div>
          <IoIosArrowDown className="down-icon" />
        </div>
      </section>

      <HowItWorks />
      <Instruments />
      </div>
</>
  );
};

export default Home;
