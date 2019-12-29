import { v4 as uuid } from "node-uuid";
import {
  ACTION_ADD_TODO,
  ACTION_CLEAR_ALL,
  ACTION_COMPLETE_ALL,
  ACTION_TOGGLE_TODO
} from "../actions/todoActions";

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

export default (state = [], action) => {
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
