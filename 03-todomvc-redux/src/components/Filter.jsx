import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";
import { FILTER } from "../constants";

const Filter = ({ count, active, setFilter, children, filter }) => {
  return (
    <button
      className="filter"
      onClick={() => setFilter(filter)}
      disabled={active}
    >
      {children} ({count})
    </button>
  );
};

Filter.propTypes = {
  count: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  filter: PropTypes.oneOf(Object.keys(FILTER))
};

export default Filter;
