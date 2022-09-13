import "./contact.styles.scss";
import InputRow from "../../components/input-row/input-row.components";
import Button from "../../components/button/button.components";
import InputColumn from "../../components/input-column/input-column.components";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-header">Contact Me</h1>
      <div className="icon-row">
        <FiYoutube className="yt-contact"/>
        
        <span>|</span>
       <FiTwitter className="tw-contact"/>
        <span>|</span>
        <FiInstagram className="ig-contact"/>
       
      </div>
      <form className="contact-card">
        <InputRow>
          <InputColumn>
            <h2>Name</h2>
            <input placeholder="name"></input>
          </InputColumn>
          <InputColumn>
            <h2>Phone</h2>
            <input placeholder="phone (optional)"></input>
          </InputColumn>
        </InputRow>

        <InputRow>
          <InputColumn>
            <h2>Email</h2>
            <input placeholder="email" name="name"></input>
          </InputColumn>

          <InputColumn>
            <h2>Subject</h2>
            <input placeholder="subject"></input>
          </InputColumn>
        </InputRow>

        <div className="area-container">
          <h2>Message</h2>
          <textarea
            className="text-area"
            rows="10"
            placeholder="Message"
          ></textarea>
          </div>
          
   

        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Contact;
