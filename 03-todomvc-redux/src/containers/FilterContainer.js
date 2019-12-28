import { setFilter } from "../actions/filterActions";
import { connect } from "react-redux";
import "../components/Filters.css";
import Filter from "../components/Filter";
import { FILTER } from "../constants";

const getCount = (todos, filter) => {
  if (filter === FILTER.SHOW_ALL) {
    return todos.length;
  }
  return todos.filter(todo =>
    filter === FILTER.SHOW_COMPLETED ? todo.done : !todo.done
  ).length;
};

const state = (state, ownProps) => ({
  active: ownProps.filter === state.filter,
  count: getCount(state.todos, ownProps.filter)
});

const actions = {
  setFilter
};

export default connect(state, actions)(Filter);
