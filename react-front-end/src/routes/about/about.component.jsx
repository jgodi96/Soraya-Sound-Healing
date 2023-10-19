import LandingContent from "../../components/content/landing-content/landing-content.component";
import "./about.styles.scss";

import HealImg from "../../assets/heal.jpg";
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
          <img className="heal-image" src={HealImg} />
          </div>
        </div>

        <div className="about-p">
        As a certified Meditation Sound Facilitator, I’ve studied and practiced many
modalities on how to properly create therapeutic sound frequencies and
vibrations through instruments.
My strong interest in mental health, music, and art inspired me to further
my growth in sound therapy. My mission is to create a safe and grounding
space for each individual who seeks a healthier way of living.
Throughout my 5 years of studies, I have facilitated in-home privates,
health and wellness events, and rehabilitative service programs for
discharged prisoners with TheSoundBathStudio.

        </div>
      </div>
    </div>
  );
};

export default About;
