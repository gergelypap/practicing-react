import React, { useContext } from "react";
import "./Filter.css";
import Context from "../store/context";
import { setFilter } from "../actions/filterActions";
import { FILTER } from "../constants";

function getCount(todos, filter) {
  if (filter === FILTER.SHOW_ALL) {
    return todos.length;
  }
  return todos.filter(todo =>
    filter === FILTER.SHOW_COMPLETED ? todo.done : !todo.done
  ).length;
}

export default ({ filter, children }) => {
  const [state, dispatch] = useContext(Context);
  const active = state.filter === filter;
  const count = getCount(state.todos, filter);

  return (
    <button
      className="filter"
      onClick={() => dispatch(setFilter(filter))}
      disabled={active}
    >
      {children} ({count})
    </button>
  );
};
