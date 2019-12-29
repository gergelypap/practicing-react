import { FILTER } from "../constants";
import { ACTION_SET_FILTER } from "../actions/filterActions";

export default (state = FILTER.SHOW_ALL, action) => {
  if (action.type === ACTION_SET_FILTER && action.filter in FILTER) {
    return action.filter;
  }
  return state;
};
