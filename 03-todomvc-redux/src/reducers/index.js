import { combineReducers } from "redux";
import { ACTION_SET_FILTER, FILTER } from "../actions";

const filterReducer = (state = FILTER.SHOW_ALL, action) => {
  if (action.type === ACTION_SET_FILTER && action.filter in FILTER) {
    return action.filter;
  }
  return state;
};

export default combineReducers({
  filterReducer
});
