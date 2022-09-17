import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  MAIN_NAV,
  OTHER_NAV,
  ADD_CLASS,
  CLEAR_CLASS,
  SET_BUTTON_TOGGLE,
  CLEAR_BUTTON_TOGGLE,
} from "./actions";

const initialState = {
  isMainNav: true,
  setButtonToggle: "",
  classesBooked: [],
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
