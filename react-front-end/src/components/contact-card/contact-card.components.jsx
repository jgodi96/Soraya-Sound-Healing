import React from "react";
import InputRow from "../input-row/input-row.components";
import InputColumn from "../input-column/input-column.components";
import { useRef, useState } from "react";
import useEmailForm from "../../hooks/useEmailForm";
import Button from "../button/button.components";
import "./contact-card.styles.scss";
import validate from "../../errors/email-errors";
import Input from "react-phone-number-input/input";
import { useAppContext } from "../../context/app-context";

const ContactCard = () => {
  const { hideSuccessMessage, showMessage } = useAppContext();
  const form = useRef();
  const { handleChange, values, handleSubmit, errors } = useEmailForm(
    validate,
    form.current
  );
  const handleForm = (e) => {
    handleSubmit(e, form.current);

    setTimeout(() => {
      setValue("");
    }, 1000);

    setTimeout(() => {
      hideSuccessMessage();
    }, 5000);
  };
  const [value, setValue] = useState("");
  const { name, email, subject, message } = values;
  return (
    <div className="contact-card-container">
  
      <h1 className="contact-header">Contact Me</h1>
      <form ref={form} onSubmit={handleForm} className="contact-card">
        <InputRow>
          <InputColumn>
            <h2>Name *</h2>
            <input
              placeholder="name *"
              name="name"
              value={name}
              onChange={handleChange}
            ></input>
            {errors.name && <p className="error-paragraph">{errors.name}</p>}
          </InputColumn>
          <InputColumn>
            <h2>Phone</h2>
            <Input
              country="US"
              placeholder="phone (optional)"
              name="phone"
              value={value}
              onChange={setValue}
              maxLength={14}
            ></Input>
          </InputColumn>
        </InputRow>

        <InputRow>
          <InputColumn>
            <h2>Email *</h2>
            <input
              placeholder="email *"
              name="email"
              type="text"
              onChange={handleChange}
              value={email}
            ></input>
            {errors.email && <p className="error-paragraph">{errors.email}</p>}
          </InputColumn>

          <InputColumn>
            <h2>Subject *</h2>
            <input
              placeholder="subject *"
              name="subject"
              type="text"
              onChange={handleChange}
              value={subject}
            ></input>
            {errors.subject && (
              <p className="error-paragraph">{errors.subject}</p>
            )}
          </InputColumn>
        </InputRow>

        <div className="area-container">
          <h2>Message *</h2>
          <textarea
            className="text-area"
            rows="10"
            placeholder="message*"
            name="message"
            onChange={handleChange}
            value={message}
          ></textarea>
          {errors.message && (
            <p className="error-paragraph">{errors.message}</p>
          )}
          {showMessage && <p>Message Sent Successfully!</p>}
        </div>

        <Button buttonType="contact">Submit</Button>
      </form>
    </div>
  );
};

export default ContactCard;
