import "./how-it-works.styles.scss";
import firstAbout from "../../../assets/howitworks.jpg";
import secondAbout from "../../../assets/about2.jpg";

const HowItWorks = () => {
  return (
    <section className="how-it-works-page">
      <div className="how-it-works-container">
        <div className="first-row-how">
          <div
            className="first-image-how"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img className="first-image" src={firstAbout} />
          </div>
          <div className="first-how-description" data-aos="fade-left">
            <h1 className="first-how-title">Description</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="second-row-how">
          <div className="second-how-description" data-aos="fade-right">
            <h1 className="second-how-title">Description</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="second-image-how" data-aos="fade-left">
            <img className="second-image" src={secondAbout} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
