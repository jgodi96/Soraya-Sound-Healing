import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import {
    MAIN_NAV,
    OTHER_NAV

} from "./actions";

const initialState = {
  isMainNav:true
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
 
  return (
    <AppContext.Provider
      value={{
        ...state,
        setMainNav,
        setOtherNav
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
