import {
  MAIN_NAV,
  OTHER_NAV,
  ADD_CLASS,
  CLEAR_CLASS,
  SET_BUTTON_TOGGLE,
  CLEAR_BUTTON_TOGGLE,
} from "./actions";
const reducer = (state, action) => {
  if (action.type === MAIN_NAV) {
    return { ...state, isMainNav: true };
  }
  if (action.type === OTHER_NAV) {
    return { ...state, isMainNav: false };
  }
  if (action.type === ADD_CLASS) {
    return { ...state, classesBooked: action.payload.classInfo };
  }
  if (action.type === CLEAR_CLASS) {
    return { ...state, classesBooked: [] };
  }
  if (action.type === SET_BUTTON_TOGGLE) {
    return { ...state, setButtonToggle: action.payload.buttonType };
  }
  if (action.type === CLEAR_BUTTON_TOGGLE) {
    return { ...state, setButtonToggle: "" };
  }
};
export default reducer;
