import { v4 as uuid } from "node-uuid";
import {
  ACTION_ADD_TODO,
  ACTION_CLEAR_ALL,
  ACTION_COMPLETE_ALL,
  ACTION_TOGGLE_TODO
} from "../actions/todoActions";

// export

function completeTodos(todos) {
  return todos.map(todo => {
    todo.done = true;
    return todo;
  });
}

// export default function(state, action) {
//   switch (action.type) {
//     case ACTION_ADD_TODO:
//       return addTodo(state, action.text);
//     case ACTION_TOGGLE_TODO:
//       return toggleTodo(state, action);
//     case ACTION_COMPLETE_ALL:
//       return completeTodos(state);
//     case ACTION_CLEAR_ALL:
//       return [];
//     default:
//       return state;
//   }
// }
