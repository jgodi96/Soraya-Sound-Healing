import React from "react";
import "./confirmation.styles.scss";
import { useAppContext } from "../../context/app-context";

export const Confirmation = () => {
  const { billingInformation } = useAppContext();

  const { firstName, lastName, phone, email } = billingInformation;

  return (
    <div className="confirmation-page">
      <h1>Confirmation</h1>
      <div className="checkout-line"></div>
      <h2>{`Thank You ${firstName} ${lastName}! `}</h2>

      <h3>{`An Email has been sent to ${email} `}</h3>

      <h3>{`* App in production, no email will be sent and no date will be booked* `}</h3>
    </div>
  );
};

export default Confirmation;
