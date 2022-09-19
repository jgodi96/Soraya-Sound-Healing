export default function validateEmailInfo(values) {
  let errors = {};


  if (!values.name.trim()) {
    errors.name = "Please Enter a Name!";
  }
  if (!values.email.trim()) {
    errors.email = "Please Enter an Email!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email Address is Invalid";
  }
  if (!values.message.trim()) {
    errors.message = "Please Enter a Message!";
  }
  if (!values.subject.trim()) {
    errors.subject = "Please Enter a Subject!";
  }
  return errors;
}
