import {
  ACTION_INPUT_CHANGE,
  ACTION_SET_FORM_ERROR
} from "../actions/formActions";
import { ACTION_ADD_TODO } from "../actions/todoActions";
import { v4 as uuid } from "node-uuid";

function addTodo(todos, text) {
  const newTodo = {
    id: uuid(),
    done: false,
    text
  };
  return [...todos, newTodo];
}

export default function(state, action) {
  switch (action.type) {
    case ACTION_INPUT_CHANGE:
      return {
        ...state,
        input: action.input
      };
    case ACTION_ADD_TODO:
      return {
        ...state,
        todos: addTodo(state.todos, action.text)
      };
    case ACTION_SET_FORM_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
