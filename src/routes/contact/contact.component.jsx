import "./contact.styles.scss";
import ContactCard from "../../components/contact-card/contact-card.components";
import InformationColumn from "../../components/information-column/information-column.component";
import { useAppContext } from "../../context/app-context";
import { useEffect } from "react";
const Contact = () => {
  const { setOtherNav } = useAppContext();
  useEffect(() => {
    setOtherNav();
  }, []);
  return (
    <div className="contact-page">
      {/* <div className="contact-content"> */}
      <ContactCard />
      <InformationColumn />

      {/* </div> */}
    </div>
  );
};

export default Contact;
