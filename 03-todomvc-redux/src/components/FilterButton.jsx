import React from "react";
import "./FilterButton.css";
import classNames from "classnames";

const FilterButton = ({ count, active, onClick, children }) => (
  <button
    className={classNames("filter-button", { "filter-button--active": active })}
    onClick={onClick}
  >
    {children} ({count})
  </button>
);

export default FilterButton;
