import "./button.styles.scss";

export const BUTTON_TYPES_CLASSES = {
  main: "main-button",
  contact: "contact-button",
  bookTime: "book-time-button",
};

const Button = ({ children, buttonType = "main", ...otherProps }) => {

  
  return (
    <button
      className={BUTTON_TYPES_CLASSES[buttonType]}
     
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
