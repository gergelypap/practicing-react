import React from "react";
import "./Filter.css";
import classNames from "classnames";

const Filter = ({ count, active, onClick, children }) => (
  <button
    className={classNames("filter", { "filter--active": active })}
    onClick={onClick}
  >
    {children} ({count})
  </button>
);

export default Filter;
