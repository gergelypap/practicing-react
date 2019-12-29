import React, { useContext } from "react";
import Context from "../store/context";
import { setFilter } from "../store/actions/filterActions";
import { FILTER } from "../constants";
import Filter from "../components/Filter";

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
    <Filter
      active={active}
      count={count}
      onClick={() => dispatch(setFilter(filter))}
    >
      {children}
    </Filter>
  );
};
