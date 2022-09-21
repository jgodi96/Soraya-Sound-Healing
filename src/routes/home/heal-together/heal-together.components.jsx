import "./heal-together.styles.scss";
import HealImg from "../../../assets/heal.jpg";
import Button from "../../../components/button/button.components";
import Footer from "../../../components/footer/footer.components";
import { Link } from "react-router-dom";
const HealTogether = () => {
  return (
    <section className="instruments-container">
      <div className="heal-title-box">
        <h1 className="heal-title">Lets Heal Together</h1>
      </div>
      <div className="heal-image-container">
        <img className="heal-image" src={HealImg} />
      </div>
      <div className="message-info">
        Send me a message to connect and ask any inquiries.
      </div>
      <Link to="contact">
      <Button buttonType="contact">Contact</Button>
      </Link>
      <Footer />
    </section>
  );
};

export default HealTogether;
