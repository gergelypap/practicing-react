import { combineReducers } from "redux";
import { ACTION_ADD_TODO, ACTION_SET_FILTER, FILTER } from "../actions";

export const filterReducer = (state = FILTER.SHOW_ALL, action) => {
  if (action.type === ACTION_SET_FILTER && action.filter in FILTER) {
    return action.filter;
  }
  return state;
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          done: false
        }
      ];
    default:
      return state;
  }
};

export default combineReducers({
  filterReducer,
  todoReducer
});
