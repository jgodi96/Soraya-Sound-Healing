import LandingContent from "../../components/content/landing-content/landing-content.component";
import "./about.styles.scss";
import Headshot from "../../assets/headshot.png";
import { useAppContext } from "../../context/app-context";
import { useEffect } from "react";
const About = () => {
  const {
    setOtherNav,
    clearButton,
    clearCurrentClass,
    clearBillingInformation,
  } = useAppContext();
  useEffect(() => {
    setOtherNav();
    clearCurrentClass();
    clearBillingInformation();
    clearButton();
  }, []);
  return (
    <div className="about-page">
      <div className="about-flex-container">
        <div className="about-title-container">
          <div className="name-container">
            <h1>Soraya</h1>
            <h1>Godinez</h1>
          </div>
          <div className="img-container">
            <img src={Headshot}></img>
          </div>
        </div>

        <div className="about-p">
        is a certified facilitator in Sound Bath Therapy and Reiki. Throughout her 4 years of studies she has traveled to different events in California and around the US with The Sound Bath Studio. This encouraged her to facilitate her own sound baths for groups in homes and wellness events. 

She has also studied Visual Arts in Life Drawing and Oil Painting. Her work was featured in an Art show during her first year of studies. This experience inspired her to pursue her career as a full time Artist.
 
“Art and Sound Healing brings full awareness to myself and slows me down with my surroundings. My vision is for others to experience the same through my work.” 

        </div>
      </div>
    </div>
  );
};

export default About;
