export default function validateBillingInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Please Enter a First Name!";
  }
  if (!values.email.trim()) {
    errors.email = "Please Enter an Email!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email Address is Invalid";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Please Enter a Last Name!";
  }
  return errors;
}
