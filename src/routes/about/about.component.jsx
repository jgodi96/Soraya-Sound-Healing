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

          <img src={Headshot}></img>
        </div>

        <p className="about-p">
          is a multi-talented artist living in Los Angeles, California. Soraya
          has performed Sound Baths and Sound Healings in California and around
          the US. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis
          hendrerit dolor magna eget est. Convallis posuere morbi leo urna
          molestie. Diam maecenas sed enim ut sem viverra aliquet. Sem et tortor
          consequat id. Neque volutpat ac tincidunt vitae semper quis lectus
          nulla. Tempor id eu nisl nunc mi ipsum faucibus vitae. In ante metus
          dictum at tempor commodo ullamcorper a lacus. Quam lacus suspendisse
          faucibus interdum posuere lorem ipsum dolor sit. Lobortis feugiat
          vivamus at augue eget arcu. Non odio euismod lacinia at quis risus
          sed. Ut enim blandit volutpat maecenas. Sed arcu non odio euismod
          lacinia at quis. Tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
      </div>
    </div>
  );
};

export default About;
