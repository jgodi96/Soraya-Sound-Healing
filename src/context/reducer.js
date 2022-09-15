import { MAIN_NAV, OTHER_NAV } from "./actions";
const reducer = (state, action) => {
  if (action.type === MAIN_NAV) {
    return { ...state, isMainNav: true };
  }
  if (action.type === OTHER_NAV) {
    return { ...state, isMainNav: false };
  }
};
export default reducer;
