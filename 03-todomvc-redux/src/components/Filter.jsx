import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

const Filter = ({ count, active, onClick, children }) => (
  <button className="filter" onClick={onClick} disabled={active}>
    {children} ({count})
  </button>
);

Filter.propTypes = {
  count: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Filter;
