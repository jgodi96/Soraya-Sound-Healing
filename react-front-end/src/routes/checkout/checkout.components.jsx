import React, { useState } from "react";
import "./checkout.styles.scss";
import InputRow from "../../components/input-row/input-row.components";
import InputColumn from "../../components/input-column/input-column.components";
import Button from "../../components/button/button.components";
import { useAppContext } from "../../context/app-context";
import useBillingForm from "../../hooks/useBillingForm";
import { init } from "aos";
import { useRef } from "react";
import validate from "../../errors/billing-error";
import Input from "react-phone-number-input/input";

const Checkout = () => {
  const form = useRef();

  const { handleChange, billingInfo, handleSubmit, errors } = useBillingForm(
    validate,
    form.current
  );

  const { currentClass } = useAppContext();
  const [value, setValue] = useState("");

  const { firstName, lastName, email } = billingInfo;

  const bookNowHandler = (e) => {
    e.preventDefault();
    handleSubmit(e, form.current);
    setTimeout(() => {
      setValue("");
    }, 1000);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card-container">
        <h3>{`* App in production, no email will be sent and no date will be booked* `}</h3>
        <h1>Billing Details</h1>
        <form ref={form} onSubmit={bookNowHandler} className="checkout-card">
          <InputRow>
            <InputColumn>
              <h2>First Name *</h2>
              <input
                placeholder="first name*"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              ></input>
              {errors.firstName && (
                <p className="error-paragraph">{errors.firstName}</p>
              )}
            </InputColumn>
            <InputColumn>
              <h2>Last Name *</h2>
              <input
                placeholder="last name*"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              ></input>
              {errors.lastName && (
                <p className="error-paragraph">{errors.lastName}</p>
              )}
            </InputColumn>
          </InputRow>

          <InputColumn>
            <h2>Email *</h2>
            <input
              placeholder="email*"
              name="email"
              value={email}
              onChange={handleChange}
            ></input>
            {errors.email && <p className="error-paragraph">{errors.email}</p>}
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

          <Button buttonType="contact">Book Now</Button>
        </form>
      </div>

      <div className="checkout-column-container">
        <h1>Summary</h1>

        <div className="checkout-line"></div>
        <div className="location-row">
          {currentClass === "afternoon" ? (
            <h2>Location: Heartwell Park</h2>
          ) : (
            <h2>Location: Marine Stadium</h2>
          )}
        </div>
        <div className="email-row">
          <h2>Total: $50</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
