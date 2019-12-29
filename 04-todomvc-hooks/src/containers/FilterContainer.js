import React, { useContext } from "react";
import Context from "../store/context";
import { setFilter } from "../store/actions/filterActions";
import { FILTER } from "../constants";
import Filter from "../components/Filter";
import PropTypes from "prop-types";

function getCount(todos, type) {
  if (type === FILTER.SHOW_ALL) {
    return todos.length;
  }
  return todos.filter(todo =>
    type === FILTER.SHOW_COMPLETED ? todo.done : !todo.done
  ).length;
}

function FilterContainer({ type, children }) {
  const [{ filter, todos }, dispatch] = useContext(Context);

  return (
    <Filter
      active={filter === type}
      count={getCount(todos, type)}
      handleClick={() => dispatch(setFilter(type))}
    >
      {children}
    </Filter>
  );
}

FilterContainer.propTypes = {
  type: PropTypes.oneOf(Object.keys(FILTER)).isRequired,
  children: PropTypes.string.isRequired
};

export default FilterContainer;
