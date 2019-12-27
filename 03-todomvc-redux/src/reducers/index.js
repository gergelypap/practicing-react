import { combineReducers } from "redux";
import {
  ACTION_ADD_TODO,
  ACTION_CLEAR_ALL,
  ACTION_COMPLETE_ALL,
  ACTION_INPUT_CHANGE,
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

export const todosReducer = (state = [], action) => {
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
    case ACTION_CLEAR_ALL:
      return [];
    case ACTION_COMPLETE_ALL:
      return state.map(todo => {
        todo.done = true;
        return todo;
      });
    default:
      return state;
  }
};

export const inputReducer = (state = "", action) => {
  if (action.type === ACTION_INPUT_CHANGE) {
    return action.value;
  }
  return state;
};

export default combineReducers({
  filter: filterReducer,
  todos: todosReducer,
  input: inputReducer
});
