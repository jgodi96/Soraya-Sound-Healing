import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  MAIN_NAV,
  OTHER_NAV,
  ADD_CLASS,
  CLEAR_CLASS,
  SET_BUTTON_TOGGLE,
  CLEAR_BUTTON_TOGGLE,
  ADD_CURRENT_CLASS,
  CLEAR_CURRENT_CLASS,
  ADD_BILLING_INFORMATION,
  CLEAR_BILLING_INFORMATION,
  START_SUCCESS_MESSAGE,
  END_SUCCESS_MESSAGE,
} from "./actions";

const initialState = {
  isMainNav: true,
  setButtonToggle: "",
  classesBooked: [],
  currentClass: "",
  billingInformation: {},
  showMessage: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setMainNav = () => {
    dispatch({ type: MAIN_NAV });
  };

  const setOtherNav = () => {
    dispatch({ type: OTHER_NAV });
  };
  const addClass = (classInfo) => {
    dispatch({ type: ADD_CLASS, payload: { classInfo } });
  };
  const clearClass = () => {
    dispatch({ type: CLEAR_CLASS });
  };
  const setButton = (buttonType) => {
    dispatch({ type: SET_BUTTON_TOGGLE, payload: { buttonType } });
  };
  const clearButton = () => {
    dispatch({ type: CLEAR_BUTTON_TOGGLE });
  };
  const addCurrentClass = (classInfo) => {
    dispatch({ type: ADD_CURRENT_CLASS, payload: { classInfo } });
  };
  const clearCurrentClass = () => {
    dispatch({ type: CLEAR_CURRENT_CLASS });
  };
  const addBillingInformation = (billingInfo) => {
    dispatch({ type: ADD_BILLING_INFORMATION, payload: { billingInfo } });
  };
  const clearBillingInformation = () => {
    dispatch({ type: CLEAR_BILLING_INFORMATION });
  };

  const showSuccessMessage = () => {
    dispatch({ type: START_SUCCESS_MESSAGE });
  };
  const hideSuccessMessage = () => {
    dispatch({ type: END_SUCCESS_MESSAGE });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setMainNav,
        setOtherNav,
        addClass,
        clearClass,
        setButton,
        clearButton,
        addCurrentClass,
        clearCurrentClass,
        addBillingInformation,
        clearBillingInformation,
        showSuccessMessage,
        hideSuccessMessage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
