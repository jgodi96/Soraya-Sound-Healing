import React from "react";
import Button from "../button/button.components";
import "./book-button-container.styles.scss";
import { useAppContext } from "../../context/app-context";

const BookButtonContainer = ({ children }) => {
  return <div className="book-button-container">{children}</div>;
};

export default BookButtonContainer;
