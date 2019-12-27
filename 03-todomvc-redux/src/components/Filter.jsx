import React from "react";
import "./Filter.css";

const Filter = ({ count, active, onClick, children }) => (
  <button className="filter" onClick={onClick} disabled={active}>
    {children} ({count})
  </button>
);

export default Filter;
