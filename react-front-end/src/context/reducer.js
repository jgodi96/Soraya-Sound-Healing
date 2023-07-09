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
  MOBILE_NAV_SHOW,
  MOBILE_NAV_HIDE,
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
  if (action.type === ADD_CURRENT_CLASS) {
    return { ...state, currentClass: action.payload.classInfo };
  }
  if (action.type === CLEAR_CURRENT_CLASS) {
    return { ...state, currentClass: "" };
  }
  if (action.type === ADD_BILLING_INFORMATION) {
    return { ...state, billingInformation: action.payload.billingInfo };
  }
  if (action.type === CLEAR_BILLING_INFORMATION) {
    return { ...state, billingInformation: {} };
  }
  if (action.type === START_SUCCESS_MESSAGE) {
    return { ...state, showMessage: true };
  }
  if (action.type === END_SUCCESS_MESSAGE) {
    return { ...state, showMessage: false };
  }
  if (action.type === MOBILE_NAV_SHOW) {
    return { ...state, showMobileNav: true };
  }
  if (action.type === MOBILE_NAV_HIDE) {
    return { ...state, showMobileNav: false };
  }
};
export default reducer;
