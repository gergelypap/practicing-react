import { setFilter } from "../actions";
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

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filterReducer,
  count: getCount(state.todoReducer, ownProps.filter)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
