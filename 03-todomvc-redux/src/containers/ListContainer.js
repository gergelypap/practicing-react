import { connect } from "react-redux";
import { clearTodos, completeTodos, toggleTodo } from "../actions/todoActions";
import { FILTER } from "../constants";
import List from "../components/List";

const getFilteredTodos = (filter, todos) => {
  switch (filter) {
    case FILTER.SHOW_COMPLETED:
      return todos.filter(item => item.done);
    case FILTER.SHOW_PENDING:
      return todos.filter(item => !item.done);
    default:
      return todos;
  }
};

const state = state => ({
  todos: getFilteredTodos(state.filter, state.todos)
});

const actions = {
  toggleTodo,
  clearTodos,
  completeTodos
};

export default connect(state, actions)(List);
