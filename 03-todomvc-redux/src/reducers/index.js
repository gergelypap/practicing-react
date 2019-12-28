import { combineReducers } from "redux";
import {
  ACTION_ADD_TODO,
  ACTION_CLEAR_ALL,
  ACTION_COMPLETE_ALL,
  ACTION_INPUT_CHANGE,
  ACTION_SET_FILTER,
  ACTION_SET_FORM_ERROR,
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

const addTodo = (todos, action) => {
  if (todos.find(item => item.text === action.text) !== undefined) {
    throw new Error("You already added this!");
  }
  const newTodo = {
    id: uuid(),
    text: action.text,
    done: false
  };
  return [...todos, newTodo];
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_ADD_TODO:
      return addTodo(state, action);
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

export const formReducer = (
  state = {
    input: "",
    error: null
  },
  action
) => {
  if (action.type === ACTION_INPUT_CHANGE) {
    return { input: action.input, error: null };
  }
  if (action.type === ACTION_SET_FORM_ERROR) {
    return { input: action.input, error: action.message };
  }
  return state;
};

export default combineReducers({
  filter: filterReducer,
  todos: todosReducer,
  form: formReducer
});
