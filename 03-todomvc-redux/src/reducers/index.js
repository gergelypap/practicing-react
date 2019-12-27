import { combineReducers } from "redux";
import {
  ACTION_ADD_TODO,
  ACTION_SET_FILTER,
  ACTION_TOGGLE_TODO
} from "../actions";
import { FILTER } from "../constants";
import { v4 as uuid } from "node-uuid";

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
          id: uuid(),
          text: action.text,
          done: false
        }
      ];
    case ACTION_TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default combineReducers({
  filterReducer,
  todoReducer
});
