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
            <h1 className="first-how-title">What is a Sound Bath?</h1>
            Using Clinical Hypnosis, a set of techniques designed to enhance
            concentration, used to reprogram the subconscious mind and help to
            cope better with anxiety or pain. When under hypnosis, you put your
            mind and body into a heightened state of learning and responsiveness
            to suggestions to alter undesired behaviors, thoughts, feelings, and
            psychological state. Hypnosis that is conducted by a trained
            hypnotherapist or health care professional is considered a safe,
            complementary, and alternative medical treatment.
          </div>
        </div>
        <div className="second-row-how">
          <div className="second-how-description" data-aos="fade-right">
            <h1 className="second-how-title">Breath Work and Meditation</h1>
            Mindfulness is the practice of being aware of what's going on in the
            moment and eliciting hyper-awareness of the ​surrounding
            environment. Studies now show with stronger evidence the positive
            effect of meditation on depression, anxiety, and chronic pain. In
            our experience, we can attest that meditation doesn't come easy to
            everybody. In the past few years, we had the chance to explore and
            develop a more ACTIVE approach to meditation that stresses the
            attention on one of the most common anchors used in traditional
            meditation: the breath. How can the simple act of breathing be so
            beneficial to our body and mind?
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
