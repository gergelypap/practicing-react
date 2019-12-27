import React from "react";
import "./FilterButton.css";

const FilterButton = ({ active, onClick, children }) => (
  <button
    className={["filter-button", active ? "filter-button--active" : ""].join(
      " "
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default FilterButton;
