import "./how-it-works.styles.scss";
import firstAbout from "../../../assets/howitworks.jpg";
import secondAbout from "../../../assets/about2.jpg";
import bowls from '../../../assets/bowls.jpg'
import { Player } from 'video-react';
import '../../../../node_modules/video-react/dist/video-react.css';
import Video from '../../../assets/SoundPatterns.mp4'
const HowItWorks = () => {
  return (
    <section className="how-it-works-page">
      <div className="how-it-works-container">
        <div className="first-row-how">
          {/* <div
            className="first-image-how"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img className="first-image" src={firstAbout} />
          </div> */}
          <div className="first-how-description" data-aos="fade-left">
            <h1 className="first-how-title">What is a Sound Bath?</h1>
            A Sound Bath is a meditative experience involving resonant sounds. The
practice is an opportunity to detach from external stimulation and to settle
back to your breath and body. The right combination of sounds restores the
brain waves and unsettling emotions, creating a space of calm.
          </div>
        </div>
        <div className="second-row-how">
        <Player
      playsInline
      poster="/assets/poster.png"
      src={Video}
     
    />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
