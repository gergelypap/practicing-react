import { connect } from "react-redux";
import { clearTodos, completeTodos, toggleTodo } from "../actions";
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

const mapStateToProps = state => ({
  todos: getFilteredTodos(state.filter, state.todos)
});

const mapDispatchToProps = dispatch => ({
  onClick(id) {
    dispatch(toggleTodo(id));
  },
  onClearAll() {
    dispatch(clearTodos());
  },
  onCompleteAll() {
    dispatch(completeTodos());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
