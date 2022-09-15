import React from "react";
import InputRow from "../input-row/input-row.components";
import InputColumn from "../input-column/input-column.components";
import Button from "../button/button.components";
import './contact-card.styles.scss'

const ContactCard = () => {
  return (
    <div className="contact-card-container">
    <h1 className="contact-header">Contact Me</h1>
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

      <Button buttonType="contact">Submit</Button>
    </form>
    </div>
  );
};

export default ContactCard;
