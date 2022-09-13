import LandingContent from "../../components/content/landing-content/landing-content.component";
import "./about.styles.scss";
const About = () => {
  return (
    <LandingContent>
      <div className="about-flex-container">
        <div className="about-info">
          <h1>Soraya Godinez</h1>
          <p>
            Soraya Godinez is a multi-talented artist living in Los Angeles,
            California. Soraya has performed Sound Baths and Sound Healings in
            California and around the US.{" "}
          </p>
        </div>
        <div className="about-photo">Photo</div>
      </div>
    </LandingContent>
  );
};

export default About;
