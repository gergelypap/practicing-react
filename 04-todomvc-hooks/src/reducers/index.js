import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import todosReducer from "./todoReducer";
import formReducer from "./formReducer";

export default combineReducers({
  filter: filterReducer,
  todos: todosReducer,
  form: formReducer
});
