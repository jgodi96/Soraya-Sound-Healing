import "./contact.styles.scss";
import ContactCard from "../../components/contact-card/contact-card.components";
import InformationColumn from "../../components/information-column/information-column.component";
const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <ContactCard />
        <InformationColumn/>
        
     

      </div>
    </div>
  );
};

export default Contact;
