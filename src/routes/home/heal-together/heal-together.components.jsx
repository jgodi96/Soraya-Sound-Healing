import "./heal-together.styles.scss";
import HealImg from "../../../assets/heal.jpg";
import Button from "../../../components/button/button.components";
import Footer from "../../../components/footer/footer.components";
const HealTogether = () => {
  return (
    <section className="instruments-container">
      <div className="heal-title-box">
        <h1 className="heal-title">Lets Heal Together</h1>
      </div>
      <div className="heal-image-container">
        <img className="heal-image" src={HealImg} />
      </div>
      <h2 className="message-info">
        Send me a message to connect and ask any inquiries.
      </h2>
      <Button buttonType="contact">Contact</Button>
      <Footer />
    </section>
  );
};

export default HealTogether;
