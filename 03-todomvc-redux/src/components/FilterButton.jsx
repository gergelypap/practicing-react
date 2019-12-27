import React from "react";
import "./FilterButton.css";
import classNames from "classnames";

const FilterButton = ({ active, onClick, children }) => (
  <button
    className={classNames("filter-button", { "filter-button--active": active })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default FilterButton;
