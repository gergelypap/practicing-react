import { ACTION_INPUT_CHANGE } from "../actions/formActions";
import { ACTION_ADD_TODO } from "../actions/todoActions";
import { v4 as uuid } from "node-uuid";

function addTodo(todos, text) {
  // if (todos.find(item => item.text === text) !== undefined) {
  //   throw new Error("You already added this!");
  // }
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
    default:
      return state;
  }
}
