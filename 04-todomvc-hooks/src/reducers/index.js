import {
  ACTION_INPUT_CHANGE,
  ACTION_SET_FORM_ERROR
} from "../actions/formActions";
import {
  ACTION_ADD_TODO,
  ACTION_CLEAR_ALL,
  ACTION_COMPLETE_ALL,
  ACTION_TOGGLE_TODO
} from "../actions/todoActions";
import { v4 as uuid } from "node-uuid";
import { ACTION_SET_FILTER } from "../actions/filterActions";

function addTodo(todos, text) {
  const newTodo = {
    id: uuid(),
    done: false,
    text
  };
  return [...todos, newTodo];
}

function toggleTodo(todos, id) {
  return todos.map(todo => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }
    return todo;
  });
}

function completeTodos(todos) {
  return todos.map(todo => {
    todo.done = true;
    return todo;
  });
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
    case ACTION_TOGGLE_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.id)
      };
    case ACTION_COMPLETE_ALL:
      return {
        ...state,
        todos: completeTodos(state.todos)
      };
    case ACTION_CLEAR_ALL:
      return {
        ...state,
        todos: []
      };
    case ACTION_SET_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
}
