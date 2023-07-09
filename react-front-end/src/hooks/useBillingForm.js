// import { init } from "emailjs-com";
import { useState } from "react";
// import { sendMessageForm } from "../utils/email-js/email";
import { useAppContext } from "../context/app-context";
import { useNavigate } from "react-router";

const useBillingForm = (validate) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  let navigate = useNavigate();
  const { addBillingInformation } = useAppContext();
  const [billingInfo, setBillingInfo] = useState(initialState);
  const [errors, setErrors] = useState({});

  // const { name, email, subject, message } = errors;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleSubmit = (event, formCurrent) => {
    event.preventDefault();

    const getErrors = validate(billingInfo);
    setErrors(validate(billingInfo));

    if (Object.keys(getErrors).length === 0) {
      // sendMessageForm(formCurrent);
      let path = "confirmation";
      addBillingInformation(billingInfo);
      setBillingInfo("");
      navigate(path);

      resetValues();
    } else {
      resetValues();
    }
  };
  const resetValues = () => {
    setBillingInfo(initialState);
  };

  return { handleChange, billingInfo, handleSubmit, errors };
};

export default useBillingForm;
